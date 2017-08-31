 import React, { Component } from 'react';
 import './Login.css';
 import { Form, Input, Button } from 'reactstrap';

 class Login extends Component {
 	constructor(props) {
 		super(props);
 		this.state = {
 			login: '',
 			password:'',
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
 		if (this.state.login === 'user' && this.state.password === 'password') {
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
 		this.setState({login : event.target.value});
 	}

 	handlePasswordChange(event) {
 		this.setState({password : event.target.value});
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
 					type ='text'
 					placeholder = 'password'
 					value = {this.state.password}
 					onChange = {this.handlePasswordChange}
 				/>
 				<Button className='form__Login' outline color={this.state.butColor}>{this.state.text}</Button>
 			</Form>
 		);
 	}
 }

 export default Login