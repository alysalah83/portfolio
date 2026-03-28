import { SurfaceLink } from "../portfolio/ui/SurfaceLink";
import CopyEmailBtn from "./CopyEmailBtn";

function ContactSection() {
  return (
    <section id="contact" className="border-border border-t py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 md:px-10">
        <div className="border-border bg-surface relative overflow-hidden rounded-xl border px-8 py-16 text-center">
          <div className="bg-accent-dim absolute top-[-90px] right-[-90px] h-[280px] w-[280px] rounded-full" />
          <div className="bg-accent-dim absolute bottom-[-90px] left-[-90px] h-[240px] w-[240px] rounded-full" />
          <h2 className="text-text relative z-10 mb-4 font-mono text-[clamp(1.8rem,4vw,2.6rem)] font-medium">
            Let&apos;s work together.
          </h2>
          <p className="text-muted-text relative z-10 mx-auto mb-8 max-w-xl text-base leading-relaxed">
            I&apos;m looking for front-end roles where I can build real products
            and solve real problems — not just maintain JIRA tickets.
          </p>
          <address className="relative z-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:alysalah83@gmail.com"
              className="border-accent bg-accent text-accent-text inline-flex items-center gap-2 rounded-lg border px-6 py-[10px] font-mono text-[13px] font-medium transition-all duration-200 active:scale-95"
            >
              Email Me
            </a>
            <SurfaceLink href="https://www.linkedin.com/in/aly-salah-456942286/">
              LinkedIn
            </SurfaceLink>
            <SurfaceLink href="https://github.com/alysalah83">
              GitHub
            </SurfaceLink>
          </address>
          <div className="text-muted-text relative z-10 mt-6 flex flex-col items-center gap-1 not-italic">
            <p className="text-sm">Email Link didn&apos;t work?</p>
            <CopyEmailBtn />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
