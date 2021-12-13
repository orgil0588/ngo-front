import React from 'react'

function SecondaryBtn(props) {
    return (
        <button className="bg-transparent px-4 py-3 text-primary-dark font-medium  hover:border hover:border-black ">
            {props.text}
        </button>
    )
}

export default SecondaryBtn
