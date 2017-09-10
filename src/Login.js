import React, { Component } from 'react';
import './Login.css';
import { Form, Input, Button } from 'reactstrap';

import { connect } from 'react-redux';


 class Login extends Component {
 	constructor(props) {
 		super(props);
 		this.state = {
 			showLog: true,
 			text:'Enter',
 			butColor:'primary'
 		};

 		this.handleLoginChange = this.handleLoginChange.bind(this);
 		this.handlePasswordChange = this.handlePasswordChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);

 	} 

 	handleSubmit(event) {
 		event.preventDefault()
 		if (this.props.loginStore.login === 'user' && this.props.loginStore.password === 'password') {
 			this.setState({
 				butColor:'success',
 				text:'success'
 			});

 			document.location.href='Main'

 		} else {
 			this.setState({
 		 		butColor: 'danger',
				text: 'ops... try again'
 		 	});
 		 };

 	}

 	handleLoginChange(event) {
 		this.props.addLogin(event.target.value)
 	}

 	handlePasswordChange(event) {
 		this.props.addPassword(event.target.value)
 	}

 	handleClick(event) {
		this.setState({showLog: true});
  	}

 	render () {
 		return (
 			<Form onSubmit={this.handleSubmit} className='form__Login'>
 				<Input
 					type ='text'
 					placeholder = 'login'
 					value = {this.state.login}
 					onChange = {this.handleLoginChange}
 				/>
 				<Input
 					type ='password'
 					placeholder = 'password'
 					value = {this.state.password}
 					onChange = {this.handlePasswordChange}
 				/>
 				<Button className='form__Login' outline color={this.state.butColor}>{this.state.text}</Button>
 			</Form>
 		);
 	}
 }

export default connect(
  state => ({
  	loginStore:state.loginStore
  }),
  dispatch => ({
  	addLogin : (loginData) => {
  		dispatch({type: 'add', login: loginData})
  	},
  	addPassword : (Password) => {
  		dispatch({type: 'pass', password: Password})
  	}
  })
)(Login);
