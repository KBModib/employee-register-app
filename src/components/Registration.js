import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'

export default function Registration() {
  return (
 <Form className='form'>
    <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="lastname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter Surname" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="employeeID">
        <Form.Label>Employee ID</Form.Label>
        <Form.Control type="alphanumeric" placeholder="Enter Employee ID Number"/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" >
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
    <Form.Group className="mb-3" controlId="Image">
        <Form.Label>Profile image</Form.Label>
        <Form.Control type="file" placeholder="Add Profile Image" />
        <Form.Text className="text-muted">
        Ensure that your image shows your face clearly. No sunglasses, side poses, accessories that obstruct the face from full view.
        </Form.Text>
    </Form.Group>
    <Button variant="primary" type="submit">
        Submit
    </Button>
</Form>
   
  )
}
