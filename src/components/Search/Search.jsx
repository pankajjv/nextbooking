import React from 'react'
import {GrLocation} from 'react-icons/gr'

function Search() {
  return (
    <div className='search'>
      <div className="searchContainer">
        <div className='seatCategory flex'>
            <span>
                <button className='btn1'>Economy</button>
            </span>
            <span>
                <button className='btn1'>Business Class</button>
            </span>
            <span>
                <button className='btn1'>First Class</button>
            </span>
        </div>

        <div className="checkOptions flex">
            <div className='checkContainer flex'>
                <div className='toggleIcon'> 
                    <GrLocation/>
                </div>
                <div className='checkInfo'>
                    <p style={{fontWeight:'600', fontSize:'18px'}}>Location</p>
                    <input style={{border:'none', padding:'0.3rem', color:'grey',outline:'none'}} type='text' placeholder='Where do you want to'/>
                </div>
            </div>

            <div className='checkContainer flex'>
                <div className='toggleIcon'> 
                    <GrLocation/>
                </div>
                <div className='checkInfo'>
                    <p style={{fontWeight:'600', fontSize:'18px'}}>Travelers</p>
                    <input style={{border:'none', padding:'0.3rem', color:'grey', outline:'none', WebkitAppearance: 'none'}} type='number' placeholder='Add guests'/>
                </div>
            </div>
            <div className='checkContainer flex'>
                <div className='toggleIcon'> 
                    <GrLocation/>
                </div>
                <div className='checkInfo'>
                    <p style={{fontWeight:'600', fontSize:'18px'}}>Date</p>
                    <input style={{border:'none', padding:'0.3rem', color:'grey', outline:'none'}} type='text' placeholder='Add date'/>
                </div>
            </div>

            

            <div className=' checkContainer flex'>
                <div className='toggleIcon'> 
                    <GrLocation/>
                </div>
                <div className='checkInfo'>
                    <p style={{fontWeight:'600', fontSize:'18px'}}>Check Out</p>
                    <input style={{border:'none',padding:'0.3rem', color:'grey',outline:'none'}} type='text' placeholder='Add date'/>
                </div>
            </div> 

            <button className='btn'>Search Flight</button>
        </div>

      </div>
    </div>
  )
}

export default Search
