import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer";
import CustomProvider from "@/customProvider/provider";

export const metadata: Metadata = {
  title: "Yogesh Portfolio",
  description: "this is my portfolio where i represent my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <CustomProvider>
          <Header />
          <main className="overflow-x-hidden">
            {children}
          </main>
          <div className="overflow-x-hidden">
            <Footer />
          </div>
        </CustomProvider>
      </body>
    </html>
  );
}
