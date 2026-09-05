import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import type { PainPoint } from "@/lib/content/types";

export function PainPointCard({ item }: { item: PainPoint }) {
  const tone = toneClasses[item.tone];
  const [situation, consequence] = item.bullets;

  return (
    <article
      data-reveal
      className={`card-lift relative flex flex-col overflow-hidden rounded-3xl border border-brand-border/70 bg-white p-7 shadow-sm hover:shadow-lg sm:p-8 ${tone.hover}`}
    >
      <span
        className={`absolute inset-y-0 right-0 w-1.5 ${tone.bullet}`}
        aria-hidden
      />

      <div className="flex items-center gap-3">
        <span
          className={`flex size-14 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}
        >
          <FeatureIcon name={item.icon} size={28} />
        </span>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${tone.badge}`}
        >
          {item.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-extrabold leading-8 text-brand-fg">
        {item.title}
      </h3>

      <p className="mt-3 text-lg leading-8 text-brand-fg/80">{situation}</p>

      {consequence ? (
        <p
          className={`mt-5 flex items-start gap-2.5 rounded-2xl bg-brand-bg px-4 py-3.5 text-base font-semibold leading-8 sm:text-lg ${tone.footer}`}
        >
          <ArrowLeft size={18} weight="bold" className="mt-1.5 shrink-0" />
          <span>{consequence}</span>
        </p>
      ) : null}
    </article>
  );
}
