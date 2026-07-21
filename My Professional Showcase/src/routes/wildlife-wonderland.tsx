import { createFileRoute, Link } from "@tanstack/react-router";
import donationFlyer from "@/assets/jww-donation-flyer.png.asset.json";
import kittenShower from "@/assets/jww-kitten-shower.jpg.asset.json";

export const Route = createFileRoute("/wildlife-wonderland")({
  head: () => ({
    meta: [
      { title: "Jenny's Wildlife Wonderland — Ben McCaffrey" },
      {
        name: "description",
        content:
          "A look at flyers and social content I made as a marketing intern for Jenny's Wildlife Wonderland, a Boone County nonprofit wildlife rescue.",
      },
      { property: "og:title", content: "Jenny's Wildlife Wonderland — Ben McCaffrey" },
      {
        property: "og:description",
        content:
          "Flyers and social content created for Jenny's Wildlife Wonderland, a nonprofit wildlife rescue.",
      },
    ],
  }),
  component: WildlifeWonderland,
});

const flyers = [
  {
    src: donationFlyer.url,
    title: "Donate Today",
    caption:
      "Donation flyer highlighting operating costs and specific supply needs, with QR codes for PayPal and Venmo.",
  },
  {
    src: kittenShower.url,
    title: "Kitten Shower",
    caption:
      "Promo flyer for a week-long online kitten shower fundraiser with wish-list links and a naming incentive for donors.",
  },
];

function WildlifeWonderland() {
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
          Social & Content · Feb 2026 – May 2026
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] mb-8">
          Jenny's Wildlife <span className="italic text-brand-accent">Wonderland.</span>
        </h1>
        <p className="text-lg text-brand-primary/70 leading-relaxed max-w-2xl">
          Jenny's Wildlife Wonderland is the only nonprofit wildlife rescue in
          Boone County, Missouri, and it runs entirely on volunteers and
          donations. As a marketing intern I captured photo and video of
          rescued animals, helped keep their Instagram and Facebook active,
          and designed flyers to support donation drives and events. Here are
          a couple of the flyers.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {flyers.map((f) => (
            <figure key={f.title} className="group">
              <div className="bg-white rounded-lg overflow-hidden outline-1 -outline-offset-1 outline-black/5">
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-5">
                <h2 className="text-xl font-serif mb-2">{f.title}</h2>
                <p className="text-brand-primary/60 text-sm leading-relaxed">
                  {f.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

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
