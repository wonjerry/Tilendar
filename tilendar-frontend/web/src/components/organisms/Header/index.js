import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import { config } from '../../../config';
import { signIn, signOut } from '../../../utils/firebaseUtil';
import { actionCreators as authActionCreators } from '../../../actions/auth';
import { connect } from 'react-redux';

const Logged = (props) => (
  // TODO(hyungsun): Add badge and current user avatar(See material-ui/Avatar) from github.
  <FlatButton label='Sign Out' onClick={() => { 
    signOut()
      .then(user => { props.setCurrentUser(user) })
      .catch(error => {
        console.error(error);
      });
    }}
  />
);

const NotLogged = props => (
  <FlatButton label='Sign In' onClick={() => {
    signIn()
      .then(user => { props.setCurrentUser(user) })
      .catch(error => {
        console.error(error);
      });
    }}
  />
);

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <AppBar
        title={config.appName}
        iconElementRight={currentUser ? <Logged {...this.props}/> : <NotLogged {...this.props}/>}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

const mapDispatchToProps = {
  setCurrentUser: authActionCreators.setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
