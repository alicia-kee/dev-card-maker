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
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-fuchsia-900 via-indigo-950 to-black">
      <div className="bg-indigo-950 mb-10 rounded-lg px-8">
        <div className={`text-5xl text-center p-8 ${spaceMono.className} font-bold text-violet-200 text-glow`}>Welcome to a Dev Card Maker!</div>
        <div className="text-center text-2xl font-mono mb-8 pt-2 p-5 text-violet-200 text-glow">Create your personalized developer business card in 2 simple steps.</div>
      </div>


      <Link href="./builder">
        <button className="bg-violet-200 text-violet-600 text-xl font-mono font-semibold px-25 py-4 rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
          Start
        </button>
      </Link>

      <footer>
        <div className="font-mono text-purple-600 mt-50 text-sm">&copy; {new Date().getFullYear()} Alicia Kee</div>
      </footer>
    </div>
  );
}
