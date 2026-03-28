import { FADE_UP_CLASS } from "../portfolio/portfolio.constants";
import { SectionHeading } from "../portfolio/ui/SectionHeading";
import { aboutHighlights, approachCards, timeline } from "./about.consts";

function AboutSection() {
  return (
    <>
      <section className="border-border border-t py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10">
          <SectionHeading>how I approach building</SectionHeading>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {approachCards.map((card) => (
              <div
                key={card.title}
                data-fade-up
                className={`border-border bg-surface3 rounded-xl border p-6 ${FADE_UP_CLASS}`}
              >
                <div className="text-accent mb-3 font-mono text-xs tracking-widest">
                  {card.title}
                </div>
                <p className="text-muted-text text-sm leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-border border-t py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10">
          <SectionHeading>about</SectionHeading>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="text-muted-text mb-5 text-base leading-[1.9] font-light">
                I’ve built full applications end-to-end, including a workspace
                management SaaS with multiple task views and a custom component
                system. I focus on front-end work that stays fast, maintainable,
                and easy to extend as complexity grows.
              </p>
              <p className="text-muted-text mb-5 text-base leading-[1.9] font-light">
                I care about clean component APIs, predictable state,
                performance, accessibility, and code that a teammate can
                understand without needing a long explanation. I can work across
                the stack when needed, but front-end is where I go deepest. I
                also hold a B.Sc. in Mathematics, which helps me approach
                problems with structure and clarity.
              </p>

              <div className="mt-6 flex flex-col gap-5">
                {timeline.map((item, index) => (
                  <div key={item.label} className="relative pl-5">
                    <span className="bg-accent absolute top-1.5 left-0 h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--color-accent-glow)]" />
                    {index < timeline.length - 1 ? (
                      <span className="bg-border absolute top-3.5 -bottom-4 left-0.5 w-px" />
                    ) : null}
                    <div className="text-accent mb-1 font-mono text-sm">
                      {item.label}
                    </div>
                    <div className="text-muted-text text-sm">{item.body}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 content-start gap-3">
              {aboutHighlights.map((item) => (
                <div
                  key={item.title}
                  className="border-border bg-surface3 rounded-lg border p-4"
                >
                  <div className="text-accent mb-1 font-mono text-xs tracking-widest">
                    {item.title}
                  </div>
                  <div className="text-muted-text text-sm font-light tracking-wide">
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
