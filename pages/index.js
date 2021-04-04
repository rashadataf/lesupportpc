import Head from "next/head";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import AboutUs from "../components/Sections/AboutUs";
import TopBar from "../components/TopBar/TopBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Hero />
      <AboutUs />
    </div>
  );
}
