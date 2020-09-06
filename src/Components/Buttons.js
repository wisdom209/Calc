import React from 'react'

export default function Buttons(props) {
    return (
        <div >
            <button id={props.id} className="btn btn-primary mr-3" onClick={props.handleClick} value={props.label}>{props.label}</button>
        </div>
    )
}
