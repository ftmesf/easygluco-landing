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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "development" ? <AgentationToolbar /> : null}
      </body>
    </html>
  );
}
