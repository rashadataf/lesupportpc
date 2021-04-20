import { useRouter } from "next/router";

import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import SiteInfo from "../components/Sections/SiteInfo";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Terms() {
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
          {language.Privacy.title}
        </h1>
        <p className="mb-14 text-gray-600">{language.Privacy.content}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.Privacy.title2}
        </h3>
        <p className="mb-14 text-gray-600">{language.Privacy.content2}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.Privacy.title3}
        </h3>
        <p className="mb-14 text-gray-600">{language.Privacy.content3}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.Privacy.title4}
        </h3>
        <p className="mb-14 text-gray-600">{language.Privacy.content4}</p>
      </div>
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
