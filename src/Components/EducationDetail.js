import React from 'react'

function EducationDetail(props) {
    return (
        <div>
   

   {props.link === "mongo-ba-bank-sanhuugiin-system" && (
        <div>
          <div
            onClick={() => {
                props.link.setLink("");
            }}
          >
            back
          </div>
          <div>mongo ba bank sanhuu</div>
        </div>
      )}
     }
        </div>
    )
}

export default EducationDetail
