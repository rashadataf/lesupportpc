import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../../components/NavBar/NavBar";
import CopyRights from "../../components/Sections/CopyRights";
import Checkout from "../../components/Sections/Checkout";
import SiteInfo from "../../components/Sections/SiteInfo";
import PaymentLogo from "../../components/Sections/PaymentLogo";

const programs = {
  "starter-pack": {
    title: "starter pack",
    price: 990,
  },
  "silver-pack": {
    title: "silver pack",
    price: 1499,
  },
  "platinum-pack": {
    title: "platinum pack",
    price: 3499,
  },
  "golden-pack": {
    title: "golden pack",
    price: 2499,
  },
  "vip-pack": {
    title: "vip pack",
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
