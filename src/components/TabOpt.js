import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Registration from './Registration'
import Login from './Login'
import Clock from 'react-live-clock'

export default function TabOpt () {
  return (
    <div>
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
<footer className="time" align="center">
 <Clock format={'dddd, MMMM DD, YYYY, h:mm:ss A'} ticking={true} />
</footer>
</div>
  )
}
