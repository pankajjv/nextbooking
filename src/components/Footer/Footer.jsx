import React from 'react'
import logo from '../../assets/flightlogo3.png'
import { AiOutlineTwitter } from 'react-icons/ai'

import { BiLogoFacebook } from 'react-icons/bi'
import { TiSocialPinterest } from 'react-icons/ti'
import {AiTwotoneHeart} from 'react-icons/ai'


function Footer() {
  return (
    <div className='footerContainer section_padding'>

    <div className='footer'>
      <div className="footerCard">
        <div>
          <img src={logo} alt='494' className='footerLogo'/>
        </div>
        <span style={{color:'gray'}}>Your mind should be stronger <br/>than your feelings, fly!</span>
        <div className='socialIcons'>
          <span className='iconbox'><AiOutlineTwitter /></span>
          <span className='iconbox'><BiLogoFacebook  /></span>
          <span className='iconbox'><TiSocialPinterest  /></span>
        </div>
      </div>
      <div className="footLink">
        <span style={{lineHeight:'2.5rem', fontFamily:'revert'}}>Information</span>
        <div className='links'>
          <a href='#' className='primary'>Home</a>
          <a href='#' className='primary'>Explore</a>
          <a href='#' className='primary'>Flight Status</a>
          <a href='#' className='primary'>Travel</a>
          <a href='#' className='primary'>Check-in</a>
          <a href='#' className='primary'>Manage your booking</a>

        </div>
      </div>
      <div className="footLink">
        <span style={{lineHeight:'2.5rem'}}>Quick Guide</span>
        <div className='links'>
          <a href='#' className='primary'>FAQ</a>
          <a href='#' className='primary'>How to</a>
          <a href='#' className='primary'>Features</a>
          <a href='#' className='primary'>Baggage</a>
          <a href='#' className='primary'>Route Map</a>
          <a href='#' className='primary'>Our communities</a>

        </div>
      </div>
      <div className="footLink">
        <span style={{lineHeight:'2.5rem'}}>Information</span>
        <div className='links'>
          <a href='#' className='primary'>Chauffer</a>
          <a href='#' className='primary'>Our partner</a>
          <a href='#' className='primary'>Destination</a>
          <a href='#' className='primary'>Carrer</a>
          <a href='#' className='primary'>Transportation</a>
          <a href='#' className='primary'>Programme rules</a>

        </div>
      </div>

    </div>
      <div style={{display:'flex', justifyContent:'center', marginTop:'1.4rem'}}>
          <span>Made with <AiTwotoneHeart style={{color:'red'}}/> in India!</span>
      </div>
    </div>
  )
}

export default Footer
