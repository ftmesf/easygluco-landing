import { painPoints } from "@/lib/content/product";
import { PainPointCard } from "@/components/viz/PainPointCard";
import { Reveal } from "@/components/Reveal";

export function PainPoints() {
  return (
    <section id="why" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چرا پایش قند خون معمولاً وسط راه می‌ماند؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            نوار کمیاب، خون‌گیری سخت، عدد بدون پرونده — همین‌ها تست روزانه را
            فرسایشی می‌کنند.
          </p>
        </div>

        <Reveal className="mt-12 grid gap-6 sm:grid-cols-2">
          {painPoints.map((item) => (
            <PainPointCard key={item.title} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
