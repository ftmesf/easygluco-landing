import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { PainPoint } from "@/lib/content/types";

export function PainPointCard({
  item,
  step,
}: {
  item: PainPoint;
  step: string;
}) {
  const tone = toneClasses[item.tone];

  return (
    <article data-reveal className="grid grid-cols-[auto_1fr] gap-x-4 px-5 py-7 sm:gap-x-6 sm:px-8 sm:py-8">
      <span
        className={`mt-0.5 font-extrabold leading-none tracking-tight ${tone.footer} text-lg sm:text-xl`}
        aria-hidden
      >
        {step}
      </span>
      <div className="min-w-0">
        <p className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground">
          <span className={`flex size-7 items-center justify-center rounded-lg ${tone.icon}`}>
            <FeatureIcon name={item.icon} size={14} />
          </span>
          {item.kicker}
        </p>
        <h3 className="mt-2 text-base font-extrabold leading-7 text-brand-fg sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.95rem] sm:leading-8">
          {item.body}
        </p>
      </div>
    </article>
  );
}
