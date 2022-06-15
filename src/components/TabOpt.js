import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Registration from './Registration'
import Login from './Login'

export default function TabOpt () {
  return (
    <div className="tab-container">
    <Tabs
  defaultActiveKey="login"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 tab-box"
>
  <Tab eventKey="registration" title="Register" className="tab-key">
    <Registration/>
  </Tab>
  <Tab eventKey="login" title="Login" className="tab-key">
    <Login/>
  </Tab>
</Tabs>
</div>
  )
}
