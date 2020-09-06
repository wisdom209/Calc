import React from 'react'

export default function OutputScreen(props) {
    return (
        <div >
            <input className="form-control" value={props.label} type="text" placeholder="result" readOnly/>
        </div>
    )
}
