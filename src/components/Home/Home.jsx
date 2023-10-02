import React from 'react'
import mountaines from '../../assets/mountains.mp4'


function Home() {
  return (
   <div className='homeSection section_padding flex'>
      <div>
        <p style={{fontSize: '46px', fontWeight: '600', letterSpacing:'2px', lineHeight: '3rem', fontFamily:'initial'}}>Create Ever Lasting<br/> Memories With Us</p>
      </div>
      <div className='banner flex'>
        <div className='videoBanner'>
          <video
          src={mountaines}
          className='video'
          autoPlay
          muted
          loop
          // playsinline
          
          />
        </div>
        <div className='imageBanner'>
          {/* <img src={flight1} alt='404'/> */}
        </div>

      </div>

   </div>
  )
}

export default Home
