import React from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrateFill} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
// import {CgMenuGridO} from 'react-icons/cg'
import logo from '../../assets/flightlogo3.png'
import { useState } from 'react'

function Navbar() {


  const [active, setActive] = useState('navMenu');
  const showNavBar = ()=>{
    setActive('navMenu showNavBar')
  }
  const removeNavBar = ()=>{
    setActive('navMenu')
  }


  const [nobg, addbg] = useState('navbarTwo');
  const addbgcolor = ()=>{
    if(window.scrollY>=10){
      addbg('navbarTwo scrollcolor')
    }
    else{
      addbg('navbarTwo')
    }

  }
  window.addEventListener('scroll', addbgcolor)
  return (
    <div className='navbar flex'>
      <div className="navbarOne flex">
        <div className='icon'>
            <SiConsul/>
        </div>

        <div className='flex navTab'>
            <li className='flex'><BsPhoneVibrateFill/> Support</li>
            <li className=' flex'><AiOutlineGlobal/> Languages</li>
        </div>

        <div className='flex atb'>
            <span>Sign In</span>
            <span>Sign Out</span>

        </div>
      </div>


      <div className={nobg}>
        <div className='logodiv'>
            <img className='logo' src={logo} alt='logo 404'/>
        </div>

        <div className='hamburger'>
          <CgMenuGridO className='icon hamIcon' onClick={showNavBar} />
        </div>

        <div className={active}>
            <ul className='menuItems flex'>
                <li onClick={removeNavBar} className='listItems'>Home</li>
                <li onClick={removeNavBar} className='listItems'>About</li>
                <li onClick={removeNavBar} className='listItems'>Offers</li>
                <li onClick={removeNavBar} className='listItems'>Seats</li>
                <li onClick={removeNavBar} className='listItems'>Destinations</li>

            </ul>
            <button className='btn'>Contact</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
