import { useRouter } from "next/router";

import en from "../../locales/en";
import fr from "../../locales/fr";
import Slider from "../Slider/Slider";

export default function HappyCustomers() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;
  return (
    <div className="relative mt-10" id="happy-customers">
      <h2 className="absolute left-2/4 top-8 transform text-3xl -translate-x-2/4 text-white z-30">
        {language.happyCustomers.title}
      </h2>
      <Slider autoPlay={true} />
      <button
        className="absolute right-3 top-2/4 transform -rotate-45 border-t-0 border-r-8 border-b-8 border-l-0 border-solid border-white inline-block p-2"
        onClick={Slider.mobileNext}
      ></button>
      <button
        className="absolute left-3 top-2/4 transform rotate-135 border-t-0 border-r-8 border-b-8 border-l-0 border-solid border-white inline-block p-2"
        onClick={Slider.mobilePrev}
      ></button>
    </div>
  );
}
