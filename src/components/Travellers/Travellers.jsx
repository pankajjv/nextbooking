import React from 'react'
import traveller1 from '../../assets/london.webp'
import traveller2 from '../../assets/newyork.jpeg'
import traveller3 from '../../assets/newzeland.jpeg'
import traveller4 from '../../assets/china.jpeg'
import celeb from '../../assets/Virat-Kohli-1.jpg'
import celeb2 from '../../assets/john-cena-mc-220118-00b80f.webp'

 

function Travellers() {
  return (
    <div className='travelers section_padding'>
      <p style={{fontSize:'34px', fontWeight:'bold', textAlign:'center', marginBottom:'4rem'}}>Top travelers of this month!</p>
        <div className="travellersContainer">
            <div className="travelCard">
                <img src={traveller1} className='countryImg'/>
                <div className='travellarDetail'>
                    <div className='travellerImage'>
                        <img src={celeb} className='popImage'/>
                    </div>
                    <div className='travellerName'>
                        {/* <span>virat Kohli</span>@king kohli */}
                    </div>
                </div>
            </div>
            <div className="travelCard">
                <img src={traveller2} className='countryImg'/>
                <div className='travellarDetail'>
                    <div className='travellerImage'>
                        <img src={celeb2} className='popImage'/>
                    </div>
                    <div className='travellerName'>
                        {/* <span>virat Kohli</span>@king kohli */}
                    </div>
                </div>
            </div>
            <div className="travelCard">
                <img src={traveller3} className='countryImg'/>
                <div className='travellarDetail'>
                    <div className='travellerImage'>
                        <img src={celeb} className='popImage'/>
                    </div>
                    <div className='travellerName'>
                        {/* <span>virat Kohli</span>@king kohli */}
                    </div>
                </div>
            </div>
            <div className="travelCard">
                <img src={traveller4} className='countryImg'/>
                <div className='travellarDetail'>
                    <div className='travellerImage'>
                        <img src={celeb2} className='popImage'/>
                    </div>
                    <div className='travellerName'>
                        {/* <span>virat Kohli</span>@king kohli */}
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Travellers
