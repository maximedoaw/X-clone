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
          <div className='flex justify-between max-w-6xl mx-auto'>
            <div className='hidden sm:inline border-r h-screen sticky top-0'>
              <SideBar />
            </div>
            <div >{children}</div>
            <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]'>
              <div className="sticky top-0 bg-white py-2">
                <input type="text" placeholder="Search"
                className="bg-gray-200 border border-gray-200 text-sm w-full
                px-4 py-2 rounded-3xl"
                />
              </div>
              <News />
            </div>
          </div>
        </body>
    </html>
  );
}
