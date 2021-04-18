import Head from "next/head";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import AboutUs from "../components/Sections/AboutUs";

import axios from "axios";
import SoftwarePurchase from "../components/Sections/SoftwarePurchase";
import Services from "../components/Sections/Services";
import PopularSoftware from "../components/Sections/PopularSoftware";
import PaymentLogo from "../components/Sections/PaymentLogo";
import HappyCustomers from "../components/Sections/HappyCustomers";
import SiteInfo from "../components/Sections/SiteInfo";
import CopyRights from "../components/Sections/CopyRights";

export default function Home({ aboutUs }) {
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Hero />
      <AboutUs aboutUs={aboutUs} />
      <SoftwarePurchase />
      <Services />
      <PopularSoftware />
      <PaymentLogo />
      <HappyCustomers />
      <SiteInfo />
      <CopyRights />
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await axios.get("http://localhost:3000/api/admin/about-us");
  const data = await result.data;
  if (data.length > 0)
    return {
      props: {
        aboutUs: data[0],
      },
    };

  return {
    props: {},
  };
}
