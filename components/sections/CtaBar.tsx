import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Storefront } from "@phosphor-icons/react/dist/ssr";

const perks = [
  "نوار همیشه در بازار ایران",
  "گارانتی مادام‌العمر دستگاه",
  "نتیجه در ۹ ثانیه",
];

export function CtaBar() {
  return (
    <section id="buy" className="bg-brand-bg py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[2rem] border border-brand-border/70 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[240px] bg-brand-bg-alt lg:min-h-full">
              <Image
                src="/images/product-1.webp"
                alt="نوار تست قند خون ایزی‌گلوکو"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14">
              <p className="text-sm font-bold text-brand-accent">
                خرید دستگاه و نوار
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-snug text-brand-fg sm:text-3xl">
                ایزی‌گلوکو را با نوار پایدار تهیه کنید
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground">
                دستگاه و نوار را از فروشگاه سفارش دهید؛ اگر برای انتخاب بسته
                راهنمایی می‌خواهید، با پشتیبانی تماس بگیرید.
              </p>

              <ul className="mt-6 space-y-2.5">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-2.5 text-base font-medium text-brand-fg"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="shrink-0 text-brand-accent"
                    />
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="min-h-11">
                  <a
                    href="https://sinacare.ir/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Storefront size={18} weight="bold" />
                    خرید از فروشگاه
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-11"
                >
                  <a href="tel:02191002002">
                    <Phone size={18} weight="bold" />
                    ۰۲۱-۹۱۰۰۲۰۰۲
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
