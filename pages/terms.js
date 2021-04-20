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
        <h1 className="text-4xl mb-14 text-gray-600">{language.terms.title}</h1>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title1}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content1}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title2}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content2}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title3}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content3}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title4}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content4}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title5}
        </h3>
        <p className="mb-14 text-gray-600">
          {language.terms.content5}
          <span className="block my-4">{language.terms.span5}</span>
          {language.terms.content52}
        </p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title6}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content6}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title7}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content7}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title8}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content8}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title9}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content9}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title10}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content10}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title11}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content11}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title12}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content12}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title13}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content13}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title14}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content14}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title15}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content15}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title16}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content16}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title17}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content17}</p>
        <h3 className="font-bold mb-6 text-gray-600">
          {language.terms.title18}
        </h3>
        <p className="mb-14 text-gray-600">{language.terms.content18}</p>
      </div>
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
