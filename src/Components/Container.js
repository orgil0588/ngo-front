import React from 'react'

function Container(props) {
    return (
        <div className="mx-4  md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-40">
            {props.children} 
        </div>
    )
}

export default Container
