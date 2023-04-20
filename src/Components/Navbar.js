import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <ul className="flex justify-center space-x-4 cursor-pointer sticky top-0 bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
            <Link to='/articles/home'>Home</Link>
            <Link to='/articles/business'>Business</Link>
            <Link to='/articles/movies'>Movies</Link>
            <Link to='/articles/politics'>Politics</Link>
            <Link to='/articles/sports'>Sports</Link>
            <Link to='/articles/technology'>Technology</Link>
            <Link to='/articles/world'>World</Link>
        </ul>
    )
}

export default Navbar