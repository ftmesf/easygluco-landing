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
            امکانات دستگاه
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از نوار تا ثبت در اپ — آنچه برای تست روزانه لازم است.
          </p>
        </div>

        <div className="mt-8">
          <CarePath />
        </div>

        <Reveal className="mt-6 overflow-hidden rounded-2xl border border-brand-border/80 bg-white">
          {featureGroups.map((group, index) => {
            const tone = toneClasses[group.tone];
            return (
              <div
                key={group.title}
                data-reveal
                className={`flex items-start gap-4 px-5 py-5 sm:px-6 ${
                  index < featureGroups.length - 1
                    ? "border-b border-brand-border/70"
                    : ""
                }`}
              >
                <span
                  className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
                >
                  <FeatureIcon name={group.icon} size={20} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-extrabold text-brand-fg sm:text-lg">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {group.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
