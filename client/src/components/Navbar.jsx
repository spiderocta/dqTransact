import React from 'react';
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import logo from '../../images/logo.png'

import { Link } from "react-router-dom";

const NavBarItem = ({ title,destination, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}> <Link to={destination}> {title}</Link> </li>
);


const Navbar = () =>{
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-3">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to="/"><img src={logo} alt="logo" className="w-32 cursor-pointer" /></Link>
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Home","Services"].map((item, index) => (
                <NavBarItem key={item + index} destination={item == "Home" ? "/" : item} title={item} />
                ))}
                    <a href="https://admirable-mooncake-3f4d77.netlify.app/"> Exchange</a>
                    <Link to="transactions"> <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">View Transactions History</li></Link>
                
            </ul>
            {/* for mobile navigations */}
            <div className="flex relative">
                <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Home", "Transactions", "", "Services"].map(
              (item, index, destination) =>  <NavBarItem key={item + index} destination={item == "Home" ? "/" : item} title={item} classprops="my-2 text-lg"/>,
            )}
          </ul>
        )}
        </div>
            </div>
        </nav>
    )
}


export default Navbar;