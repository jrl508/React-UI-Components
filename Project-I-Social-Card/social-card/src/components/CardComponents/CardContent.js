import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';

const CardContent = () =>{
    return(
        <div className="card-content">
            <h4> Get started with React </h4>
            <p>React makes it painless to create interactive UIs. Design simple views for each state of your application.</p>
            <p className="soft">reactjs.org</p>
        </div>
    )
}

export default CardContent;