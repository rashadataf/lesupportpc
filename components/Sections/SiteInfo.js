import Image from "next/image";
import Link from "next/link";

export default function SiteInfo() {
  return (
    <div className="flex flex-col p-4 lg:flex-row justify-between">
      <div className="w-14 h-14">
        <Image
          src="/favicon.png"
          alt="Logo"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
      <hr className="my-4 lg:hidden" />
      <div>
        <h2 className="text-lg text-gray-700 font-bold uppercase my-4">
          Site Links
        </h2>
        <ul className="space-y-4">
          <li className="text-gray-500">
            <a href="#about-us">About Us</a>
          </li>
          <li className="text-gray-500">
            <a href="#popular-software">Services</a>
          </li>
          <li className="text-gray-500">
            <Link href="/terms">
              <a>Privacy Policy</a>
            </Link>
          </li>
          <li className="text-gray-500">
            <a href="/terms">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <hr className="my-4 lg:hidden" />
      <div>
        <h2 className="text-lg text-gray-700 font-bold uppercase my-4">
          Visit Us
        </h2>
        <ul>
          <li className="text-gray-500">Rue De La Loi 13</li>
          <li className="text-gray-500">1000 Bruxelles</li>
          <li className="text-gray-500">Belgium</li>
        </ul>
      </div>
      <hr className="my-4 lg:hidden" />
      <div>
        <h2 className="text-lg text-gray-700 font-bold uppercase my-4">
          Talk With Us
        </h2>
        <ul>
          <li className="text-gray-500">E: lesupoort24@gmail.com</li>
          <li className="text-gray-500">T: +90 552 676 60 88 </li>
        </ul>
      </div>
    </div>
  );
}
