import Image from "next/image";
import { clarifyPoints } from "@/lib/content/product";
import { Reveal } from "@/components/Reveal";
import { toneClasses } from "@/components/viz/tone";

export function WhatIsEasyGluco() {
  return (
    <section id="what-is" className="scroll-mt-28 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-wide text-brand-primary">
            ایزی‌گلوکو چیست؟
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            دستگاه تست قند خون، با نوار پایدار و ثبت در پرونده
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            سه چیز این محصول را برای پایش روزانه کامل می‌کند: نوار در دسترس،
            نتیجه سریع، و گارانتی مادام‌العمر.
          </p>
        </div>

        <Reveal className="mt-12 grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <figure className="relative overflow-hidden rounded-[1.75rem] bg-brand-bg-alt">
            <Image
              src="/images/easygluco-meter.png"
              alt="دستگاه تست قند خون ایزی‌گلوکو"
              width={720}
              height={720}
              className="mx-auto h-full w-full max-w-sm object-contain p-6 sm:max-w-md sm:p-8"
            />
          </figure>

          <ol className="flex flex-col justify-center divide-y divide-brand-border/70">
            {clarifyPoints.map((point) => {
              const tone = toneClasses[point.tone];
              return (
                <li key={point.title} data-reveal className="py-7 first:pt-0 last:pb-0">
                  <p className={`text-2xl font-extrabold leading-none tracking-tight sm:text-3xl ${tone.footer}`}>
                    {point.figure}
                  </p>
                  <h3 className="mt-3 text-lg font-extrabold text-brand-fg">
                    {point.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {point.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
