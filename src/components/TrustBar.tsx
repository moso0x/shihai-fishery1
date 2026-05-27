const badges = [
  { t: "ISO-aligned", d: "Quality protocols" },
  { t: "Cold Chain", d: "Farm → market" },
  { t: "Traceable", d: "Batch records" },
  { t: "Eco Cages", d: "Low-impact" },
  { t: "Local Jobs", d: "Kenyan team" },
  { t: "30 Years", d: "Tilapia expertise" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
          {badges.map((b) => (
            <div
              key={b.t}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="font-display text-xl text-foreground">{b.t}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {b.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
