import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';

const HeaderContent = props =>{
    return(
        <div className="header-content">
            <HeaderTitle name="Lambda School" handle="@LambdaSchool" date="26 jan"/>
            <p>Let's learn React by bulding simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
    )
}

export default HeaderContent;