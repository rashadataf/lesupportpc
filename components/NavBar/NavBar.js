import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopBar from "../TopBar/TopBar";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function (event) {
      if (document.documentElement.clientWidth > 768) {
        setOpen(false);
      }
    });
  });
  return (
    <div className="flex flex-wrap justify-between items-center px-3 bg-blue-600">
      <div className="w-9 h-9 sm:w-12 sm:h-12 md:h-10 md:w-20">
        <Image
          src="/logo.svg"
          alt="Logo"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <TopBar />

      <a href="#" onClick={() => setOpen(!open)} className="md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </a>
      <nav className="bg-blue-600 w-screen md:mt-7 mt-1">
        <ul
          className={`text-white transition-all duration-700 ease-out md:max-h-40 w-full flex flex-col md:flex-row md:justify-end md:space-x-8 overflow-hidden items-end ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <li className="text-lg bg-blue-600 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            <a href="/">Home</a>
          </li>
          <li className="text-lg bg-blue-600 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            <a href="/#about-us">About Us</a>
          </li>
          <li className="text-lg bg-blue-600 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            <a href="/#popular-software">Services</a>
          </li>
          <li className="text-lg bg-blue-600 hover:bg-blue-400 cursor-pointer text-right md:text-center p-3">
            <a href="/#happy-customers">Happy Customers</a>
          </li>
          <li className="text-lg flex space-x-4 md:space-x-3 bg-blue-600 cursor-pointer text-right md:text-center p-3">
            <a href="#" id="fr">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12zm0 0"
                  ></path>
                  <path
                    fill="#D80027"
                    d="M24 12c0-5.16-3.258-9.559-7.824-11.254v22.508C20.742 21.559 24 17.16 24 12zm0 0"
                  ></path>
                  <path
                    fill="#0052B4"
                    d="M0 12c0 5.16 3.258 9.559 7.824 11.254V.746C3.258 2.441 0 6.84 0 12zm0 0"
                  ></path>
                </g>
              </svg>{" "}
            </a>
            <a href="#" id="uk">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <g>
                  <path
                    fill="#FFFFFF"
                    d="M24 12c0 6.629-5.371 12-12 12S0 18.629 0 12 5.371 0 12 0s12 5.371 12 12zm0 0"
                  ></path>
                  <path
                    fill="#0052B4"
                    d="M2.48 4.695A11.985 11.985 0 00.414 8.871h6.242zm0 0M23.586 8.871a11.985 11.985 0 00-2.066-4.176l-4.176 4.176zm0 0M.414 15.129a11.952 11.952 0 002.066 4.176l4.176-4.176zm0 0M19.305 2.48A11.985 11.985 0 0015.129.414v6.242zm0 0M4.695 21.52a11.985 11.985 0 004.176 2.066v-6.242zm0 0M8.871.414A11.985 11.985 0 004.695 2.48l4.176 4.176zm0 0M15.129 23.586a11.985 11.985 0 004.176-2.066l-4.176-4.176zm0 0M17.344 15.129l4.176 4.176a11.952 11.952 0 002.066-4.176zm0 0"
                  ></path>
                  <path
                    fill="#D80027"
                    d="M23.898 10.434H13.566V.102a12.174 12.174 0 00-3.132 0v10.332H.102a12.174 12.174 0 000 3.132h10.332v10.332a12.174 12.174 0 003.132 0V13.566h10.332a12.174 12.174 0 000-3.132zm0 0"
                  ></path>
                  <path
                    fill="#D80027"
                    d="M15.129 15.129l5.355 5.355c.246-.246.48-.504.707-.77l-4.586-4.585zm0 0M8.871 15.129l-5.355 5.355c.246.246.504.48.77.707l4.585-4.586zm0 0M8.871 8.871L3.516 3.516c-.246.246-.48.504-.707.77L7.395 8.87zm0 0M15.129 8.871l5.355-5.355c-.246-.246-.504-.48-.77-.707L15.13 7.395zm0 0"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                className="w-6 h-6"
              >
                <path
                  fill="#FFF"
                  d="M12 .05c-6.629 0-12 5.372-12 12 0 5.942 4.328 10.868 10 11.821v-9.316H7.105v-3.356H10V8.73c0-2.87 1.75-4.433 4.309-4.433 1.226 0 2.28.094 2.586.133v2.996l-1.774.004c-1.394 0-1.66.66-1.66 1.629v2.14h3.32l-.433 3.352H13.46v9.398C19.398 23.227 24 18.18 24 12.047 24 5.422 18.629.05 12 .05zm0 0"
                ></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                className="w-6 h-6"
              >
                <g fill="#FFF">
                  <path d="M17.504 0H6.496A6.503 6.503 0 000 6.496v11.008A6.503 6.503 0 006.496 24h11.008A6.503 6.503 0 0024 17.504V6.496A6.503 6.503 0 0017.504 0zm5.09 17.504a5.098 5.098 0 01-5.09 5.09H6.496a5.098 5.098 0 01-5.09-5.09V6.496a5.098 5.098 0 015.09-5.09h11.008a5.098 5.098 0 015.09 5.09zm0 0"></path>
                  <path d="M12 5.438A6.572 6.572 0 005.437 12 6.572 6.572 0 0012 18.563 6.572 6.572 0 0018.563 12 6.572 6.572 0 0012 5.437zm0 11.718A5.161 5.161 0 016.844 12 5.161 5.161 0 0112 6.844 5.161 5.161 0 0117.156 12 5.161 5.161 0 0112 17.156zm0 0M18.719 3.105a1.94 1.94 0 000 3.88 1.94 1.94 0 001.941-1.938c0-1.07-.87-1.942-1.941-1.942zm0 2.473a.532.532 0 110-1.063.532.532 0 010 1.063zm0 0"></path>
                </g>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                className="w-6 h-6"
              >
                <path
                  fill="#FFF"
                  d="M24 4.559c-.89.39-1.844.652-2.836.777a4.886 4.886 0 002.164-2.719c-.95.567-2 .965-3.117 1.192a4.918 4.918 0 00-8.512 3.363c0 .39.031.766.114 1.121-4.09-.2-7.711-2.16-10.141-5.145a4.93 4.93 0 00-.676 2.485c0 1.707.879 3.215 2.188 4.09A4.88 4.88 0 01.96 9.117v.055a4.938 4.938 0 003.941 4.832c-.402.11-.836.164-1.289.164a4.35 4.35 0 01-.933-.086c.636 1.95 2.449 3.383 4.597 3.43a9.89 9.89 0 01-6.101 2.097c-.403 0-.79-.02-1.176-.066a13.842 13.842 0 007.547 2.207c9.055 0 14.004-7.5 14.004-14 0-.219-.008-.43-.016-.637A9.768 9.768 0 0024 4.56zm0 0"
                ></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="#FFFFFF"
                className="w-6 h-6"
              >
                <path
                  fill="#FFF"
                  d="M23.309 14.547C25.047 6.738 18.203-.36 10.172 1.004 5.809-1.703 0 1.355 0 6.547a6.45 6.45 0 00.91 3.308C-.703 17.684 6.195 24.68 14.223 23.223c5.675 3 11.945-2.985 9.086-8.676zm-7.637 4.71c-2.11.868-5.578.872-7.676-.226-2.992-1.597-3.527-5.191-.945-5.191 1.945 0 1.332 2.27 3.297 3.195.902.418 2.84.461 3.968-.3 1.114-.747 1.008-1.919.407-2.477-1.606-1.48-6.192-.89-8.29-3.485-.91-1.12-1.081-3.105.04-4.543 1.949-2.511 7.68-2.664 10.14-.77 2.274 1.763 1.66 4.099-.175 4.099-2.208 0-1.047-2.887-4.61-2.887-2.582 0-3.598 1.836-1.777 2.73 2.465 1.223 8.75.817 8.75 5.602-.008 1.992-1.227 3.476-3.13 4.254zm0 0"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
