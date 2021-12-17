/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logos/footer-logo.svg";
import Container from "../Components/Container";

function Footer() {
  return (
    <div className="bg-primary-dark w-full  mt-20 py-10">
      <Container>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <img src={Logo} />
            <div className="text-gray-200 my-2 font-semibold text-lg">
              Call us : 77111111
            </div>
            <div className="flex">
              <div className="mr-6">
                <a href="https://facebook.com">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C3.58172 0 0 3.58172 0 8V56C0 60.4183 3.58172 64 8 64H31.5V40.5H24.5V31.5H31.5V22.4998C31.5 10.8998 44.8333 10.3331 51.5 11.4998V20.5H44.5C42.1 20.5 41.5 22.5 41.5 23.5V31.5H51.5V40.5H41.5V64H56C60.4183 64 64 60.4183 64 56V8C64 3.58172 60.4183 0 56 0H8Z"
                      fill="gray"
                    />
                  </svg>
                </a>
              </div>
              <div className="mr-6 ">
                <a href="https://instagram.com">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18 0C8.05888 0 0 8.05888 0 18V46C0 55.9411 8.05888 64 18 64H46C55.9411 64 64 55.9411 64 46V18C64 8.05888 55.9411 0 46 0H18ZM20 6C12.268 6 6 12.268 6 20V44C6 51.732 12.268 58 20 58H44C51.732 58 58 51.732 58 44V20C58 12.268 51.732 6 44 6H20Z"
                      fill="gray"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M31.5 49C40.6127 49 48 41.6127 48 32.5C48 23.3873 40.6127 16 31.5 16C22.3873 16 15 23.3873 15 32.5C15 41.6127 22.3873 49 31.5 49ZM31.5 43C37.299 43 42 38.299 42 32.5C42 26.701 37.299 22 31.5 22C25.701 22 21 26.701 21 32.5C21 38.299 25.701 43 31.5 43Z"
                      fill="gray"
                    />
                    <circle cx="48.5" cy="15.5" r="3.5" fill="gray" />
                  </svg>
                </a>
              </div>
              <div className="mr-6">
                <a href="https://youtube.com">
                  {" "}
                  <svg
                    width="48"
                    height="36"
                    viewBox="0 0 64 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 0C5.8203 0 0 5.8203 0 13V33C0 40.1797 5.8203 46 13 46H51C58.1797 46 64 40.1797 64 33V13C64 5.8203 58.1797 0 51 0H13ZM23.5 14.5V31.5L41.5 23.5L23.5 14.5Z"
                      fill="gray"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary-white font-semibold text-xl">
              Company
            </div>
            <ul className="mt-4">
              <li className="text-gray-400 py-1">
                <Link to="/about">Бидний тухай</Link>
              </li>
              <li className="text-gray-400 py-1">
                {" "}
                <Link to="/wwd">Бид юу хийдэг вэ ?</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-primary-white font-semibold text-xl">
              Service
            </div>
            <ul className="mt-4">
              <li className="text-gray-400 py-1">
                {" "}
                <Link to="/financial-education">Санхүүгийн боловсрол</Link>
              </li>
              <li className="text-gray-400 py-1">
                {" "}
                <Link to="/news">Нийтлэл</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-primary-white font-semibold text-xl">
              Бидэнтэй нэгдэх
            </div>
            <ul className="mt-4">
              <li className="text-gray-400 py-1">
                {" "}
                <Link to="/join-us">Бидэнтэй нэгдэх</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
