import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    const linkArray = ['Home','Business','Movies','Politics','Sports','Technology','World']

    const linkOptions = linkArray.map((option, index) => {
        return(
            <Link to={`/articles/${option}`} key={index} className="link">
                {option}
            </Link>
        )
    })
   

    return (
        <ul className="flex sm:justify-center p-3 space-x-4 cursor-pointer overflow-scroll bg-gray-600 text-gray-200 select-none text-lg sm:text-xl lg:text-2xl">
            {linkOptions}
        </ul>
    )
}

export default Navbar