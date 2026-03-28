import { SectionHeading } from "../portfolio/ui/SectionHeading";
import { SkillPill } from "../portfolio/ui/SkillPill";
import { skillGroups } from "./skills.consts";

function SkillsSection() {
  return (
    <section id="skills" className="border-border border-t py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10">
        <SectionHeading>skills &amp; tools</SectionHeading>

        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="text-muted-text mb-2 font-mono text-xs tracking-widest uppercase">
                {group.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
