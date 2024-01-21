import React from 'react'
import "./personal.css"

const personal = () => {
  return (
    <div className='personal'>
      <h1>Personal Info</h1>
      <p>Please provide your name, email addrress, and phone number.</p>
      <label>
        <span>Name</span>
        <input type="text" placeholder='e.g. Stephen King'/>
      </label>
      <label>
        <span>Email Address</span>
        <input type="text" placeholder='e.g. stephenking@lorem.com'/>
      </label>
      <label>
        <span>Phone Number</span>
        <input type="text" placeholder='e.g. +1 234 567 890'/>
      </label>
    </div>
  )
}

export default personal
