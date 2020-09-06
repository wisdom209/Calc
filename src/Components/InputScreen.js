import React from "react";

export default function InputScreen(props) {
    return (
        <div >
            <input id="display" className="form-control" value={props.label} type="text" placeholder="0" readOnly />
        </div>
    );
}
