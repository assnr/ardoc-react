import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import FetchJson from '../util/FetchJson'
import Config from '../util/Config'
import Loading from './Loading'

class Apicomment extends React.Component
{
    componentDidMount() {
    }

    fetchApi(){
      this.props.dispatch({type: "setApiName", source: this.props.capiname})
      FetchJson(Config.apiurl + 'api/docjson', {"apiname": this.props.capiname}).then((json) => {
        this.props.dispatch({type:'addClassData', source: json.data})
      })
    }

    render() {
      if (this.props.apiname != this.props.capiname) {
        this.fetchApi()
      }
      if (this.props.classData) {
        let doc = this.props.classData
        let {cdoc, methods} = doc
        let cdocComments = ''
        Object.keys(cdoc).forEach((key) => {
          switch (key) {
            case 'docDesc':
              break;
            case 'link':
              cdoc.key = `[${cdoc.key}](${cdoc.key})`
              break
            default:
          }
          cdocComments += `
- **${key}**                   ： *${cdoc[key]}*
          `
        })

        let metComments = '';
        let mk = 1;
        for (let method of methods) {
          let funcshow = `
|*名称*|属性|说明|是否必须|
|---|----|---|-------|
`
          method.funcParamsRead.forEach((mfunc, index) => {
              funcshow += `|**${mfunc.pname}**|*${mfunc.type}*|${mfunc.pdes}|**${mfunc.isreq}**|
              `
          })
          metComments += `
### ${mk}. *${method.methodName}*
${method.methodComment}

- 名称               *${method.apiname}*
- 作者               **${method.author}**
- 返回               *${method.return}*


* 参数说明
${funcshow}

`
          mk++;
        }
        let source = `
## Class ${doc.namespace}:${doc.className}
${cdoc.docDesc}
### 属性
${cdocComments}

---------------------------------------------
${metComments}

`
      return (
        <ReactMarkdown className="markdown-body" source={source} />
      )
    } else {
      return <Loading msg="加载文档中..." />
    }
  }
}
const mapStateToProps = state => {
  return {
    classData: state.classData,
    menuData: state.menuData,
    apiname: state.apiname
  }
}
Apicomment = connect(mapStateToProps, null)(Apicomment)
export default Apicomment
