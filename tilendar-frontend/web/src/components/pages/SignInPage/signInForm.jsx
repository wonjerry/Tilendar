import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SignInFormContainer from '../../../containers/SignInFormContainer';

const style = {
  height: 300,
  width: 450,
  margin: 20,
  padding: 20,
  display: 'inline-block',
};

class SignInForm extends Component {
  render() {
    return (
      <Paper style={style} zDepth={3}>
        <SignInFormContainer />
      </Paper>
    );
  }
}

export default SignInForm;
