import { faqs } from "@/lib/content/product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section id="faq" className="section-alt py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-fg sm:text-3xl">
            سوالاتی که قبل از خرید پرسیده می‌شوند
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            از تأمین نوار و گارانتی تا کالیبراسیون و مدیریت نتایج در اپ — پاسخ‌ها
            کوتاه و شفاف.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-brand-border/70 bg-white px-5 shadow-sm sm:px-7">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
