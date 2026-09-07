import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PainPoints } from "@/components/sections/PainPoints";
import { WhatIsEasyGluco } from "@/components/sections/WhatIsEasyGluco";
import { Specs } from "@/components/sections/Specs";
import { Features } from "@/components/sections/Features";
import { AppConnect } from "@/components/sections/AppConnect";
import { Faq } from "@/components/sections/Faq";
import { CtaBar } from "@/components/sections/CtaBar";
import { specs } from "@/lib/content/product";

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "ایزی‌گلوکو (EasyGluco)",
  description:
    "ایزی‌گلوکو پایش قند خون را با نوار همیشه در دسترس، دقت تأییدشده و اتصال به اپ سیناکر ساده و قابل‌ادامه می‌کند؛ تحت لیسانس Osung Healthcare با ۲۰ سال حضور در ایران.",
  brand: { "@type": "Brand", name: "سیناکر" },
  manufacturer: { "@type": "Organization", name: "Osung Healthcare" },
  image: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/images/product-1.webp`,
  additionalProperty: specs.map((row) => ({
    "@type": "PropertyValue",
    name: row.label,
    value: row.value,
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        رفتن به محتوای اصلی
      </a>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <TrustBar />
        <PainPoints />
        <WhatIsEasyGluco />
        <Specs />
        <Features />
        <AppConnect />
        <Faq />
        <CtaBar />
      </main>
      <Footer />
    </>
  );
}
