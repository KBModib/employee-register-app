import React from 'react'


export default function Table() {
    const fname = form.getElementByClassName('firstName').item(0).textContent
    const lname = form.getElementByClassName('lastName').item(0).textContent
    const email = form.getElementByClassName('email').item(0).textContent
    const employeeid = form.getElementByClassName('employeeID').item(0).textContent
    const imageSRC = form.getElementByClassName('image').item(0).src
    const time = form.getElementByClassName('time').item(0).textContent

    logDataEntry(fname, lname, email, employeeid, imageSRC, time); {
      const dataRow = document.createElement('div');

      dataRow.classList.add('data-row')
        
    }
  return (
      <>
    <div className="data-row">
        <span className="data-fname table-header table-column">First Name</span>
        <span className="data-lname table-header table-column">Last Name</span>
        <span className="data-email table-header table-column">Email</span>
        <span className="data-employeeid table-header table-column">Employee ID</span>
        <span className="data-time table-header table-column">Timestamp</span>
        <span className="data-image table-header table-column">Image</span>
    </div>
    <div className="data-items>
      </div>
    <div   
  )
}
