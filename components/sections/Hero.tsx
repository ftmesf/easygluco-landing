import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/banner-web.webp"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.22] sm:opacity-[0.28]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/92 to-brand-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(0,125,197,0.12),transparent_55%)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-16 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:gap-14">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold leading-[1.25] text-brand-fg sm:text-4xl lg:text-[2.75rem]">
            ایزی‌گلوکو؛ پایش قند خون با نوار همیشه در دسترس
          </h1>

          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            پایش منظم و ادامه‌دار قند خون — نوار که تمام نشود، عدد از روی
            نمایشگر به پرونده می‌رسد.
          </p>

          <div className="mt-8">
            <Button asChild size="lg" className="min-h-11 cursor-pointer">
              <a href="#buy">خرید از فروشگاه سیناکر</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-accent/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-border/60 bg-white shadow-[0_24px_60px_-20px_rgba(0,125,197,0.35)]">
            <Image
              src="/images/product-1.webp"
              alt="دستگاه و نوار تست قند خون ایزی‌گلوکو"
              width={900}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
