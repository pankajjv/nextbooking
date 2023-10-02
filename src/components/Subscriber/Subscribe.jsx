import React from 'react'

function Subscribe() {
  return (
    <div className='section_padding subscribe '>
        <span style={{fontSize:'24px', fontWeight:'600',marginTop:'4rem'}}>Subscribe Newletter & get Latest News</span>
        <div className='emailGroup flex'>
        <input type='email' className='email' placeholder='Enter your email address'></input>
        <button className='btn2'>subscribe</button>

        </div>
    </div>
  )
}

export default Subscribe
