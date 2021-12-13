import React, { useState } from "react";
import { Link } from "react-router-dom"
import Logo from "../image/Logos/Logo.svg"
function Navbar() {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <header className="">
     
      <nav
        className={` w-full flex justify-between items-center text-primary-dark py-4 border-b border-gray-800 ${
          isOpen ? `flex flex-col` : "flex"
        } `}
      >
        <div className={`${isOpen ? `hidden` : `flex`}`}>
          <img className="w-1/2 md:w-full" src={Logo} />
        </div>

        <div
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(!isOpen);
          }}
          className="cursor-pointer absolute top-5  right-12 xl:hidden"
        >
          {!isOpen ? (
            <div>Menu</div>
          ) : (
            <div>Close</div>
          )}
        </div>
        <div
          className={`${
            isOpen
              ? `flex flex-col w-full h-full mx-auto items-start mt-24`
              : "hidden"
          } xl:block`}
        >
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/">
            Эхлэл
          </Link>
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/about">
            Бидний тухай
          </Link>
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/wwd">
            Бид юу хийдэг вэ ?
          </Link>
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/financial-education">
            Санхүүгийн боловсрол
          </Link>
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/research">
            Судалгаа
          </Link>
          <Link className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue" to="/join-us">
            Бидэнтэй нэгдэх
          </Link>
      
         
       
        </div>
      
        
       
      </nav>
  
    </header>
  );
}

export default Navbar;
 