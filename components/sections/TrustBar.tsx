import { FeatureIcon } from "@/components/viz/FeatureIcon";
import type { IconName } from "@/lib/content/types";

const metrics: {
  icon: IconName;
  value: string;
  label: string;
}[] = [
  {
    icon: "Package",
    value: "نوار پایدار",
    label: "همیشه در بازار ایران",
  },
  {
    icon: "Flask",
    value: "تأیید مرجع",
    label: "آزمایشگاه و مراکز پزشکی",
  },
  {
    icon: "Timer",
    value: "۹ ثانیه",
    label: "از نمونه تا عدد",
  },
  {
    icon: "Medal",
    value: "مادام‌العمر",
    label: "گارانتی دستگاه",
  },
];

export function TrustBar() {
  return (
    <section aria-label="شاخص‌های محصول" className="px-4 py-4 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-brand-fg px-4 py-3.5 sm:px-5">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 lg:grid-cols-4 lg:gap-3">
          {metrics.map((item) => (
            <li key={item.value} className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-brand-secondary">
                <FeatureIcon name={item.icon} size={16} />
              </span>
              <span className="min-w-0 text-start">
                <span className="block text-sm font-extrabold text-white">
                  {item.value}
                </span>
                <span className="block text-[11px] leading-4 text-white/70">
                  {item.label}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
