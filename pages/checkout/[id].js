import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/Sections/CopyRights";
import Checkout from "../../components/Sections/Checkout";
import SiteInfo from "../../components/Sections/SiteInfo";
import PaymentLogo from "../../components/Sections/PaymentLogo";

const programs = {
  "avg-internet-security": {
    title: "AVG Internet Security",
    price: 990,
  },
  "avast-internet-security": {
    title: "Avast Internet Security",
    price: 1499,
  },
  "eset-internet-security": {
    title: "ESET Internet Security",
    price: 3499,
  },
  "avg-ultimate": {
    title: "AVG Ultimate",
    price: 2499,
  },
  "vipre-antivirus": {
    title: "VIPRE Antivirus",
    price: 4999,
  },
  "mcafee-antivirus": {
    title: "McAfee Antivirus",
    price: 245.99,
  },
  "avg-ultimate-tuneup": {
    title: "AVG UltimateAVG Tuneup",
    price: 324.99,
  },
  "cc-cleaner-pro": {
    title: "CC Cleaner Pro",
    price: 122.99,
  },
  "malware-bytes": {
    title: "MalwareBytes 3.0",
    price: 164.99,
  },
};

export default function CheckoutID() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Checkout program={id ? programs[id] : null} />
      <PaymentLogo />
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
