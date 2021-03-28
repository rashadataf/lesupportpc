import React from "react";

export default function TopBar() {
  return (
    <div className="flex justify-evenly  w-screen h-16 p-3">
      <a
        href="mailto:lesupoort24@gmail.com"
        id="email"
        className="flex space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-6 h-6"
        >
          <path d="M21.75 3H2.25A2.25 2.25 0 000 5.25v13.5A2.25 2.25 0 002.25 21h19.5A2.25 2.25 0 0024 18.75V5.25A2.25 2.25 0 0021.75 3zm0 1.5c.102 0 .2.02.29.059L12 13.258l-10.04-8.7a.722.722 0 01.29-.058zm0 15H2.25a.75.75 0 01-.75-.75V6.145l10.008 8.671a.755.755 0 00.984 0L22.5 6.145V18.75a.75.75 0 01-.75.75zm0 0"></path>
        </svg>
        <p className="hidden sm:block">lesupoort24@gmail.com</p>
      </a>

      <a href="tel:+9055376498" id="phone" className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <p className="hidden sm:block">+905526766088</p>
      </a>
      <div id="fr">
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
      </div>
      <div id="uk">
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
      </div>
    </div>
  );
}
