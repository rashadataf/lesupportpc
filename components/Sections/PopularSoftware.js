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
      <ProgramsCollection title={language.popularSotware.section1.title}>
        <ProgramCard
          title={language.popularSotware.section1.program1.title}
          img="/msofficeprofessional.png"
          description={language.popularSotware.section1.program1.description}
          price={399.99}
        />
        <ProgramCard
          title={language.popularSotware.section1.program2.title}
          img="/msofficehome.png"
          description={language.popularSotware.section1.program2.description}
          price={299.99}
        />
        <ProgramCard
          title={language.popularSotware.section1.program3.title}
          img="/msofficepersonal.png"
          description={language.popularSotware.section1.program3.description}
          price={99.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title={language.popularSotware.section2.title}>
        <ProgramCard
          title={language.popularSotware.section2.program1.title}
          img="/avg_is.png"
          description={language.popularSotware.section2.program1.description}
          price={99.99}
        />
        <ProgramCard
          title={language.popularSotware.section2.program2.title}
          img="/avast_is.png"
          description={language.popularSotware.section2.program2.description}
          price={199.99}
        />
        <ProgramCard
          title={language.popularSotware.section2.program3.title}
          img="/eset_is.png"
          description={language.popularSotware.section2.program3.description}
          price={79.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title={language.popularSotware.section3.title}>
        <ProgramCard
          title={language.popularSotware.section3.program1.title}
          img="/avg_av.png"
          description={language.popularSotware.section3.program1.description}
          price={89.99}
        />
        <ProgramCard
          title={language.popularSotware.section3.program2.title}
          img="/vpire_av.png"
          description={language.popularSotware.section3.program2.description}
          price={49.99}
        />
        <ProgramCard
          title={language.popularSotware.section3.program3.title}
          img="/macfee_av.png"
          description={language.popularSotware.section3.program3.description}
          price={29.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title={language.popularSotware.section4.title}>
        <ProgramCard
          title={language.popularSotware.section4.program1.title}
          img="/avg_tp.png"
          description={language.popularSotware.section4.program1.description}
          price={39.99}
        />
        <ProgramCard
          title={language.popularSotware.section4.program2.title}
          img="/cc_tp.png"
          description={language.popularSotware.section4.program2.description}
          price={14.99}
        />
        <ProgramCard
          title={language.popularSotware.section4.program3.title}
          img="/malwarebytes_tp.png"
          description={language.popularSotware.section4.program3.description}
          price={19.99}
        />
      </ProgramsCollection>
    </div>
  );
}
