import React from 'react'
import ReactMarkdown from 'react-markdown'
class About extends React.Component {
    render() {
      let source = `
# ardoc 说明
- 本项目是基于 arphp 5.1 restful api 规范编码自动生成的PHP接口描述文档

- 生成版本号 v *1.0.1*

## 开发者
- 本项目前端采用 react 架构,  实现redux react-router material-ui markdown 等组件化开发构造

- 如果您有更好的建议和意见并有志于完善**ardoc**相关源码以提供个更好的体验服务请联系 qq *1993921737*

## 使用须知
**本项目源码仅作为生成工具，如果您使用造成的包括但不限于接口泄露风险等责任后果自负**

`

      return (
        <ReactMarkdown className="markdown-body" source={source} />
      )
    }
}
export default About
