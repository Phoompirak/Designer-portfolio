import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

const mitr = Mitr({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designer portfolio",
  description: "รวมผลงานตัดต่อคลิปและตัดรูป, ทำปกคลิป, ดีไซน์โลโก้ต่างๆ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mitr.className}`}>
      <body className="">
        {children}
      </body>
    </html>
  );
}

