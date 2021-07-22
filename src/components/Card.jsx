import React from 'react';
import '../App.css';

function Card({item,onClick}) {
    return (
        <div className="card" onClick={onClick}>
            <div className="container">
                <h4><b>{item.todo}</b></h4>
                <p>{item.desc}</p>
            </div>
        </div>

    );
}
export default Card;
