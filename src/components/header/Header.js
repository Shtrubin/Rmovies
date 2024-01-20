
import "./Header.css";
import{Link} from "react-router-dom";

import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="headerLeft">
        <Link to="/" style={{ color: "red", textDecoration: "none", fontWeight: "900", fontSize: "30px" }}>
        <span style={{color:"#F5C518"}}>RMOVIES</span>
</Link>
            <Link to="/movies/popular"style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated"style={{textDecoration:"none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming"style={{textDecoration:"none"}}><span>Upcoming</span></Link>
        </div>
    </div>
 )
}

export default Header
