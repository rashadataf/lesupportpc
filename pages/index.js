import Head from "next/head";
import TopBar from "../components/TopBar/TopBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <TopBar />
    </div>
  );
}
