import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceCard = ({ title, body, index }) => {
  const wrapperRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const path = pathRef.current;
    if (!wrapper || !path) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPath = `M 0 25 Q ${x} ${y} 1000 25`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(path, {
        attr: { d: `M 0 25 Q 500 25 1000 25` },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <article className="pt-5 group">
      <div ref={wrapperRef} className="relative h-22 w-full">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 1000 50"
          preserveAspectRatio="none"
          className="absolute left-0 top-0"
        >
          <path
            ref={pathRef}
            d="M 0 25 Q 500 25 1000 25"
            stroke="var(--color-menu-bg-alt)"
            strokeWidth="0.2"
            fill="transparent"
          />
        </svg>
      </div>
      <div className="mb-8 font-[font1] text-sm uppercase tracking-[0.25em] text-black/40">
        0{index + 1}
      </div>
      <h3 className="font-[font2] text-3xl uppercase leading-none lg:text-5xl">
        {title}
      </h3>
      <p className="mt-5 font-[font1] text-lg leading-snug text-black/65 lg:text-xl">
        {body}
      </p>
    </article>
  );
};

const Agence = () => {
  const topLineWrapperRef = useRef(null);
  const topLinePathRef = useRef(null);
  const bottomLineWrapperRef = useRef(null);
  const bottomLinePathRef = useRef(null);
  const skillsLineWrapperRef = useRef(null);
  const skillsLinePathRef = useRef(null);

  useEffect(() => {
    const wrapper = topLineWrapperRef.current;
    const path = topLinePathRef.current;
    if (!wrapper || !path) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(path, {
        attr: { d: `M 0 25 Q ${x} ${y} 1000 25` },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(path, {
        attr: { d: `M 0 25 Q 500 25 1000 25` },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const wrapper = bottomLineWrapperRef.current;
    const path = bottomLinePathRef.current;
    if (!wrapper || !path) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(path, {
        attr: { d: `M 0 25 Q ${x} ${y} 1000 25` },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(path, {
        attr: { d: `M 0 25 Q 500 25 1000 25` },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const wrapper = skillsLineWrapperRef.current;
    const path = skillsLinePathRef.current;
    if (!wrapper || !path) return;

    const handleMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(path, {
        attr: { d: `M 0 25 Q ${x} ${y} 1000 25` },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(path, {
        attr: { d: `M 0 25 Q 500 25 1000 25` },
        duration: 1.2,
        ease: "elastic.out(1,0.2)",
      });
    };

    wrapper.addEventListener("mousemove", handleMove);
    wrapper.addEventListener("mouseleave", handleLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMove);
      wrapper.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const experience = [
    {
      company: "La Net Team Software Solution Pvt Ltd",
      role: "Web Designer",
      period: "Jan 2026 — Present",
      bullets: [
        "Collaborated with 5+ clients to gather requirements and deliver custom web solutions aligned with business and design goals.",
        "Developed scalable dashboards and websites, improving UX consistency and reducing load time by 25–35% using lazy loading, code splitting, and asset optimization.",
        "Improved accessibility across web apps and user experience, increasing overall user engagement.",
      ],
    },
    {
      company: "Mantraksh Devs",
      role: "Web Designer",
      period: "Mar 2025 — Dec 2025",
      bullets: [
        "Worked on responsive design and modern web experiences using React, Bootstrap, React-Bootstrap, and modern frameworks.",
        "Enhanced performance and accessibility across multiple SaaS-based projects.",
      ],
    },
    {
      company: "Globalia Soft LLP",
      role: "Web Designer",
      period: "Sep 2024 — Feb 2025",
      bullets: [
        "Designed and developed responsive websites using HTML, CSS, JavaScript, and modern frameworks.",
        "Implemented modern UI frameworks such as Tailwind CSS, Material-UI and Chakra UI to create visually appealing, efficient interfaces.",
        "Converted Figma design mockups into interactive web pages with pixel-perfect accuracy.",
      ],
    },
  ];

  const services = [
    [
      "Portfolio websites",
      "Bold personal sites that present work clearly, load fast, and feel memorable from the first scroll.",
    ],
    [
      "React interfaces",
      "Reusable components, clean page structure, and responsive layouts that stay stable on every screen.",
    ],
    [
      "Motion design",
      "GSAP transitions, hover moments, and scroll animation that make the experience feel premium.",
    ],
    [
      "UI polish",
      "Typography, spacing, hierarchy, and final details that turn a page into a finished product.",
    ],
  ];

  const skills = [
    {
      label: "Web Technologies",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    },
    {
      label: "Frameworks",
      items: ["Tailwind CSS", "Bootstrap", "Material-UI", "Chakra UI", "React", "React-Bootstrap"],
    },
    {
      label: "Libraries",
      items: ["React.js", "Next.js", "Styled Components"],
    },
    {
      label: "Design Tools",
      items: ["Figma", "Canva", "Illustrator"],
    },
    {
      label: "Practices",
      items: ["Responsive Design", "Cross-Browser Compatibility", "UI/UX Implementation"],
    },
    {
      label: "Soft Skills",
      items: ["Collaboration", "Communication", "Problem-Solving", "Adaptability"],
    },
  ];

  const marqueeSkills = skills.flatMap((group) => group.items);

  const stats = [
    ["20+", "Interfaces shaped"],
    ["06", "Core skills"],
    ["100%", "Responsive build"],
  ];

  return (
    <main className="min-h-screen bg-[var(--color-about-bg)] text-black">
      <section
        id="about"
        className="relative overflow-hidden px-4 pb-16 pt-32 lg:px-6 lg:pb-24 lg:pt-25"
      >

        <div className="relative mx-auto max-w-[1800px]">
          <div className="grid gap-3 border-b border-black/20 pb-4 font-[font1] text-xs uppercase tracking-[0.18em] text-black/55 sm:grid-cols-3 lg:text-sm">
            <span>About the work</span>
            <span className="sm:text-center">Frontend / Motion / UI</span>
            <span className="sm:text-right">Built for impact</span>
          </div>

          <div className="grid gap-10 pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-28">
            <div>
              <p className="font-[font1] text-sm uppercase tracking-[0.28em] text-black/45 lg:text-base">
                Creative frontend developer
              </p>
              <h1 className="mt-5 max-w-6xl font-[font2] text-[20vw] uppercase leading-[0.8] lg:text-[8vw]">
                About <br /> Me
              </h1>
            </div>

            <div className="flex flex-col justify-end gap-8 lg:pb-4">
              <p className="font-[font2] text-4xl leading-[0.95] lg:text-7xl">
                I design and build frontend experiences that feel clean, sharp,
                and alive.
              </p>
              <p className="max-w-3xl font-[font1] text-lg leading-snug text-black/65 lg:text-2xl">
                My focus is simple: strong layout, responsive structure, smooth
                interaction, and details that make a portfolio feel premium
                without becoming noisy.
              </p>
            </div>
          </div>

          <div className="relative mt-14 lg:mt-20">
            <div ref={topLineWrapperRef} className="relative h-15">
              <svg
                width="100%"
                height="50"
                viewBox="0 0 1000 50"
                preserveAspectRatio="none"
                className="absolute left-0 top-0"
              >
                <path
                  ref={topLinePathRef}
                  d="M 0 25 Q 500 25 1000 25"
                  stroke="var(--color-menu-bg-alt)"
                  strokeWidth="0.2"
                  fill="transparent"
                />
              </svg>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div
                  key={label}
                  className="flex items-end justify-between gap-5 border-black/15 py-3 sm:block sm:border-r sm:pr-5 sm:last:border-r-0"
                >
                  <strong className="font-[font2] text-5xl uppercase leading-none lg:text-7xl">
                    {value}
                  </strong>
                  <p className="font-[font1] text-sm uppercase tracking-[0.18em] text-black/50 sm:mt-4">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div ref={bottomLineWrapperRef} className="relative h-15">
              <svg
                width="100%"
                height="50"
                viewBox="0 0 1000 50"
                preserveAspectRatio="none"
                className="absolute left-0 bottom-0"
              >
                <path
                  ref={bottomLinePathRef}
                  d="M 0 25 Q 500 25 1000 25"
                  stroke="var(--color-menu-bg-alt)"
                  strokeWidth="0.2"
                  fill="transparent"
                />
              </svg>
            </div>
          </div>

          <div className="mt-16 space-y-8 pt-10">
            <div className="font-[font1] text-sm uppercase tracking-[0.25em] text-black/45">Experience</div>
            <div className="grid gap-6">
              {experience.map(({ company, role, period, bullets }) => (
                <article key={company} className="rounded-[32px] border border-black/10 bg-white/95 p-8 shadow-sm">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="font-[font1] text-sm uppercase tracking-[0.25em] text-black/40">{role}</p>
                      <h3 className="mt-3 font-[font2] text-4xl uppercase leading-none lg:text-5xl">{company}</h3>
                    </div>
                    <span className="font-[font1] text-sm uppercase tracking-[0.2em] text-black/50">{period}</span>
                  </div>
                  <ul className="mt-8 space-y-3 font-[font1] text-base leading-relaxed text-black/70">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="pl-4 before:content-['–'] before:mr-2 before:text-black/70">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/15 bg-black px-4 py-6 text-[var(--color-accent)] lg:px-6">
        <div className="moveX flex w-max items-center gap-10 font-[font2] text-5xl uppercase leading-none lg:text-8xl">
          {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
            <span key={`${skill}-${idx}`} className="whitespace-nowrap">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1800px] gap-10 px-4 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-6 lg:py-28">
        <div>
          <p className="font-[font1] text-sm uppercase tracking-[0.25em] text-black/45">
            Services
          </p>
          <h2 className="mt-4 font-[font2] text-6xl uppercase leading-[0.85] lg:text-9xl">
            What I Do
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map(([title, body], index) => (
            <ServiceCard key={title} title={title} body={body} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 pb-28 lg:px-6">
        <div className="relative grid gap-8 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div ref={skillsLineWrapperRef} className="absolute left-0 top-0 h-15 w-full">
            <svg
              width="100%"
              height="50"
              viewBox="0 0 1000 50"
              preserveAspectRatio="none"
              className="absolute left-0 top-0"
            >
              <path
                ref={skillsLinePathRef}
                d="M 0 25 Q 500 25 1000 25"
                stroke="var(--color-menu-bg-alt)"
                strokeWidth="0.2"
                fill="transparent"
              />
            </svg>
          </div>
          <h2 className="font-[font2] text-6xl uppercase leading-[0.85] lg:text-9xl">
            Skills
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.label} className="rounded-[28px] border border-black/10 bg-white/95 p-6 shadow-sm">
                <p className="font-[font1] text-sm uppercase tracking-[0.25em] text-black/45">{group.label}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm uppercase text-black/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Agence;
