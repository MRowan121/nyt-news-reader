import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="flex justify-center space-x-4 cursor-pointer bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
            <Link to='/home'>Home</Link>
            <Link to='/arts'>Arts</Link>
            <Link to='/business'>Business</Link>
            <Link to='/health'>Health</Link>
            <Link to='/movies'>Movies</Link>
            <Link to='/politics'>Politics</Link>
            <Link to='/science'>Science</Link>
            <Link to='/sports'>Sports</Link>
            <Link to='/technology'>Technology</Link>
            <Link to='/travel'>Travel</Link>
            <Link to='/world'>World</Link>
        </ul>
    )
}

export default Navbar