import { useRouter } from "next/router";

import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import SiteInfo from "../components/Sections/SiteInfo";
import AboutUs from "../components/Sections/AboutUs";

import en from "../locales/en";
import fr from "../locales/fr";

export default function About() {
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
      <AboutUs />
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
