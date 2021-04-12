import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

function AdminLayout(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", function (event) {
      if (document.documentElement.clientWidth > 640) {
        setOpen(false);
      }
    });
  });
  return (
    <div className="w-full">
      <div className="bg-gray-800 w-full flex flex-wrap items-center justify-between p-4 sm:pb-0 max-h-28">
        <Link href="/admin/dashboard">
          <a className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold flex w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#FFF"
              imageRendering="optimizeQuality"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              viewBox="0 0 209.19 212.17"
              className="mr-2"
            >
              <g>
                <g>
                  <path d="M191.88 152.16c2.88-8.11 2.38-87.99.77-99.88l-13.97-.17c1.31-6.54 4.57-5.71 12.32-5.28 7.26.4 7.25 1.26 7.4 8.58.27 13.9.9 98.13-.99 100.46l-6.37 1.69c-14.67 1.36-103.93-.08-107.41-.77 9.76-8.6 36.79-4.33 51.76-4.33 17.75 0 39.2 1.08 56.5-.29zM152.7 5.93c11.24-1.88 11.44-4.63 24.79-1.56 11.58 31.92-44.66 92.57-64.65 112.1-4.05 3.96-6.23 6.64-10.54 11.03-14.83 15.08-84.12 69.8-101.02 50.16 2.29 19.83 28.61 10.61 40.63 5.27 22.37-9.94 15.43-15.19 45.61-15.13 18.44.04 110.75 2.06 119.91-1.51 2.91-9.46 1.27-51.47 1.27-64.35 0-72.15 5.83-65.07-22.59-65.18 1.24-10.87 9.03-26.02-1.27-33.78-8.7-6.56-24.56-.71-32.13 2.97z"></path>
                  <path d="M17.21 152.1c9.83.96 21.63.3 31.71.37 15.38.11 15.34-.31 24.61-7.4 10.72-8.19 26.66-21.51 33.47-30.17-33.03-1.41-15.53 3.03-32.41 9.65-12.44 4.88-25.08-.93-28.5-9.75 21.46.03 20.61 3.23 28.06-11.34l-6.27-13.77H45.79c5.8-15.28 31.63-15.04 39.67.07 51.22.04 43.12 5.02 59.48-16.91 4.37-5.86 10.71-14.23 13.38-20.51l-141.93-.22c-1.4 12.69-2.14 91.81.83 99.96z"></path>
                  <path d="M.44 46.34c-.04 33.83-1.36 92.49.81 119.88 6.18 2.56 22.51 1.78 30.76 1.66 9.2-.14 17.09-4.89 22.82-9.94l-35.25-.43c-10.98.02-8.72 2.28-8.72-21.6 0-103.73-5.9-88.84 21.08-88.84l129.72-.15 5.6-10-152.36-.21C3.64 36.55.46 34.74.45 46.33zM56.63 212.17l95.74-.01c20.49 0 7.32-11.12-4.07-25.87-4.24-5.49-5.1-5.86-13.02-6.29l-.73 17.72c-16.14 1.76-32.46.87-48.7.97-15.26.09-12.19-3.76-12.15-18.62-11.74.45-9.76 2.45-19.7 15-4.98 6.28-16.14 17.1 2.63 17.1z"></path>
                  <path d="M178.69 52.11l13.97.17c1.61 11.89 2.11 91.76-.77 99.88-17.3 1.37-38.75.29-56.5.29-14.97 0-42-4.27-51.76 4.33 3.48.7 92.74 2.13 107.41.77l6.37-1.69c1.89-2.33 1.26-86.56.99-100.46-.14-7.33-.14-8.18-7.4-8.58-7.75-.43-11.01-1.25-12.32 5.28z"></path>
                  <path d="M79.2 192.11c6.35 2.71 44.26 2.71 50.63.02.45-3.31.58-6.62.63-10 .16-10.96 1.93-9.19-25.95-9.18-25.89 0-25.67-1.88-25.87 7.64-.07 3.29.23 8.25.57 11.53z"></path>
                </g>
              </g>
            </svg>{" "}
            LE SUPPORT PC
          </a>
        </Link>
        <a href="#" onClick={() => setOpen(!open)} className="sm:hidden">
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
        <nav className="bg-gray-800 w-full sm:w-2/3 mt-1">
          <ul
            className={`text-white transition-all duration-700 ease-out sm:max-h-40 w-full flex flex-col sm:flex-row sm:justify-end md:space-x-8 overflow-hidden items-end ${
              open ? "max-h-96" : "max-h-0"
            }`}
          >
            <li
              className={`bg-gray-800 hover:text-blue-400 border-blue-400 cursor-pointer text-right md:text-center p-3 ${
                props.router.pathname === "/admin/dashboard"
                  ? "border-b-2 text-blue-400"
                  : ""
              }`}
            >
              <Link href="/admin/dashboard">
                <a>Home</a>
              </Link>
            </li>
            <li
              className={`bg-gray-800 hover:text-blue-400 border-blue-400 cursor-pointer text-right md:text-center p-3 ${
                props.router.pathname === "/admin/about-us"
                  ? "border-b-2 text-blue-400"
                  : ""
              }`}
            >
              <Link href="/admin/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li
              className={`bg-gray-800 hover:text-blue-400 border-blue-400 cursor-pointer text-right md:text-center p-3 ${
                props.router.pathname === "/admin/programs"
                  ? "border-b-2 text-blue-400"
                  : ""
              }`}
            >
              <Link href="/admin/programs">
                <a>Programs</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 mt-5 w-full">{props.children}</div>
    </div>
  );
}

export default withRouter(AdminLayout);
