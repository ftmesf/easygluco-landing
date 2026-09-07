import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PhoneMockup } from "@/components/viz/PhoneMockup";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, Scan } from "@phosphor-icons/react/dist/ssr";

const appSteps = [
  {
    step: "۱",
    src: "/images/app/ocr-select.png",
    alt: "انتخاب دستگاه ایزی‌گلوکو در تب اسکن اپ",
    title: "ایزی‌گلوکو را انتخاب کنید",
    description: "در تب اسکن، دستگاه را مشخص کنید تا عدد همان نمایشگر خوانده شود.",
    titleClass: "bg-brand-primary/12 text-brand-primary",
  },
  {
    step: "۲",
    src: "/images/app/ocr-scan.jpg",
    alt: "اسکن نمایشگر ایزی‌گلوکو داخل کادر سبز",
    title: "نمایشگر را اسکن کنید",
    description: "صفحه دستگاه را در کادر سبز بگذارید؛ عدد بدون تایپ ثبت می‌شود.",
    titleClass: "bg-brand-secondary/15 text-[#0b7a6c]",
  },
  {
    step: "۳",
    src: "/images/app/glucose-history.png",
    alt: "خلاصه سنجه‌ها و تاریخچه قند خون",
    title: "روند را ببینید",
    description: "میانگین، وضعیت هر سنجش و مسیر ارسال برای پزشک در یک پرونده جمع می‌شود.",
    titleClass: "bg-brand-accent/15 text-brand-accent-strong",
  },
];

export function AppConnect() {
  return (
    <section id="app" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-brand-border bg-white text-brand-primary"
          >
            <Scan size={14} weight="bold" />
            ثبت در اپ — سه قدم
          </Badge>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            چگونه عدد ایزی‌گلوکو وارد اپ سیناکر می‌شود؟
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            در اپ سیناکر دستگاه ایزی‌گلوکو را انتخاب می‌کنید، نمایشگر را اسکن
            می‌کنید و عدد بدون تایپ دستی در پرونده قند خون ثبت می‌شود.
          </p>
        </div>

        <Reveal className="relative mt-14">
          <ol className="grid gap-10 pt-4 sm:grid-cols-3 sm:gap-8">
            {appSteps.map((item) => (
              <li key={item.step} className="relative flex flex-col items-center" data-reveal>
                <PhoneMockup
                  src={item.src}
                  alt={item.alt}
                  step={item.step}
                  className="relative z-10"
                />
                <p
                  className={`mt-6 w-full rounded-2xl px-3 py-2.5 text-center text-base font-extrabold sm:text-lg ${item.titleClass}`}
                >
                  {item.title}
                </p>
                <p className="mt-3 max-w-[16rem] text-center text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Button asChild size="lg" className="min-h-11 gap-2">
            <a
              href="https://sinacare.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              مسیر ثبت در اپ را ببینید
              <ArrowLeft size={18} weight="bold" aria-hidden />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
