import React from 'react'

function PrimaryBtn(props) {
    return (
        <button className="bg-primary-blue px-4 py-3 font-medium text-primary-white shadow-2xl hover:bg-blue-700">
            {props.text}
        </button>
    )
}

export default PrimaryBtn
