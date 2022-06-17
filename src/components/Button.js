import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

 const ButtonFunc = (props) => {
    const navigate = useNavigate();
  return (
    <Button variant="primary" type="submit" onClick={() => navigate("/Landing")}>
    Register
</Button>
  )
}
export default ButtonFunc;
