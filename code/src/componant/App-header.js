import React from "react";
import { NavLink } from "react-router-dom";

import './appheader.css'

function App_header(){
    return(
        <div className="app-header">
            <div className="title">
                <h1>ATLAS</h1>
            </div>
            <div className="link">
                <NavLink className='app-child' to='/'>Homeapge</NavLink>
                <NavLink className='app-child' to='/sell'>Sell</NavLink>        
                <NavLink className='app-child' to='/'>Homeapge</NavLink>        
                <NavLink className='app-child' to='/'>Homeapge</NavLink>        
                <NavLink className='app-child' to='/'>Homeapge</NavLink>    
            </div>
            <div className="right-part">
                THB $| Thailand
            </div>
        </div>

    )
}

export default App_header;