import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Best Health Insurance NZ | Compare & Find the Best Cover | BestHealthInsurance.co.nz",
  description: "Compare the best health insurance in New Zealand. Southern Cross, nib, AIA, Accuro & Partners Life compared by licensed advisers. Get a quote within 24 hours.",
  keywords: "best health insurance NZ, health insurance New Zealand, compare health insurance, Southern Cross, nib, AIA, Accuro, Partners Life",
  openGraph: {
    title: "Best Health Insurance NZ | Compare & Find the Best Cover",
    description: "Compare the best health insurance in New Zealand. Expert advice from licensed NZ advisers.",
    url: "https://besthealthinsurance.co.nz",
    siteName: "BestHealthInsurance.co.nz",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
