import Image from "next/image";
import { specs } from "@/lib/content/product";
import { Badge } from "@/components/ui/badge";
import { Scales } from "@phosphor-icons/react/dist/ssr";

export function Specs() {
  return (
    <section id="specs" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Badge
            variant="outline"
            className="border-brand-border bg-brand-bg-alt text-brand-primary"
          >
            <Scales size={14} weight="bold" />
            مشخصات فنی
          </Badge>
          <h2 className="mt-3 text-2xl font-extrabold text-brand-fg sm:text-3xl">
            مشخصات فنی دستگاه ایزی‌گلوکو چیست؟
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">
            مشخصات فنی ایزی‌گلوکو شامل حجم نمونه، زمان نتیجه، حافظه، باتری و
            گارانتی مادام‌العمر است.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-brand-border/70 bg-white shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-brand-bg-alt/50" : "bg-white"}
                  >
                    <th className="px-4 py-3.5 text-start font-semibold text-brand-fg/80 sm:px-5">
                      {row.label}
                    </th>
                    <td className="px-4 py-3.5 text-end font-bold text-brand-fg sm:px-5">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-secondary/20 to-brand-primary/10 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-brand-border/70 bg-white shadow-xl">
            <Image
              src="/images/easygluco-box.jpg"
              alt="بسته‌بندی نوار تست قند خون ایزی‌گلوکو"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
