import React from 'react'
import {SlCalender} from  'react-icons/sl'
import {BsShieldCheck} from  'react-icons/bs'
import {BsBookmarkCheckFill} from  'react-icons/bs'

function Support() {
  return (
    <div className='support section_padding'>
        <div className="supportHeading">
            <p style={{fontSize: '24px', letterSpacing:'0.1rem'}}>
                Travel to make memories all <br/>around the world
            </p>
            <button  className='btn'>View All</button>
        </div>

        <div className="supportContent">
            <div className='singleCard'>
                <div className='iconDiv'>
                    <SlCalender />
                </div>
                <span style={{textAlign:'center',fontWeight:'bold'}}>Book & Relax</span>
                <p style={{fontSize:'15px', color:'gray', textAlign:'center'}}>You can also call airline from your phone and book a flight ticket!</p>
            </div>
            <div className='singleCard'>
                <div className='iconDiv'>
                    <BsShieldCheck />
                </div>
                <span style={{textAlign:'center',fontWeight:'bold'}}>Smart Checklist</span>
                <p style={{fontSize:'15px', color:'gray', textAlign:'center'}}>You can also call airline from your phone and book a flight ticket!</p>
            </div>
            <div className='singleCard'>
                <div className='iconDiv'>
                    <BsBookmarkCheckFill />
                </div>
                <span style={{textAlign:'center',fontWeight:'bold'}}>Save More</span>
                <p style={{fontSize:'15px', color:'gray', textAlign:'center'}}>You can also call airline from your phone and book a flight ticket!</p>
            </div>

           
        </div>
      
    </div>
  )
}

export default Support
