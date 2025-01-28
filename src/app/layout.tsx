import "../theme/globals.scss";
import type { Metadata } from "next";
import Providers from "@/providers/Providers";
import HeaderNavbar from "@/components/Layout/HeaderNavbar/HeaderNavbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <HeaderNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
