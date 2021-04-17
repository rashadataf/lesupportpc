import ProgramCard from "../ProgramCard/ProgramCard";
import ProgramsCollection from "../ProgramsCollection/ProgramsCollection";

export default function PopularSoftware() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-3xl font-light text-gray-600 mt-8">
        Our Most Popular Software
      </h2>
      <ProgramsCollection title="Popular Office Software">
        <ProgramCard
          title="Microsoft Office Professional"
          img="/msofficeprofessional.png"
          description="Features: Word, Excel, PowerPoint, OneNote, Outlook, Publisher, Access\Best for small to medium size businesses\Regular updates provided by Microsoft"
          price={399.99}
        />
        <ProgramCard
          title="Microsoft Office Home & Business"
          img="/msofficehome.png"
          description="Features: Word, Excel, PowerPoint, OneNote, Outlook, Publisher, Access\Best for small to medium size businesses\Regular updates provided by Microsoft"
          price={299.99}
        />
        <ProgramCard
          title="Microsoft Office Professional"
          img="/msofficepersonal.png"
          description="Features: Word, Excel, PowerPoint, OneNote, Outlook, Publisher, Access\Best for small to medium size businesses\Regular updates provided by Microsoft"
          price={99.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title="Popular Cyber Security Software">
        <ProgramCard
          title="AVG Internet Security"
          img="/avg_is.png"
          description="Our advanced antivirus scans for, removes and flat-out stops viruses, ransomware, spyware, rootkits, Trojans, and other nasty malware\Hacker, Web, Email, and Data protection\Unlimited protection for all your home devices included"
          price={99.99}
        />
        <ProgramCard
          title="Avast Internet Security"
          img="/avast_is.png"
          description="Spot scams, spam, avoid fake websites, stop ransomeware in its tracks and firewall all your data\Avast is globally trusted by millions of users\3 Years of protection for all of your devices"
          price={199.99}
        />
        <ProgramCard
          title="ESET Internet Security"
          img="/eset_is.png"
          description="Enjoy your digital life to the fullest, protected by ESET's ultimate multi-layered security\Block exploits, protect from botnets and script attacks, and keep all of your data safe.\For when you need the most complete internet security"
          price={79.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title="Popular Antivirus">
        <ProgramCard
          title="AVG Ultimate"
          img="/avg_av.png"
          description="Award-winning security and performance for you and your family\Unlimited installs. For all your personal devices.\The all-in-one, best-in-class antivirus & tuneup combo"
          price={89.99}
        />
        <ProgramCard
          title="VIPRE Antivirus"
          img="/vpire_av.png"
          description="When you choose VIPRE, you’ll secure your data with the highest-rated malware defense that consistently earns 100% block rates\Protect Your Family from Today's Biggest Security Risks\The best value for your money"
          price={49.99}
        />
        <ProgramCard
          title="McAfee Antivirus"
          img="/macfee_av.png"
          description="McAfee is one of the world’s leading independent cybersecurity companies.\100% Guarantee: Viruses removed or your money back\Protection for all your PCs, Macs, smartphones and tablets."
          price={29.99}
        />
      </ProgramsCollection>
      <ProgramsCollection title="Popular PC Tuners">
        <ProgramCard
          title="AVG Tuneup"
          img="/avg_tp.png"
          description="Explore the all-in-one tuning suite for your PC, Android and Mac\Makes old PCs live longer—and new PCs run faster!\Get a faster, cleaner, longer-lasting PC"
          price={39.99}
        />
        <ProgramCard
          title="CC Cleaner Pro"
          img="/cc_tp.png"
          description="CCleaner Professional analyzes PCs to see what can be cleaned. You decide when and what to clean\Regain your PC's speed, stability and privacy with CCleaner Professional\Unlimited users"
          price={14.99}
        />
        <ProgramCard
          title="MalwareBytes 3.0"
          img="/malwarebytes_tp.png"
          description="Malwarebytes 3 is a next-generation antivirus replacement.\Four layers of malware-crushing tech\Specialized ransomware protection"
          price={19.99}
        />
      </ProgramsCollection>
    </div>
  );
}
