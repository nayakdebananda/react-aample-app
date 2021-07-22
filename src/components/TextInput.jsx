import React from 'react';
import '../App.css';

export default function TextInput(props) {
    return (
        <div>
            <input name="firstname" placeholder={props.holder}></input>
        </div>
    )
}
