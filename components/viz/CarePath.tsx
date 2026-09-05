import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { IconName } from "@/lib/content/types";

const steps: { icon: IconName; label: string; hint: string }[] = [
  { icon: "Package", label: "نوار", hint: "موجود در بازار" },
  { icon: "Drop", label: "نمونه‌گیری", hint: "۰٫۵ میکرولیتر" },
  { icon: "Timer", label: "نتیجه", hint: "۹ ثانیه" },
  { icon: "DeviceMobile", label: "پرونده", hint: "ثبت در اپ" },
];

export function CarePath() {
  return (
    <ol className="overflow-hidden rounded-2xl border border-brand-border/80 bg-white sm:flex">
      {steps.map((step, index) => (
        <li
          key={step.label}
          className="relative flex flex-1 items-center gap-3 border-b border-brand-border/70 px-4 py-3.5 last:border-b-0 sm:border-b-0 sm:border-s sm:px-5 sm:first:border-s-0"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-bg-alt text-brand-primary">
            <FeatureIcon name={step.icon} size={18} />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-bold text-brand-primary/80">
              قدم {index + 1}
            </span>
            <span className="block text-sm font-bold text-brand-fg">
              {step.label}
            </span>
            <span className="block text-xs text-muted-foreground">
              {step.hint}
            </span>
          </span>
        </li>
      ))}
    </ol>
  );
}
