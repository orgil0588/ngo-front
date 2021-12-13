import React from 'react'

function Background(props) {
    return (
        <div className="bg-primary-white w-full h-full font-exo">
            {props.children}
        </div>
    )
}

export default Background
