import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LogoIntro from "../components/LogoIntro";
import CustomCursor from "../components/CustomCursor";

const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const transcity = localFont({
  src: "./fonts/Transcity.otf",
  variable: "--font-heading",
});

export const metadata = {
  title: "Topaz Hospitality | Solutions",
  description: "A full-fledged hospitality solutions firm providing end to end solutions in conceptualisation, facility planning, and operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${transcity.variable} antialiased bg-background text-white`}>
        <div className="noise" aria-hidden="true" />
        <CustomCursor />
        <LogoIntro />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
