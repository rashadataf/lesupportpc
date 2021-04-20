import { useRouter } from "next/router";
import Image from "next/image";

import en from "../../locales/en";
import fr from "../../locales/fr";

export default function Hero() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;
  return (
    <div
      className="flex p-2 items-center md:w-full md:h-screen justify-between"
      style={{
        background:
          "linear-gradient(to bottom,#3b82f6bb,#3b82f6bb),url(/background.jpg) no-repeat center center/cover",
      }}
    >
      <div className="w-7/12 md:w-5/12 text-center text-white sm:-mt-9">
        <h3 className="text-xs md:text-2xl">{language.Hero.title1}</h3>
        <hr className="m-4" />
        <h1 className="text-sm md:text-4xl font-bold">
          {language.Hero.title2}
        </h1>
        <hr className="m-4" />
        <h3 className="text-xs md:text-2xl">{language.Hero.title3}</h3>
      </div>
      <div className="w-5/12 md:w-5/12">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
}
