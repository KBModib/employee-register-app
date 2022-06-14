import React, {useState, setState, getState} from 'react';


export default function Registration() {

  const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [employeeID, setEmployeeID] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "firstName"){
          setFirstName(value);
      }
      if(id === "lastName"){
          setLastName(value);
      }
      if(id === "email"){
          setEmail(value);
      }
      if(id === "employeeID"){
        setEmployeeID(value);
    }
      if(id === "password"){
          setPassword(value);
      }
      if(id === "confirmPassword"){
          setConfirmPassword(value);
      }

  }

  const handleSubmit  = () => {
      console.log(firstName,lastName,email,password,confirmPassword);
  }
  return (
    <div className="form">
      <h1 className="heading">Employee Log Registration</h1>
      <div className="form-body">
          <div className="fname">
              <label className="form__label" for="firstName">First Name </label>
              <input className="form__input" type="text" id="firstName" placeholder="First Name" value={firstName} onChange = {(e) => handleInputChange(e)}/>
          </div>
          <div className="lname">
              <label className="form__label" for="lastName">Last Name </label>
              <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name" value={lastName} onChange = {(e) => handleInputChange(e)}/>
          </div>
          <div className="email">
              <label className="form__label" for="email">Email </label>
              <input  type="email" id="email" className="form__input" placeholder="Email" value={email} onChange = {(e) => handleInputChange(e)}/>
          </div>
          <div className="employeenum">
              <label className="form__label" for="employeeID">Employee Number</label>
              <input  type="alphanumeric" id="employeeID" className="form__input" placeholder="Employee ID" value={employeeID} onChange = {(e) => handleInputChange(e)}/>
          </div>
          <div className="password">
              <label className="form__label" for="password">Password </label>
              <input className="form__input" type="password"  id="password" placeholder="Password" value={password} onChange = {(e) => handleInputChange(e)}/>
          </div>
          <div className="confirm-password">
              <label className="form__label" for="confirmPassword">Confirm Password </label>
              <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
          </div>
      </div>
      <div>
          <button type="submit" class="btn" onClick={()=>handleSubmit()}>Register</button>
      </div>
    </div>      
)       
}