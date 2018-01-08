import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {connect} from 'react-redux'
import Button from 'material-ui/Button'
import ReactMarkdown from 'react-markdown'

import Apicomment from './components/Apicomment'
import MenuList from './components/MenuList'
import Layout from './components/Layout'

import FetchJson from './util/FetchJson'
import Config from './util/Config'

class App extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidMount() {
      FetchJson(Config.apiurl + 'api/docjsonMenu', {docmenu: Config.docname}).then((json) => {
        this.props.dispatch({type:'addMenuData', source: json})
      }).catch((res) => {
        alert('api docjsonMenu catch error');
      })
    }

    render() {
      return (
        <Router>
          <Layout />
        </Router>
      )
    }

}

const mapStateToProps = state => {
  return {
    classData: state.classData,
    menuData: state.menuData
  }
}

// 改变内置方法
const mapDispatchToProps = dispatch => {
  return {
    dispatch: () => {
      alert(123)
    }
  }
}

App = connect(mapStateToProps, null)(App)
export default App
