import { createFileRoute, Link } from "@tanstack/react-router";
import zapImage from "@/assets/ctt-zap.png.asset.json";

export const Route = createFileRoute("/center-for-transformative-technology")({
  head: () => ({
    meta: [
      { title: "Center for Transformative Technology — Ben McCaffrey" },
      {
        name: "description",
        content:
          "A look at the main Zapier automation my team built during an 8-week internship at the Center for Transformative Technology at Mizzou.",
      },
      { property: "og:title", content: "Center for Transformative Technology — Ben McCaffrey" },
      {
        property: "og:description",
        content:
          "Zapier automation built during an 8-week internship with the Center for Transformative Technology.",
      },
    ],
  }),
  component: CTT,
});

function CTT() {
  return (
    <div className="bg-brand-surface font-sans text-brand-primary min-h-screen">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link to="/" className="font-serif italic text-2xl tracking-tight">
          Ben McCaffrey.
        </Link>
        <Link
          to="/"
          className="text-sm font-medium uppercase tracking-widest hover:text-brand-accent transition-colors"
        >
          ← Back
        </Link>
      </nav>

      <header className="max-w-5xl mx-auto px-8 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-6">
          Automation & Ops · Jun 2026 – Jul 2026
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-8">
          Center for <span className="italic text-brand-accent">Transformative Technology.</span>
        </h1>
        <p className="text-lg text-brand-primary/70 leading-relaxed max-w-2xl">
          Over an 8-week internship, a 4-person team and I worked with a
          local logistics trucking company to replace their manual quoting
          system with an automated one. Before our Zap, every quote request
          had to be reviewed, priced, and routed by hand. Our workflow does
          that work automatically: it takes a Typeform quote request,
          validates the pickup and delivery address, checks Airtable for
          duplicate leads, then scores the lead as green, yellow, or red
          based on distance and fit. From there it drafts the right quote
          email through Gmail and creates a follow-up task in Asana for
          the sales team, so a request that used to take hours of
          back-and-forth now lands in the right person's queue in minutes.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <figure>
          <div className="bg-white rounded-lg overflow-hidden outline-1 -outline-offset-1 outline-black/5">
            <img
              src={zapImage.url}
              alt="Zapier workflow diagram showing the quote request automation"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <figcaption className="mt-5 max-w-2xl">
            <h2 className="text-xl font-serif mb-2">Main Zap</h2>
            <p className="text-brand-primary/60 text-sm leading-relaxed">
              Full view of the primary automation. Steps branch on address
              validity, duplicate detection, and lead category, sending the
              right email and creating the right Asana task for each path.
            </p>
          </figcaption>
        </figure>

        <div className="mt-20 text-center">
          <Link
            to="/"
            className="inline-block border border-brand-primary/20 px-8 py-4 rounded-full font-medium hover:bg-white transition-all"
          >
            ← Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
