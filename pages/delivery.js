import { useRouter } from "next/router";

import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import SiteInfo from "../components/Sections/SiteInfo";

import en from "../locales/en";
import fr from "../locales/fr";

export default function Delivery() {
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
      <div className="p-6 h-96">
        <h1 className="text-4xl mb-14 text-gray-600">
          {language.terms.title1}
        </h1>
        <p className="mb-14 text-gray-600">{language.terms.content1}</p>
      </div>
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
