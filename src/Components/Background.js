import React from 'react'

function Background(props) {
    return (
        <div className="bg-primary-white w-full h-screen font-exo ">
            <div className=" h-full ">
            {props.children}
            </div>

        </div>
    )
}

export default Background
