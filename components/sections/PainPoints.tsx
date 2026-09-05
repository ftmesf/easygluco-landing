import { painPoints } from "@/lib/content/product";
import { PainPointCard } from "@/components/viz/PainPointCard";
import { Reveal } from "@/components/Reveal";

const stepLabels = ["۰۱", "۰۲", "۰۳", "۰۴"];

export function PainPoints() {
  return (
    <section id="why" className="section-alt scroll-mt-28 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
        <div className="max-w-md lg:sticky lg:top-28">
          <p className="text-xs font-bold tracking-wide text-brand-primary">
            چرا پایش قطع می‌شود؟
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-snug text-brand-fg sm:text-3xl">
            تست روزانه معمولاً وسط راه می‌ماند
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            نوار، سختی نمونه‌گیری، ثبت‌نشدن عدد و تردید نسبت به نتیجه، هر کدام
            می‌تواند پایش را متوقف کند.
          </p>
        </div>

        <Reveal className="overflow-hidden rounded-[1.75rem] border border-brand-border/70 bg-white">
          <ol>
            {painPoints.map((item, index) => (
              <li
                key={item.title}
                className="border-b border-brand-border/60 last:border-b-0"
              >
                <PainPointCard item={item} step={stepLabels[index] ?? "۰۱"} />
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
