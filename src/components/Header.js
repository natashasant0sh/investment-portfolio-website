import React from "react";
import Search from "../components/Search";
import { useLocation } from 'react-router-dom'


function Header ({ name }) {

    const location=useLocation()

    return (
        <>
        <div>
            <span className='text-blue-500 font-outfit text-2xl text-bold'>{location.state.id}'s</span>
            <h1 className="text-3xl"> {name} Dashboard </h1>

            <Search />
        </div>
        </>
    );
};

export default Header;