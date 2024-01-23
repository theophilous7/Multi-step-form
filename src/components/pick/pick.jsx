import React from 'react'
import "./pick.css"

const pick = () => {
  return (
    <div className='holder-pick'>
      <h1>Pick add-ons</h1>
      <p>Adds-on helps enhance your gaming experience</p>
      <div className="pick-box">
        <div className="pick-content">
            <input type="checkbox" className='checkbox'/>
                <div className='wrapper'>
                    <span>Online service</span>
                    <p>Access your multiplayer games</p>
                </div>
            <span>+$1/mo</span>
        </div>
      </div>
      <div className="pick-box">
        <div className="pick-content">
            <input type="checkbox" className='checkbox'/>
            <div className='wrapper'>
            <span>Larger storage</span>
            <p>Extra 1TB of cloud save</p>
            </div>
            <span>+$2/mo</span>
        </div>
      </div>
      <div className="pick-box">
        <div className="pick-content">
            <input type="checkbox" className='checkbox'/>
            <div className='wrapper'>
            <span>Customizable profile</span>
            <p>Custom theme on your profile</p>
            </div>
            <span>+$2/mo</span>
        </div>
      </div>
    </div>
  )
}

export default pick
