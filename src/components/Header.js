import React from "react";
import Search from "../components/Search";
import { Link, useLocation } from 'react-router-dom'



function Header ({ name }) {
    const location=useLocation()
    return (
        <>
        <div className="flex justify-between items-center">
            <div>
                <span className='text-[#9EDDFF] font-outfit text-2xl text-bold'>{location.state.id}'s</span>
                <h1 className="text-3xl text-white"> {name} Dashboard </h1>
                <Search />
            </div>
        </div>
        </>
    );
};

export default Header;