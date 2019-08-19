import React from 'react';
import { Link } from "react-router-dom";

//Destructuring 
//Ny funktionalitet i Javascript som man kommer stöta på till och från. 
// istället för att passa in props så använder vi object destructuring för att enklare använda dess nycklars värden.
export const Nav = () => {

    return (
        <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/search">search</Link></li>
            </ul>
        </div>
    )
}