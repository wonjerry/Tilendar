import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { config } from '../../../config';

const style = {
  height: 500,
  width: 450,
  margin: 20,
  padding: 20,
  display: 'inline-block',
};

class SignUpForm extends Component {
	handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.target);
		
		fetch(`${config.apiServer}/api/users/`, {
			method: 'POST',
			body: data,
		}).then( response =>  {
			return response.json();
		}).then( jsonData => {
			if (jsonData.result === 'success') {
				this.props.history.push('/signin');
			}
			console.log(jsonData);
		}).catch( error => {
			// TODO(hyungsun): Make this better.
			alert('Sign up Failed.');
			console.log(error);
		});
	}
	
  render() {
    return (
			<Paper style={style} zDepth={3}>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<h2>Create your personal account</h2>
					<TextField floatingLabelText="Username" hintText="Input user name." fullWidth={true} />
					<TextField floatingLabelText="Email" hintText="Input user email." fullWidth={true} />
					<TextField
						floatingLabelText="Password"
						hintText="Input user password."
						type="password"
						fullWidth={true}
					/>
					<RaisedButton type="submit" label="Join" primary={true} fullWidth={true} />
				</form>
			</Paper>
    );
  }
}

export default SignUpForm;
