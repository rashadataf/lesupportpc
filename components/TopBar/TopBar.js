import React from "react";

export default function TopBar() {
  return (
    <div className="flex  text-white justify-evenly items-center md:justify-end md:space-x-16 h-16 space-x-10">
      <a
        href="mailto:lesupoort24@gmail.com"
        id="email"
        className="flex space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 58.09 45.63"
          className="w-6 h-6"
        >
          <path d="M54.08 37.24c0 2.41-1.96 4.38-4.38 4.38H8.39c-2.41 0-4.38-1.96-4.38-4.38V8.38c0-.59.12-1.15.33-1.66l17.48 19.83a9.658 9.658 0 007.23 3.27c2.77 0 5.4-1.19 7.23-3.27L53.75 6.72c.21.51.33 1.07.33 1.66v28.86zM49.7 4c.34 0 .67.04 1 .12L33.27 23.9a5.646 5.646 0 01-4.22 1.91c-1.62 0-3.15-.7-4.22-1.91L7.4 4.12c.32-.07.65-.12 1-.12h41.31zm0-4.01H8.39C3.77-.01 0 3.75 0 8.37v28.86c0 4.62 3.76 8.39 8.39 8.39H49.7c4.62 0 8.39-3.76 8.39-8.39V8.37c0-4.62-3.76-8.38-8.39-8.38z"></path>
        </svg>
        <p className="hidden sm:block">contact@lesupport24.com</p>
      </a>

      <a
        // href="https://wa.me/0184672092"
        href="#"
        // target="_blank"
        id="phone"
        className="flex space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FFFFFF"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          viewBox="0 0 94.86 95.09"
          className="w-6 h-6"
        >
          <g>
            <path
              d="M26.84 78.71l1.61.96c5.91 3.52 12.63 5.38 19.44 5.38 21 0 38.09-17.09 38.09-38.09 0-21-17.09-38.09-38.09-38.09-21 0-38.09 17.09-38.09 38.09 0 6.93 1.93 13.76 5.57 19.75l.99 1.62-3.81 14.2 14.29-3.83zM0 95.09l6.82-25.43C2.96 62.69.93 54.89.93 46.97.93 21.08 22 0 47.9 0s46.97 21.07 46.97 46.97S73.8 93.94 47.9 93.94c-7.77 0-15.45-1.96-22.32-5.69L.01 95.1z"
              className="fil0"
            ></path>
            <path
              d="M65.36 53.5c-1.93-1.16-4.45-2.45-6.73-1.52-1.74.72-2.86 3.45-3.99 4.85-.58.72-1.27.83-2.17.47-6.56-2.61-11.58-6.99-15.2-13.02-.61-.94-.5-1.68.24-2.55 1.09-1.29 2.47-2.75 2.76-4.48.3-1.73-.52-3.76-1.24-5.31-.92-1.97-1.94-4.79-3.92-5.91-1.82-1.03-4.21-.45-5.83.87-2.8 2.28-4.14 5.84-4.1 9.38.01 1.01.13 2.01.37 2.98.56 2.33 1.64 4.51 2.86 6.58.91 1.56 1.91 3.08 2.98 4.53 3.51 4.77 7.87 8.91 12.92 12 2.52 1.55 5.24 2.9 8.06 3.83 3.16 1.04 5.97 2.13 9.38 1.48 3.57-.68 7.09-2.89 8.51-6.33.42-1.02.63-2.16.4-3.23-.49-2.23-3.5-3.55-5.3-4.62z"
              className="fil1"
            ></path>
          </g>
        </svg>
        <p className="hidden sm:block">0184672092</p>
      </a>
    </div>
  );
}
