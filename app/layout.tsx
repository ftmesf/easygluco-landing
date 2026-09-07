import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AgentationToolbar } from "@/components/agentation-toolbar";

const vazirmatn = Vazirmatn({
  variable: "--font-sans",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ایزی‌گلوکو | دستگاه و نوار تست قند خون — سیناکر",
  description:
    "ایزی‌گلوکو پایش قند خون را با نوار همیشه در دسترس، دقت تأییدشده و اتصال به اپ سیناکر ساده و قابل‌ادامه می‌کند؛ تحت لیسانس Osung Healthcare با ۲۰ سال حضور در ایران.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "سیناکر",
  legalName: "شرکت راهکار هوشمند سینا",
  url: "https://sinacare.ir/",
  telephone: "021-91002002",
  email: "support@sinacare.ir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === "development" ? <AgentationToolbar /> : null}
      </body>
    </html>
  );
}
