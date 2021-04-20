import { useRouter } from "next/router";

import en from "../../locales/en";
import fr from "../../locales/fr";

export default function Services() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;

  return (
    <div className="bg-blue-600 flex flex-col items-center py-3">
      {/* image */}
      <div className="mt-10">
        <img src="/services.png" alt="an image" className="w-64 lg:w-96" />
      </div>
      {/* Content */}
      <div className="mt-10 text-center text-white">
        <h2 className="text-3xl lg:text-5xl">{language.showCase.title}</h2>
        <h3 className="mt-6 leading-relaxed lg:text-xl">
          {language.showCase.content.split(".").map((secm, i) => {
            return (
              <span key={i}>
                {secm} <br key={(i + 1) * 999} />
              </span>
            );
          })}
        </h3>
        <button className="mt-8 border rounded-full py-3 px-6 border-white">
          {language.showCase.button}
        </button>
      </div>
    </div>
  );
}
