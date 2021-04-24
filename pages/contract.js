import { useRouter } from "next/router";

import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import SiteInfo from "../components/Sections/SiteInfo";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Contract() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div className="p-6">
        <h1 className="text-4xl mb-14 text-gray-600">
          {language.contract.title}
        </h1>
        <p className="mb-14 text-gray-600">{language.contract.content}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title1}
        </h3>
        <p className="mb-14 text-gray-600">{language.contract.content1}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title2}
        </h3>
        <p className="mb-14 text-gray-600">{language.contract.content2}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title3}
        </h3>
        <h3 className="mb-1 text-gray-600">{language.contract.title32}</h3>
        <p className="mb-14 text-gray-600">{language.contract.content3}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title4}
        </h3>
        <h3>{language.contract.title42}</h3>
        <p className="mb-14 text-gray-600">{language.contract.content4}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title5}
        </h3>
        <h3 className="mb-1 text-gray-600">{language.contract.title51}</h3>
        <p className="mb-14 text-gray-600">{language.contract.content5}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title6}
        </h3>
        <h3 className="mb-1 text-gray-600">{language.contract.title61}</h3>
        <p className="mb-14 text-gray-600">
        {language.contract.content6.split('\\').map(sec => {
            return <span className="block">{sec}</span>
        })}
        </p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.contract.title7}
        </h3>
        <h3 className="mb-1 text-gray-600">{language.contract.title71}</h3>
        <p className="mb-14 text-gray-600">{language.contract.content71}</p>
        <h3 className="mb-1 text-gray-600">{language.contract.title72}</h3>
        <p className="mb-14 text-gray-600">{language.contract.content72}</p>
      </div>
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
