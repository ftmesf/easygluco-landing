const metrics = [
  { figure: "۹ ثانیه", label: "زمان نتیجه" },
  { figure: "۰.۵", label: "میکرولیتر نمونه" },
  { figure: "مادام‌العمر", label: "گارانتی دستگاه" },
  { figure: "۲۰ سال", label: "حضور در ایران" },
];

export function TrustBar() {
  return (
    <section aria-label="شاخص‌های محصول" className="bg-brand-bg px-4 pb-10 sm:px-6 sm:pb-14">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-[1.5rem] border border-brand-border/70 bg-white lg:grid-cols-4">
        {metrics.map((item, index) => (
          <li
            key={item.label}
            className={`flex flex-col items-center justify-center gap-2 px-4 py-8 text-center sm:px-6 sm:py-10 ${
              index % 2 === 1 ? "border-s border-brand-border/60" : ""
            } ${index >= 2 ? "border-t border-brand-border/60 lg:border-t-0" : ""} ${
              index > 0 ? "lg:border-s lg:border-brand-border/60" : ""
            }`}
          >
            <span className="text-[1.55rem] font-extrabold leading-none tracking-tight text-brand-primary sm:text-[2rem]">
              {item.figure}
            </span>
            <span className="text-sm leading-6 text-muted-foreground">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
