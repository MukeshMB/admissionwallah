import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admission Wallah | India’s Top College Admission & Counseling Platform 🎓",
  description:
    "Get into your dream college with Admission Wallah. Trusted by 10,000+ students for MBBS, B.Tech, MBA, BBA, Law, BCA, Nursing & more. Book your free expert counseling session today!",
  keywords: [
    "college admission India",
    "admission counseling India",
    "top college admission",
    "best admission consultant",
    "career counseling services",
    "India college guidance",
    "admission wallah",
    "free admission counseling",
    "college application support India",

    "MBBS admission India",
    "NEET counseling",
    "private MBBS colleges admission",
    "government medical college admission",
    "AIIMS admission help",
    "medical entrance counseling",
    "MBBS application support",

    "BTech admission India",
    "JEE Main counseling",
    "JEE Advanced guidance",
    "top engineering colleges admission",
    "private engineering college admission",
    "NIT admission help",
    "VIT admission",
    "SRM admission",

    "MBA admission India",
    "PGDM counseling",
    "CAT exam preparation",
    "IIM admission help",
    "private MBA college admission",
    "MBA entrance coaching",

    "BBA admission India",
    "DU BBA admission",
    "business administration college admission",
    "BBA career guidance",

    "BCA admission India",
    "computer application college admission",
    "private BCA college counseling",

    "law college admission",
    "CLAT counseling",
    "LLB admission India",
    "DU law admission help",
    "private law college counseling",

    "BSc nursing admission India",
    "nursing entrance exam help",
    "private nursing colleges admission",
    "government nursing college counseling",

    "B.Ed admission India",
    "teaching college admission",
    "B.Ed entrance exam support",

    "B.Pharma admission India",
    "D.Pharma admission",
    "pharmacy college counseling",

    "MCA admission India",
    "NIMCET preparation",
    "top MCA colleges India",

    "M.Tech admission India",
    "GATE counseling",
    "NIT MTech guidance",

    "BSc agriculture admission",
    "MSc agriculture admission",
    "agriculture college counseling",

    "management course admission",
    "hotel management admission India",
    "HM career guidance",

    "polytechnic admission India",
    "diploma engineering counseling",

    "NEET coaching",
    "JEE Main coaching",
    "JEE Advanced preparation",
    "12th board exam help"
  ],
  metadataBase: new URL("https://admissionwallah.vercel.app"),
  openGraph: {
    title: "Admission Wallah | Secure Your Seat in India’s Top Colleges 🎓",
    description:
      "Admission Wallah guides 10,000+ students to top MBBS, B.Tech, MBA, BBA, and other programs. 95% success rate. Book a free consultation now!",
    url: "https://admissionwallah.vercel.app",
    siteName: "Admission Wallah",
    images: [
      {
        url: "logo.png", // 🔁 Replace with your actual image path
        width: 1200,
        height: 630,
        alt: "Admission Wallah - Your Dream College Partner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admission Wallah 🎓 | Get Admission into India's Top Colleges",
    description:
      "Personalized counseling for MBBS, B.Tech, MBA, Law, and more. 500+ top colleges. Start your journey with Admission Wallah!",
    images: ["logo.png"], // 🔁 Replace with your actual Twitter card image path
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
