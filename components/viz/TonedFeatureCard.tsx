import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { ClarifyPoint } from "@/lib/content/types";

export function TonedFeatureCard({
  item,
  tone,
}: {
  item: ClarifyPoint;
  tone: ClarifyPoint["tone"];
}) {
  const toneClass = toneClasses[tone];

  return (
    <article
      data-reveal
      className={`relative overflow-hidden rounded-3xl border border-brand-border/60 bg-white p-6 shadow-sm sm:p-7 ${toneClass.hover}`}
    >
      <span
        aria-hidden
        className={`absolute inset-y-0 start-0 w-1.5 ${toneClass.bullet}`}
      />
      <span
        className={`flex size-11 items-center justify-center rounded-2xl ${toneClass.icon}`}
      >
        <FeatureIcon name={item.icon} size={22} />
      </span>
      <h3 className="mt-5 text-xl font-extrabold text-brand-fg">{item.title}</h3>
      <p className="mt-3 text-base leading-8 text-muted-foreground">
        {item.description}
      </p>
    </article>
  );
}
