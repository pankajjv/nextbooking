import React from 'react'
import crew from '../../assets/crew3.avif'
import crew2 from '../../assets/crew2.jpg'

function Lounge() {
    return (
        <div className='lounge section_padding flex'>
            <div className="lounge_content">
                <p style={{ fontSize: '32px', fontWeight: '500', textAlign:'center', marginBottom: '1rem'}}>Unaccompanied Minor Lounge</p>
                <div className='loungeCard flex'>
                    <div className='innerCard'>
                          <p style={{fontSize:'20px', lineHeight:'2rem'}}>Help through the airport</p>
                        <span style={{ fontSize: '18px', color: 'gray', textAlign: 'center' }}>You can also call airline from your phone and book a flight ticket to one of your favourite destinations!</span>
                    </div>
                    <div className='innerCard'>
                        <p style={{fontSize:'20px', lineHeight:'2rem'}}>Priority Boarding</p>
                        <span style={{ fontSize: '18px', color: 'gray', textAlign: 'center' }}>You can also call airline from your phone and book a flight ticket to one of your favourite destinations!</span>
                    </div>
                </div>

                <div className='loungeCard flex'>
                    <div className='innerCard'>
                        <p style={{fontSize:'20px', lineHeight:'2rem'}}>Care on the flight</p>
                        <span style={{ fontSize: '18px', color: 'gray', textAlign: 'center' }}>You can also call airline from your phone and book a flight ticket to one of your favourite destinations!</span>
                    </div>
                    <div className='innerCard'>
                        <p style={{fontSize:'20px', lineHeight:'2rem'}}>Chauffer-drive service</p>
                        <span style={{ fontSize: '18px', color: 'gray', textAlign: 'center' }}>You can also call airline from your phone and book a flight ticket to one of your favourite destinations!</span>
                    </div>
                </div>
            </div>
            <div className="loungeImg flex">
                <span>
                    <img src={crew2}  width={200}  height={300} style={{borderRadius:'10rem', position:'relative', zIndex:'1'}}/>
                </span>
                <span>
                    <img src={crew} width={160} height={250} style={{borderRadius:'10rem', position:'relative', zIndex:'2', top:'4rem', left:'-4rem'}}/>
                </span>
            </div>
        </div>
    )
}

export default Lounge
