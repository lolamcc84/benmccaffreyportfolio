import { createFileRoute, Link } from "@tanstack/react-router";
import projectWildlifeAsset from "@/assets/project-wildlife.jpg.asset.json";
const projectWildlife = projectWildlifeAsset.url;
import projectHealthAsset from "@/assets/project-health.png.asset.json";
const projectHealth = projectHealthAsset.url;
import projectCttAsset from "@/assets/project-ctt.png.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAME = "Benjamin McCaffrey";
const EMAIL = "benjaminmccaffrey@icloud.com";
const PHONE = "(314) 750-0278";
const LINKEDIN = "https://www.linkedin.com/in/benjaminmccaffrey";

const projects = [
  {
    tag: "Automation & Ops",
    title: "Center for Transformative Technology",
    blurb:
      "Worked with a 4-person team over an 8-week program to replace manual workflows with automated ones using Typeform, Zapier, Airtable, and Asana, then presented the prototype to leadership.",
    image: projectCttAsset.url,
    href: "/center-for-transformative-technology",
  },
  {
    tag: "Social & Content",
    title: "Jenny's Wildlife Wonderland",
    blurb:
      "Helped a local nonprofit by capturing photos and videos of rescued animals and pitching in on their Instagram and Facebook posts.",
    image: projectWildlife,
    href: "/wildlife-wonderland",
  },
  {
    tag: "Community Health",
    title: "Volunteers in Medicine",
    blurb:
      "Made Canva flyers for a free clinic and helped rewrite health info into simpler, friendlier language for the patients they serve.",
    image: projectHealth,
  },
];

const experience = [
  {
    dates: "Jun 2026 - Jul 2026",
    role: "Intern",
    org: "Center for Transformative Technology · Columbia, MO",
    detail:
      "Built multi-platform automation workflows across Typeform, Zapier, Airtable, and Asana with a small team, then delivered a final executive presentation on the prototype and its operational value.",
  },
  {
    dates: "Feb 2026 - May 2026",
    role: "Marketing Intern (Volunteer)",
    org: "Jenny's Wildlife Wonderland · Columbia, MO",
    detail:
      "Captured photo and video content for marketing and fundraising, created Instagram and Facebook posts aligned with the nonprofit's goals, and helped with website updates.",
  },
  {
    dates: "Sep 2025 - Jan 2026",
    role: "Marketing Assistant (Volunteer)",
    org: "Volunteers in Medicine · Lake Saint Louis, MO",
    detail:
      "Made Canva flyers promoting free health services and worked with staff to turn medical info into easier-to-read materials for the patients they serve.",
  },
  {
    dates: "May 2025 - Aug 2025",
    role: "Freelance Yard Maintenance",
    org: "Self-employed · Lake Saint Louis, MO",
    detail:
      "Ran a small summer business doing lawn care and power washing for local clients, managing my own schedule and working independently.",
  },
  {
    dates: "Jul 2024 & Jul 2025",
    role: "Camp Counselor (Volunteer)",
    org: "Camp Braveways · Fenton, MO",
    detail:
      "Spent two summers supporting kids with cancer and blood-related illnesses by running activities, being a listening ear, and helping everyone feel included.",
  },
  {
    dates: "Aug 2022 - May 2024",
    role: "Golf Cart Attendant",
    org: "Lake Forest Country Club · Dardenne Prairie, MO",
    detail:
      "Helped members and guests during busy shifts. It was a good first taste of working with people in a fast-paced environment.",
  },
];

function Portfolio() {
  return (
    <div className="bg-brand-surface font-sans text-brand-primary">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <a href="#top" className="font-serif italic text-2xl tracking-tight">
          Ben McCaffrey.
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
          <a href="#work" className="hover:text-brand-accent transition-colors">Work</a>
          <a href="#about" className="hover:text-brand-accent transition-colors">About</a>
          <a href="#resume" className="hover:text-brand-accent transition-colors">Resume</a>
          <a href="#contact" className="hover:text-brand-accent transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="top"
        className="max-w-5xl mx-auto px-6 py-10 md:py-16 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">
          Open to Internships
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.9] mb-6">
          Learning <span className="italic text-brand-accent">marketing.</span>
        </h1>
        <p className="text-lg text-brand-primary/70 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm Ben, a marketing student at Mizzou picking up experience
          through internships, volunteer projects, and class work, and looking
          for a role where I can keep learning.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-brand-primary text-white px-8 py-3 rounded-full font-medium hover:bg-brand-accent transition-all hover:-translate-y-1"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="border border-brand-primary/20 px-8 py-3 rounded-full font-medium hover:bg-white transition-all"
          >
            View projects
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-14 border-t border-brand-primary/5"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-primary/40">
            About
          </p>
          <div className="md:col-span-2 space-y-4 text-lg leading-relaxed text-brand-primary/80">
            <p>
              I'm a marketing student at the University of Missouri (BSBA
              Marketing, minor in Economics, expected May 2027). I'm still
              early in my career, so most of what I know so far comes from
              an internship, volunteer work, class projects, and a digital
              marketing certificate I'm working through.
            </p>
            <p>
              I'd love to find a role where I can pitch in on real projects,
              learn from people who've been doing this longer, and keep
              getting better.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="max-w-7xl mx-auto px-6 py-14 border-t border-brand-primary/5"
      >
        <div className="flex justify-between items-end mb-10">
          <h2 className="font-serif text-4xl italic">A Few Projects</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-brand-primary/40">
            01 - 03
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => {
            const content = (
              <>
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover rounded-lg outline-1 -outline-offset-1 outline-black/5 mb-4"
                />
                <p className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">
                  {p.tag}
                </p>
                <h3 className="text-2xl font-serif mb-2 group-hover:underline">
                  {p.title}
                  {"href" in p && p.href ? (
                    <span className="text-brand-accent ml-2">→</span>
                  ) : null}
                </h3>
                <p className="text-brand-primary/60 text-sm leading-relaxed">
                  {p.blurb}
                </p>
              </>
            );
            return "href" in p && p.href ? (
              <Link key={p.title} to={p.href} className="group block">
                {content}
              </Link>
            ) : (
              <article key={p.title} className="group">
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="bg-brand-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-5xl mb-8 italic">Experience So Far</h2>
              <div className="space-y-8">
                {experience.map((e) => (
                  <div key={e.role + e.dates} className="border-b border-white/10 pb-6">
                    <span className="text-brand-accent font-medium">{e.dates}</span>
                    <h4 className="text-xl mt-2">{e.role}</h4>
                    <p className="text-white/50 text-sm mb-3">{e.org}</p>
                    <p className="text-white/80 leading-relaxed">{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-serif italic mb-4">Education</h3>
                <p className="text-lg">University of Missouri</p>
                <p className="text-white/60 text-sm mt-1">
                  BSBA, Marketing · Minor in Economics
                </p>
                <p className="text-white/60 text-sm mt-1">
                  GPA 3.62 · Expected May 2027
                </p>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-serif italic mb-4">What I'm Learning</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] mb-2">
                      Marketing
                    </p>
                    <ul className="space-y-1">
                      <li>Social Media Content</li>
                      <li>Photo &amp; Video Capture</li>
                      <li>Copywriting</li>
                      <li>Community Outreach</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white/40 uppercase tracking-widest text-[10px] mb-2">
                      Tools
                    </p>
                    <ul className="space-y-1">
                      <li>Canva · Meta Business Suite</li>
                      <li>Instagram / Facebook</li>
                      <li>Typeform · Airtable</li>
                      <li>Zapier · Asana</li>
                    </ul>
                  </div>
                </div>
                <a
                  href={resumeAsset.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center w-full border border-white/20 py-3 rounded-lg hover:bg-white hover:text-brand-primary transition-colors font-medium"
                >
                  Download Full Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-brand-accent font-bold uppercase tracking-[0.3em] mb-4">
          Say hello
        </p>
        <h2 className="font-serif text-5xl md:text-6xl mb-8">
          Thanks for stopping <br />
          <span className="italic">by.</span>
        </h2>
        <a
          href={`mailto:${EMAIL}`}
          className="text-2xl md:text-4xl font-light hover:text-brand-accent transition-colors underline underline-offset-8 decoration-1 decoration-brand-primary/20 hover:decoration-brand-accent break-all"
        >
          {EMAIL}
        </a>
        <p className="mt-4 text-lg md:text-xl text-brand-primary/60">
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="hover:text-brand-accent transition-colors"
          >
            {PHONE}
          </a>
        </p>

        <div className="mt-14 pt-6 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-brand-primary/40">
          <p>© {new Date().getFullYear()} {NAME}</p>
          <div className="flex gap-8">
            <a
              href={LINKEDIN}
              className="hover:text-brand-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="hover:text-brand-primary transition-colors"
            >
              Email
            </a>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
