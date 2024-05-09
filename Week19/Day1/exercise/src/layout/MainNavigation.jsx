import React from 'react';
import {NavLink} from "react-router-dom";

function MainNavigation() {
    return (
        <>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/hotels">See available hotels</NavLink></li>
            </ul>
        </>
    );
}

export default MainNavigation;