import React from 'react'
import ashid from "../image/Logos/ashid.svg"
import nibs from "../image/Logos/nibs.svg"
import goodsec from "../image/Logos/goodsec.svg"
function Partners() {
    return (
        <div className='flex justify-around bg-white py-10 mt-20'>
            <img className='w-3/12 max-h-20'  src={ashid}/>
            <img className='w-3/12 max-h-20'  src={nibs}/>
            <img className='w-3/12 max-h-20'  src={goodsec}/>
        
        </div>
    )
}

export default Partners
