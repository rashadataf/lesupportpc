import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import Checkout from "../components/Sections/Checkout";
import SiteInfo from "../components/Sections/SiteInfo";
import PaymentLogo from "../components/Sections/PaymentLogo";

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Checkout />
      <PaymentLogo />
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
