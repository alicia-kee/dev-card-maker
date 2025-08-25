// import styles from "./page.module.css";
import Link from "next/link";
import "./globals.css";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative items-center overflow-hidden">
      <main className="flex-grow flex flex-col items-center justify-center">

        {/* Background layers */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className="absolute bottom-0 left-[-40%] right-0 top-[-10%] h-[1300px] w-[1300px] rounded-full -z-10 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-40%] top-[-10%] h-[1300px] w-[1300px] rounded-full -z-10 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        <div className="mb-10 rounded-lg px-8 flex flex-col items-center justify-center">
          <div className={`text-5xl md:text-7xl text-center p-8 ${spaceMono.className} font-bold leading-snug text-violet-200 text-glow max-w-4xl`}>Welcome to a Dev Card Maker</div>
          <div className="text-center text-md md:text-xl font-mono mb-3 pt-2 p-5 text-violet-200 text-glow max-w-4xl">Create your personalized developer business card in 2 simple steps.</div>
        </div>


        <Link href="/builder">
          <button className="bg-gradient-to-r from-purple-900 via-purple to-fuchsia-900 text-violet-200 text-xl font-mono font-semibold px-20 py-4 rounded-lg shadow-lg hover:bg-stone-800 hover:bg-none hover:scale-105 transition-transform cursor-pointer border-2 border-violet-200">
            Start
          </button>
        </Link>
      </main>
     
      <footer className="font-mono text-purple-600 text-sm py-4 text-center">
        &copy; {new Date().getFullYear()} Alicia Kee
      </footer>
    </div>
  );
}


// "flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-fuchsia-900 via-indigo-950 to-black"