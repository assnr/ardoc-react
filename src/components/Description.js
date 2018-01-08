import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import FetchJson from '../util/FetchJson'
import Config from '../util/Config'

class Description extends React.Component{
  state = {
    queryPending: true,
  }
  componentDidMount(){
    FetchJson(Config.apiurl + 'api/description').then((json) => {
      this.props.dispatch({type: "setDescription", source: json.data})
    })
  }

  getDescription() {
    let {description} = this.props
    let source = `
# ${description.name}
### 通信说明
${description.communication}
### 参数说明
${description.params}
### 其他说明
${description.other}
`
    return source
  }

  render() {
    let {description} = this.props
    let renderComponent = null;
    if (description) {
      renderComponent = <ReactMarkdown className="markdown-body" source={this.getDescription()} />
    } else {
      renderComponent = '正在加载'
    }
    return (
      <div>
        {renderComponent}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    description: state.description,
  }
}
Description = connect(mapStateToProps, null)(Description)
export default Description
