import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import News from "./components/News";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X-clone",
  description: "A clone of X with Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="hidden sm:inline border-r h-screen">
            <SideBar />
          </div>
          <div className="sticky">{children}</div>
          <div>
            <News />     
          </div>
        </div>
      </body>
    </html>
  );
}
