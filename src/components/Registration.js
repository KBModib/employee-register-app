import React, { setState }  from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import { Component } from 'react';

export default class Registration extends Component {
   userData;
    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeEmployeeID = this.onChangeEmployeeID.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          employeeID: '',
          password: '',
          image: ''
      }
    }
  onChangeFirstName(e) {
    this.setState({firstName: e.target.value})
  }
  onChangeLastName(e) {
    this.setState({lastName: e.target.value})
  }
  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }
  onChangeEmployeeID(e) {
    this.setState({employeeID: e.target.value})
  }
  onChangePassword (e) {
    this.setState({password: e.target.value})
  }
  onChangeImage (e) {
    this.setState({image: e.target.value})
  }
  onSubmit(e) {
        e.preventDefault()
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          employeeID: '',
          password: '',
          image: ''
      })
    }
  componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
             firstName: this.userData.firstName,
             lastName: this.userData.lastName,
             email: this.userData.email,
             employeeID: this.userData.employeeID,
             password: this.userData.password,
             image: this.userData.image
            })
        } 
           else {
          this.setState({
          firstName: '',
          lastName: '',
          email: '',
          employeeID: '',
          password: '',
          image: ''
        })
        }
       
    }

    componentDidUpdate(nextProps, nextState) {
     localStorage.setItem('user', JSON.stringify(nextState));
  }
    
   onSubmit(e) {
     e.preventDefault()
     console.log(this.state.props)
  }
  
 
  // validatePasswords() {
 //     const password = document.getElementsByClassName("password-og").value;
  //    const passwordConfirm = document.getElementsByClassName("password-confirm").value;
    
 //     for(e = 0; e < password.length; e++) {
  //      if(password[e] === passwordConfirm[e]) {
  //        alert("Password approved");}
   //     else {
  //        alert("Passwords do not match");
   //       return;
   //     }
  //    }
  //  }
      render () {
  return (
 <Form className='form' onSubmit={this.onSubmit}>
    <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" value={this.state.firstName} onChange={this.onChangeFirstName}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter Surname" value={this.state.lastName} onChange={this.onChangeLastName}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="employeeID">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="alphanumeric" placeholder="Enter Employee ID Number" value={this.state.employeeID} onChange={this.onChangeEmployeeID}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="password-og" value={this.state.password} onChange={this.onChangePassword}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" className="password-confirm"/>
      </Form.Group>
    <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Profile image</Form.Label>
        <Form.Control type="file" placeholder="Add Profile Image" value={this.state.image} onChange={this.onChangeImage}/>
        <Form.Text className="text-muted">
        Ensure that your image shows your face clearly. No sunglasses, side poses, accessories that obstruct the face from full view.
        </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit" >
        Submit
    </Button>
</Form>
)
  }}
