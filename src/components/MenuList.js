import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';

import GetApi from './GetApi'

import {connect} from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

class MenuList extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ListSubheader>目录</ListSubheader>
        <Divider />
        <List>
          <ListItem button>
            <Link to="/">概述</Link>
          </ListItem>
          <ListSubheader>接口列表</ListSubheader>
          <Divider />
          {this.props.menus.map((menu) => (
              <ListItem button>
                <Link to={`/api/${menu.index}`}>{menu.menuname}</Link>
              </ListItem>
              )
            )
          }
          <ListSubheader>其他说明</ListSubheader>
          <Divider />
          <ListItem button>
            <Link to="/phpcodestandard">PHP编码规范模板</Link>
          </ListItem>
          <ListItem button>
            <Link to="/about">关于Ardoc</Link>
          </ListItem>
        </List>
      </div>
    )
  }
}

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

MenuList = connect()(MenuList)
export default withStyles(styles)(MenuList);
