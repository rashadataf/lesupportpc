import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="space-y-6 md:space-y-14 md:px-6 md:py-20">
      <div className="space-y-3 md:flex">
        <div className="relative w-full h-48 sm:h-64 md:w-1/2 md:h-96">
          <Image
            alt="Mountains"
            src="/img_1.jpg"
            layout="fill"
            objectFit="fill"
          />
        </div>
        <div className="p-3 text-center space-y-3 md:w-1/2 md:leading-10 md:space-y-7">
          <h2 className="font-bold text-2xl text-gray-900 md:leading-10">
            We provide the latest software you need for your home, your business
            and your protection.{" "}
          </h2>
          <p className="text-gray-700">
            We've built a company with the sole focus of making sure our
            customer service is the absolute best in the industry. You'll have
            peace of mind knowing that our award winning team is available
            whenever you need us.{" "}
          </p>
        </div>
      </div>
      <div className="space-y-8 md:space-y-0 md:flex justify-around">
        <div className="flex flex-col items-center text-center space-y-4 md:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20 h-20"
          >
            <g>
              <path
                fill="#057CBA"
                fillRule="evenodd"
                d="M10.402.469c6.817-.867 12.301 4.043 12.871 9.922.375 3.957-.57 6.472-2.476 8.933-5.66 7.34-19.352 4.547-20.348-5.879C-.156 7.027 3.457 1.335 10.402.47zm0-.364C3.887.902-.602 6.211.074 13.461c.961 10.476 14.563 13.828 20.992 6.14 1.993-2.394 2.954-5.308 2.598-9.19C23.114 4.354 17.434-.73 10.418.12zm0 0"
              ></path>
              <path
                fill="#057CBA"
                fillRule="evenodd"
                d="M9.492 9.8c0 .731.64.434-.375 1.11-.46-.328-.406-.242-.566-.918h-.375c.015.918.18.903.765 1.285-.125.536-.195.555-.195 1.282-.5.242-.195.175-.945.191v.363c.82.02.57-.172.89.434.02.035.23.957.25 1.043-.586.379-.73.363-.765 1.281h.375c.16-.676.105-.59.566-.918.57.418.2.328.856.832 1.976 1.477 3.988-.64 4.257-.832.461.66.247.73.766.918.3-.64-.02-1.09-.766-1.281.32-.574.372-.574.372-1.477v-.363c-.016-.676-.16-1.023-.372-1.473.747-.191 1.067-.644.766-1.285-.875.625.195.328-.945.918-.711-1.039-.106-1.11-.57-2.027-.961-1.961-3.989-1.094-3.989.937zm0 0"
              ></path>
              <path
                fill="#057CBA"
                fillRule="evenodd"
                d="M10.063 9.977c0-.817.019-.957.5-1.356 1.085-.902 2.667-.414 2.722 1.356-.82-.192-1.55-.782-3.223 0zm0 0M11.773 15.89V9.993c3.665.832 2.848 5.672 0 5.899zm0 0M9.117 13.113v-.363c0-1.492 1.016-2.48 2.281-2.773v5.894c-1.3-.293-2.28-1.21-2.28-2.773zm0 0"
              ></path>
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M11.773 15.89c2.848-.226 3.665-5.066 0-5.898zm0 0M9.117 13.113c0 1.547.98 2.48 2.281 2.778V9.992c-1.265.278-2.28 1.285-2.28 2.778v.363zm0 0M10.063 9.977c1.656-.782 2.402-.192 3.222 0-.035-1.77-1.62-2.274-2.723-1.356-.5.418-.5.54-.5 1.356zm0 0"
              ></path>
              <path
                fill="none"
                stroke="#057CBA"
                strokeMiterlimit="22.926"
                strokeWidth="0.25"
                d="M8.61 7.5h-.53"
                transform="matrix(1.78038 0 0 1.73473 .004 0)"
              ></path>
            </g>
          </svg>
          <h2 className="text-xl text-gray-900">Antivirus</h2>
          <p className="text-gray-700 w-72 md:w-full">
            We carry the best antivirus software titles in the business to keep
            your PC Safe.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4 md:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20 h-20"
          >
            <path
              fill="#057CBA"
              fillRule="evenodd"
              d="M.453 13.492C.093 9.734.941 7.027 2.84 4.613 8.875-3.039 22.316.246 23.27 10.391c.597 6.293-2.961 12.117-9.895 12.988-6.867.855-12.355-4.004-12.922-9.887zM10.398.094C3.891.887-.598 6.204.063 13.445c.55 6.082 6.242 11.14 13.312 10.301 7.105-.86 10.867-6.832 10.273-13.355C23.098 4.34 17.406-.766 10.398.094zM8.547 12.19c0-2.168-.442-.52-.567-2.03 1.207-.567 1.82.12 2.024-1.618.047-.43-.406-.2.187-.492.832-.395.317.629 1.758.629.801 0 .895-.84 1.52-.551.8.305.176-.121.3.55.188 1.024.344 1.298 1.977 1.298.094 1.148.25.293-.207.918-.656.918-.453 1.207.125 2.046.285.43.223-.214.082.184-.457 1.453-1.539-.566-1.976 1.848-.079.46.406.55-.395.582l-.61-.23c-1.238-.762-1.253-.227-1.976.136-.598.324.125.14-.91.062.894-1.8-1.723-1.957-1.899-2.03.094-1.145.567-.52.567-1.302zm.941-4.246c0 1.973-.156 1.606-1.71 1.48l-.407 1.286c1.145 1.437 1.16.566.031 2.23.547 2.293.942.567 1.817 1.344.597.535.035.63.363 1.317.219.441.77.441 1.223.656 1.191-1.727 2.226-.031 2.273 0l1.332-.551c-.344-.703-.172-.777 0-1.48 1.113-.262.457-.094 1.524 0 .125-.504.375-.75.375-1.118 0-.734-.754-.566-.754-1.296 0-.66.754-.75.754-1.118 0-.672-.22-.64-.375-1.297 0 0-2.528.579-1.524-1.484-.547-.121-.879-.32-1.332-.55-.14.093-1.629 1.683-2.086 0-.707.062-1.004.292-1.52.55zm1.52 4.063v-.73c2.383-1.223 1.82 1.48 1.144 1.48-.578 0-.77-.184-1.144-.367zm-.563-.18c0 .547.5.914.75 1.297.864 0 2.086.121 2.086-1.48 0-.293-.234-.598-.375-.75-.441-.473-.894-.368-1.71-.368-.25.368-.75.75-.75 1.301zm0 0"
            ></path>
          </svg>
          <h2 className="text-xl text-gray-900">Office Productivity</h2>
          <p className="text-gray-700 w-72 md:w-full">
            Make your business and home office more productive with the best
            software for your computer.{" "}
          </p>
        </div>
        <div className="flex flex-col items-center text-center space-y-4 md:w-1/4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20 h-20"
          >
            <path
              fill="#057CBA"
              fillRule="evenodd"
              d="M11.941 9.066h2.266v2.766c0 .973-.266 1.305-.785 1.809-.426.418-.84.796-1.48.957zm-3.41-.921c0 2.675-.715 4.972 1.43 6.539 1.8 1.34 1.89 1.355 3.55.156 2.356-1.703 1.641-3.531 1.641-6.695-1.195-.262-5.586-.403-6.62 0zM10.387.473c6.82-.852 12.316 4.035 12.87 9.914.606 6.332-3 12.12-9.89 12.976C6.497 24.215 1 19.343.445 13.45c-.605-6.418 3-12.105 9.961-12.976zm0-.364C3.875.91-.605 6.215.055 13.465c.96 10.469 14.562 13.808 20.988 6.14 2-2.382 2.945-5.304 2.59-9.199C23.078 4.352 17.403-.742 10.387.11zm0 0"
            ></path>
          </svg>
          <h2 className="text-xl text-gray-900">Data Backup</h2>
          <p className="text-gray-700 w-72 md:w-full">
            Backup all your important files with our data backup partners.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
