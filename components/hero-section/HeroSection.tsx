function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-60px)] max-w-5xl flex-col justify-center px-5 pt-16 pb-14 sm:px-8 md:px-16 md:pt-20 md:pb-16">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(203, 255, 71, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(203, 255, 71, 0.03) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          maskImage:
            "radial-gradient(ellipse 100% 100% at 50% 0%, black 30%, transparent 100%)",
        }}
      />
      <div className="absolute -top-28 -right-40 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(203,255,71,0.06)_0%,transparent_70%)] sm:-right-28 sm:h-[420px] sm:w-[420px] md:-right-24 md:h-[500px] md:w-[500px]" />
      <div className="border-border text-muted-text relative mb-10 inline-flex w-fit animate-[enter-up_0.55s_ease_0.05s_both] items-center gap-2 overflow-hidden rounded-full border px-4 py-1 font-mono text-[12px]">
        <span className="pointer-events-none absolute inset-0 animate-[badge-shimmer_3s_ease_infinite] bg-[linear-gradient(90deg,transparent_0%,rgba(203,255,71,0.1)_50%,transparent_100%)] bg-size-[400px_100%]" />
        <span className="bg-success h-2 w-2 shrink-0 animate-[pulse-dot_2s_ease_infinite] rounded-full shadow-[0_0_8px_var(--color-success)]" />
        <span>
          Available for Front-End positions · React / Next.js · Alexandria, EG
        </span>
      </div>
      <h1 className="text-text mb-6 animate-[enter-up_0.55s_ease_0.18s_both] font-mono text-[clamp(2rem,5vw,3.4rem)] leading-tight font-medium tracking-[-0.02em]">
        I build React UI systems
        <br />
        <span className="text-accent">not just screens.</span>
      </h1>
      <p className="text-muted-text mb-8 max-w-[500px] animate-[enter-up_0.55s_ease_0.3s_both] text-base leading-[1.85] font-light">
        Front-end engineer specialising in React and Next.js. I build
        production-ready UI systems, complex state architectures, custom
        component libraries, and multi-view interactive applications, and I can
        deliver the full feature end-to-end when needed.
      </p>
      <div className="border-border mb-10 flex animate-[enter-up_0.55s_ease_0.42s_both] flex-wrap gap-8 border-b pb-8">
        <div>
          <div className="text-text font-mono text-2xl font-medium">5+</div>
          <div className="text-muted-text mt-1 text-sm">
            Full-stack projects shipped
          </div>
        </div>
        <div className="bg-border w-px" />
        <div>
          <div className="text-accent font-mono text-2xl font-medium">80%</div>
          <div className="text-muted-text mt-1 text-sm">
            Render time cut measured, not guessed
          </div>
        </div>
        <div className="bg-border w-px" />
        <div>
          <div className="text-text flex items-center gap-2 font-mono text-2xl font-medium">
            Live
            <span className="bg-success inline-block h-2 w-2 rounded-full shadow-[0_0_8px_var(--color-success)]" />
          </div>
          <div className="text-muted-text mt-1 text-sm">
            Real client app in production
          </div>
        </div>
      </div>
      <div className="flex animate-[enter-up_0.55s_ease_0.52s_both] flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="border-accent bg-accent text-accent-text inline-flex items-center gap-2 rounded-lg border px-6 py-2.5 font-mono text-sm font-medium transition-all duration-200 active:scale-95"
        >
          See My Work
        </a>
        <a
          href="/public/Aly_Salah_Frontend_Engineer.pdf"
          download="Aly_Salah_Frontend_Engineer"
          className="text-text rounded-lg border border-gray-700 px-4 py-2 font-mono text-sm font-medium transition duration-200 hover:bg-gray-700/20"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
