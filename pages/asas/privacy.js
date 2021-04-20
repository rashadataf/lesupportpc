import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import CopyRights from "../components/Sections/CopyRights";
import SiteInfo from "../components/Sections/SiteInfo";

export default function Terms() {
  return (
    <div>
      <Head>
        <title>Le Support PC</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div className="p-6">
        <h1 className="text-4xl mb-14 text-gray-600">Privacy Policy</h1>
        <p className="mb-14 text-gray-600">
          Depannage Ordi has created this Privacy Policy to demonstrate our
          dedication to respecting privacy. This Privacy Policy sets out our
          practices with respect to personal information collected regarding
          visitors and subscribers (collectively referred as “you”) of Depannage
          Ordi. Depannage Ordi provides computer and software service and
          support to adults; persons under the age of eighteen are strictly
          prohibited from this Site and we do not intentionally collect
          information on individuals under the age of eighteen. By visiting or
          subscribing to this Site, you agree and consent to the terms of this
          Privacy Policy as amended from time to time, as well as the terms and
          conditions of this Site.{" "}
        </p>
        <h3 className="font-bold mb-6 text-gray-600">Use of information</h3>
        <p className="mb-14 text-gray-600">
          Although we collect personal information such as email address, phone
          number, physical address and credit card information, we do not reuse
          or share any of this information with anyone..
        </p>
        <h3 className="font-bold mb-6 text-gray-600">Security</h3>
        <p className="mb-14 text-gray-600">
          This Site has security measures in place to protect the loss, misuse
          and alteration of the information under our control.As for all other
          information, visitors and subscribers should consider this
          communication and information to be non-confidential, and
          consequently, we assume no responsibility or liability if any
          information relating to any visitor or subscriber is intercepted
          and/or used by an unintended recipient.
        </p>
        <h3 className="font-bold mb-6 text-gray-600">
          Acceptance of these Terms{" "}
        </h3>
        <p className="mb-14 text-gray-600">
          By visiting or subscribing to this Site, you agree to the practices
          described in this Privacy Policy. We may at any time revise or amend
          any of these terms and conditions. You are bound by any such revisions
          and should therefore periodically visit this page to review the
          then-current terms and conditions to which you are bound.
        </p>
      </div>
      <SiteInfo />
      <CopyRights />
    </div>
  );
}
