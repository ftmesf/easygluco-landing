import { clarifyPoints } from "@/lib/content/product";
import { TonedFeatureCard } from "@/components/viz/TonedFeatureCard";
import { Reveal } from "@/components/Reveal";

export function WhatIsEasyGluco() {
  return (
    <section id="what-is" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            ایزی‌گلوکو یعنی چه؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            دستگاه تست قند خون با نوار در دسترس، نتیجه سریع، و گارانتی
            مادام‌العمر.
          </p>
        </div>

        <Reveal className="mt-10 grid gap-4 lg:grid-cols-3">
          {clarifyPoints.map((point) => (
            <TonedFeatureCard key={point.title} item={point} tone={point.tone} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
