import { useRouter } from "next/router";

import en from "../../locales/en";
import fr from "../../locales/fr";

import ProgramCard from "../ProgramCard/ProgramCard";
import ProgramsCollection from "../ProgramsCollection/ProgramsCollection";

export default function PopularSoftware() {
  const router = useRouter();
  const { locale } = router;
  const language = locale === "en" ? en : fr;

  return (
    <div className="flex flex-col items-center" id="popular-software">
      <h2 className="text-center text-3xl font-light text-gray-600 mt-8">
        {language.popularSotware.title}
      </h2>
      <ProgramsCollection title={language.popularSotware.section2.title}>
        <ProgramCard
          title={language.popularSotware.section2.program1.title}
          img="/avg_is.png"
          description={language.popularSotware.section2.program1.description}
          price={990}
        />
        <ProgramCard
          title={language.popularSotware.section2.program2.title}
          img="/avast_is.png"
          description={language.popularSotware.section2.program2.description}
          price={1499}
        />
        <ProgramCard
          title={language.popularSotware.section2.program3.title}
          img="/eset_is.png"
          description={language.popularSotware.section2.program3.description}
          price={3499}
        />
      </ProgramsCollection>
      <ProgramsCollection title={language.popularSotware.section3.title}>
        <ProgramCard
          title={language.popularSotware.section3.program1.title}
          img="/avg_av.png"
          description={language.popularSotware.section3.program1.description}
          price={2499}
        />
        <ProgramCard
          title={language.popularSotware.section3.program2.title}
          img="/vpire_av.png"
          description={language.popularSotware.section3.program2.description}
          price={4999}
        />
        <ProgramCard
          title={language.popularSotware.section3.program3.title}
          img="/macfee_av.png"
          description={language.popularSotware.section3.program3.description}
          price={245.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title={language.popularSotware.section4.title}>
        <ProgramCard
          title={language.popularSotware.section4.program1.title}
          img="/avg_tp.png"
          description={language.popularSotware.section4.program1.description}
          price={324.99}
        />
        <ProgramCard
          title={language.popularSotware.section4.program2.title}
          img="/cc_tp.png"
          description={language.popularSotware.section4.program2.description}
          price={122.99}
        />
        <ProgramCard
          title={language.popularSotware.section4.program3.title}
          img="/malwarebytes_tp.png"
          description={language.popularSotware.section4.program3.description}
          price={164.99}
        />
      </ProgramsCollection>
    </div>
  );
}
