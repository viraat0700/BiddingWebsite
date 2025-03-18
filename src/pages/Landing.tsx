import React from 'react'

const Landing = () => {
  return (
    <div>
      <nav className='border flex justify-between'>
        <div className='flex m-2 px-2 gap-3 items-center'>
            <b>BiddingWebsite</b>
            <input className='border rounded p-1 focus:outline-none ' type="search" name="" id="search" title='searchbar' placeholder='Search your location' />
        </div>
        <div className='flex items-center m-2 px-2'>
            <button className='border rounded-md p-1 px-2'>Login/SignUp</button>
        </div>
      </nav>
    </div>
  )
}

export default Landing
