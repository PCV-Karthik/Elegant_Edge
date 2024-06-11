import React from 'react'

const Navbar = () => {
  return (
    <div className="container-Nav">
        <div className="wrapper" style={{padding:'20px'}}>
          <div className='flex center'>
            <img src="Screenshot 2024-06-11 at 4.23.59 AM.png" alt="" className="logo" />
            <img src="Screenshot 2024-06-11 at 4.26.21 AM.png" alt="" className='logo'/>
          </div>
            <button className="btn">Get Free Quote</button>
        </div>
    </div>
  )
}

export default Navbar