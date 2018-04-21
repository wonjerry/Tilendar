import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HeaderContainer from '../../../containers/HeaderContainer';
import SignInForm from './signInForm.jsx';

class SignInPage extends Component {
  render() {
    if (!this.props.currentUser) {
      return (
        <div>
          <HeaderContainer {...this.props} />
          <SignInForm />
        </div>
      );  
    }

    return (
      <Redirect to='/' />
    );
  }
}

export default SignInPage;
