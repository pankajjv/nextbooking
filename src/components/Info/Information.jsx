import React from 'react'
import flight from '../../assets/fllightsss.jpg'

function Information() {
    return (
        <div className='info-sections section_padding'>
            <div className="info1">
                <p style={{ letterSpacing: '0.7rem' }}>TRAVEL SUPPORT</p>
                <p style={{ fontSize: '30px', fontWeight: '600', margin:'1rem 0'}}>Plan your travel with confidence</p>
                <p style={{ color: 'gray' }}>Find help with booking and travel plans, see what to expect along the journey!</p>
            </div>

            <div className='info2 flex'>
                <div className='infoContent'>
                    <div className='infoContainer'>
                        <span style={{ padding: '2px 10px', backgroundColor: 'rgb(74, 40, 199)', borderRadius: '3rem', color: 'white' , textAlign:'lefr'}}>01</span>
                        <span><p style={{ fontSize: '22px', fontWeight: '600', margin:'0.7rem 0' }}>Travel requirement for Dubai</p></span>
                        <span><p style={{ color: 'gray' }}>Find help with booking and travel plans, see what to expect <br />along the journey to your favourite destination.</p></span>
                    </div>
                    <div className='infoContainer'>
                        <span style={{ padding: '2px 10px', backgroundColor: 'rgba(182, 182, 52, 0.83)', borderRadius: '3rem', color: 'white' }}>02</span>
                        <span><p style={{ fontSize: '22px', fontWeight: '600', margin:'0.7rem 0' }}>Chauffer servoce at your arrival</p></span>
                        <span><p style={{ color: 'gray' }}>Find help with booking and travel plans, see what to expect <br />along the journey to your favourite destination.</p></span>
                    </div>
                    <div className='infoContainer'>
                        <span style={{ padding: '2px 10px', backgroundColor: 'rgb(244, 119, 97)', borderRadius: '3rem', color: 'white' }}>03</span>
                        <span><p style={{ fontSize: '22px', fontWeight: '600', margin:'0.7rem 0' }}>Multi-risk travel insurance</p></span>
                        <span><p style={{ color: 'gray' }}>Find help with booking and travel plans, see what to expect <br />along the journey to your favourite destination.</p></span>
                    </div>


                </div>


                <div className='visualGraphics flex'>
                    <span><img src={flight} id='fly2'  className='visualImg'/></span>
                    
                </div>

            </div>
        </div>
    )
}

export default Information
