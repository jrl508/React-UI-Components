import React from 'react';
import './Header.css';

const HeaderTitle = props =>{
    return(
        <div>
            <strong> {props.name} </strong>
            <span className ="soft">{props.handle} &bull; {props.date}</span>
        </div>
        )
}

export default HeaderTitle;