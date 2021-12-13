import React from 'react'
import ashid from "../image/Logos/ashid.png"
import nibs from "../image/Logos/nibs.png"
import goodsec from "../image/Logos/goodsec.png"
function Partners() {
    return (
        <div className='flex justify-around bg-white py-10 mt-20'>
            <img className='h-20'  src={ashid}/>
            <img className='h-20'  src={nibs}/>
            <img className='h-20'  src={goodsec}/>
        
        </div>
    )
}

export default Partners
