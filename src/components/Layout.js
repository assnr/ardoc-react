import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Apicomment from './Apicomment'
import MenuList from './MenuList'
import Loading from './Loading'

import Config from '../util/Config'
import FetchJson from '../util/FetchJson'
import Description from './Description'
import Codestandard from './Codestandard'
import About from './About'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
  },
  paper: {
    padding: 10,
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Layout extends React.Component {
  componentDidMount() {
  }

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={3}>
              <Paper className={classes.paper}>
                { this.props.menuData && <MenuList menus={this.props.menuData.data} /> }
              </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classes.paper}>
                <Switch>
                  <Route exact path="/" component={( { match } ) => <Description />} />
                  <Route exact path="/about" component={( { match } ) => <About />} />
                  <Route exact path="/phpcodestandard" component={( { match } ) => <Codestandard />} />
                  <Route path="/api/:apiname" render={( { match } ) =>
                      (
                        <Apicomment capiname={`${match.params.apiname}`} />
                      )
                    }
                  />
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
    )
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
}
const mapStateToProps = state => {
  return {
    classData: state.classData,
    menuData: state.menuData,
    apiname: state.apiname,
  }
}
Layout = connect(mapStateToProps, null)(Layout)
export default withStyles(styles)(Layout);
