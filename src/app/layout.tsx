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
    <CustomProvider>
      <html lang="en">
        <body>
          <Header />
          <main className="">
            {children}
          </main>
          <div className="">
            <Footer />
          </div>
        </body>
      </html>
    </CustomProvider>
  );
}
