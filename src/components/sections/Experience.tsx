import data from "../../config/data";
import SectionTitle from "../ui/SectionTitle";
import TimelineItem from "../TimelineItem";

/** Experience section with vertical timeline */
export default function Experience() {
  return (
    <section className="py-24 md:py-32 px-6" id="experience">
      <div className="mx-auto max-w-3xl">
        <SectionTitle>Expérience</SectionTitle>

        <div className="mt-8">
          {data.experiences.map((exp, i) => (
            <TimelineItem key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
