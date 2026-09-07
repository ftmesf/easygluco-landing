import { featureGroups } from "@/lib/content/product";
import { FeatureIcon } from "@/components/viz/FeatureIcon";
import { toneClasses } from "@/components/viz/tone";
import { Reveal } from "@/components/Reveal";
import { CarePath } from "@/components/viz/CarePath";

export function Features() {
  return (
    <section id="features" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            ایزی‌گلوکو چه امکاناتی دارد؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دستگاه ایزی‌گلوکو در ۹ ثانیه نتیجه می‌دهد، عدد را با اسکن نمایشگر
            در اپ سیناکر ثبت می‌کند و تا ۳۶۵ نتیجه آزمایش را روی خود نگه
            می‌دارد.
          </p>
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-[1.75rem] border border-brand-border/80 bg-white">
          <CarePath />

          <div className="grid border-t border-brand-border/70 sm:grid-cols-2">
            {featureGroups.map((group, index) => {
              const tone = toneClasses[group.tone];
              const isStart = index % 2 === 0;
              const isTop = index < 2;

              return (
                <article
                  key={group.title}
                  data-reveal
                  className={`relative flex min-h-[240px] flex-col justify-between gap-10 p-8 sm:p-9 ${
                    isStart ? "sm:border-e sm:border-brand-border/70" : ""
                  } ${isTop ? "border-b border-brand-border/70" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className={`text-[2rem] font-extrabold leading-none tracking-tight sm:text-4xl ${tone.footer}`}
                    >
                      {group.figure}
                    </p>
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${tone.icon}`}
                    >
                      <FeatureIcon name={group.icon} size={22} />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-fg sm:text-xl">
                      {group.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                      {group.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
