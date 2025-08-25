import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-5xl text-center p-8 bg-indigo-400 text-white">Welcome to a Dev Card Maker!</h1>
    </div>
  );
}
