import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { config } from '../config';

class SignInFormContainer extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch(`${config.apiServer}/api/users/${data.Username}`, {
      method: 'GET',
      body: data,
    }).then( response => {
      return response.json();
    }).then( jsonData => {
      // TODO(hyungsun): Change this after protocol is defined.
      if (jsonData.result === 'success') {
        this.props.createSetCurrentUserAction(jsonData.user);
      }
    }).catch( error => {
      // TODO(hyungsun): Make this better.
      alert('Sign in Failed.');
      console.log(error);
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Sign in</h2>
        <TextField 
          floatingLabelText="Username" 
          hintText="Input user name." 
          fullWidth={true} />
        <TextField
          floatingLabelText="Password"
          hintText="Input user password."
          type="password"
          fullWidth={true} />
        <RaisedButton 
          type="submit" 
          label="Sign in" 
          primary={true} 
          fullWidth={true} />
        </form>
    );
  }
}

const createSetCurrentUserAction = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    createSetCurrentUserAction: bindActionCreators(createSetCurrentUserAction, dispatch),  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInFormContainer);
