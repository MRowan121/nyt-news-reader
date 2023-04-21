import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";


const Search = ({ handleSearch }) => {
    const [search, setSearch] = useState('')

    const handleChange = (value) => {
        setSearch(value)
        handleSearch(value)
    }

    const location = useLocation()

    useEffect(() => {
        setSearch('')
    }, [location])

    return (
        <header className="bg-gray-600 pb-3 sticky top-0">
            <form className="flex justify-center">   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input
                        type="search" 
                        id="default-search" 
                        className="block w-80 p-4 pl-10 text-sm text-white border rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 border-gray-600 placeholder-white sm:w-96" 
                        placeholder="Search Articles..." 
                        name="search"
                        value={search}
                        onChange={e => handleChange(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>
            </form>
        </header>
    )
}

export default Search;