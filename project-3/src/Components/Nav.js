import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

//Destructuring 
//Ny funktionalitet i Javascript som man kommer stöta på till och från. 
// istället för att passa in props så använder vi object destructuring för att enklare använda dess nycklars värden.
export const Nav = ({selectedCat, onSelect}) => {

    return (
        <Paper>
        <Tabs
            value={selectedCat}
            onChange={(event, index) => {onSelect(index)}}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="Home" component={Link} to="/"/>
            <Tab label="Search" component={Link} to="/search"/>
            <Tab label="About" component={Link} to="/about"/>
        </Tabs>
        </Paper>
    )
}