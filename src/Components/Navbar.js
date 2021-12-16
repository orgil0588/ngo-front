import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logos/Logo.svg";
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
          <Link to="/">
            <img className="w-1/2 md:w-full" src={Logo} />
          </Link>
        </div>

        <div
          onClick={() => {
            setIsOpen(!isOpen);
            console.log(!isOpen);
          }}
          className="cursor-pointer absolute top-5  right-12 xl:hidden"
        >
          {!isOpen ? (
            <div className="text-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </div>
          ) : (
            <div className="text-primary-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </div>
        <div
          className={`${
            isOpen
              ? `flex flex-col w-full h-full mx-auto items-start mt-24`
              : "hidden"
          } xl:block`}
        >
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/"
          >
            Эхлэл
          </Link>
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/about"
          >
            Бидний тухай
          </Link>
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/wwd"
          >
            Бид юу хийдэг вэ ?
          </Link>
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/financial-education"
          >
            Санхүүгийн боловсрол
          </Link>
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/news"
          >
           Нийтлэл
          </Link>
          <Link
            className="px-4 font-semibold hover:text-primary-blue  hover:border-primary-blue"
            to="/join-us"
          >
            Бидэнтэй нэгдэх
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
