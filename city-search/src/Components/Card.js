import React from 'react'
import '../Home.css';

function Card(props) {
    return (
        <div className="zip-info">
            <h4>{props.zip}</h4>
        </div>
    );
}

export default Card
