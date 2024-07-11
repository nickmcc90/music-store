import { Hind } from "next/font/google";
import "./globals.css";
import { COLORS, SHADOWS } from '../constants/page'
import Link from 'next/link'
// import Button from './button'

const hind = Hind({ 
  subsets: ["latin"],
  weight: '400'
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </head>
      <body className={'flex flex-col min-h-screen bg-white ' + hind.className}>
        {/* <div className='min-h-screen flex flex-col bg-[#3b3b58] text-white items-center justify-center gap-[50px] relative'>
          <div className="flex flex-col items-center gap-3">
            <div className='text-6xl uppercase font-bold'>
              Nick's notes
            </div>
            <div className="text-xl font-thin">
              Where the best chord progressions and piano renditions spawn.
            </div>
          </div>
          <Button />
          <i className="fa-solid fa-music text-white text-3xl md:text-5xl absolute top-30 left-[500px]"></i>
          <i className="fa-solid fa-music text-white text-3xl md:text-5xl absolute top-30 right-[500px]"></i>
        </div> */}
        <header className='sticky top-0 left-0 right-0 bg-[#3b3b58] h-[120px] flex justify-between items-center py-6 px-14
        text-xl sm:text-2xl md:text-3xl z-50'>
          <Link href={'/'}>
            <div id='start' className='text-white flex justify-center items-center gap-6 hover:scale-110 cursor-pointer'>
              <i className="fa-solid fa-music text-white text-3xl md:text-5xl"></i>
              <h1 className="text-white">Nick's Notes</h1>
            </div>
          </Link>
          <div className="text-white flex justify-center items-center gap-10">
            <p className="cursor-pointer hover:text-gray-400">About</p>
            <p className="cursor-pointer hover:text-gray-400">Contact</p>
            <i className="fa-solid fa-cart-shopping text-white text-3xl md:text-5xl cursor-pointer hover:text-gray-400"></i>
          </div>
        </header>
        <div className="flex-1 p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
