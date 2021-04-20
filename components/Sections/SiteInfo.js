import Image from "next/image";
import { useRouter } from "next/router";

import en from "../../locales/en";
import fr from "../../locales/fr";
export default function SiteInfo() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;
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
          {language.siteInfo.section1.title}
        </h2>
        <ul className="space-y-4">
          <li className="text-gray-500">
            <a href="#about-us">{language.siteInfo.section1.link1}</a>
          </li>
          <li className="text-gray-500">
            <a href="#popular-software">{language.siteInfo.section1.link2}</a>
          </li>
          <li className="text-gray-500">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push("/privacy", "/privacy", { locale });
              }}
            >
              {language.siteInfo.section1.link3}
            </a>
          </li>
          <li className="text-gray-500">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push("/terms", "/terms", { locale });
              }}
            >
              {language.siteInfo.section1.link4}
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-4 lg:hidden" />
      <div>
        <h2 className="text-lg text-gray-700 font-bold uppercase my-4">
          {language.siteInfo.section2.title}
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
          {language.siteInfo.section3.title}
        </h2>
        <ul>
          <li className="text-gray-500">E: lesupoort24@gmail.com</li>
          <li className="text-gray-500">T: +90 552 676 60 88 </li>
        </ul>
      </div>
    </div>
  );
}
