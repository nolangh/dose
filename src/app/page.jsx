import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>DOSE</h1>
      </div>
      <div className={styles.heroSection}></div>
      <div className={styles.button_cont}>
        <Link href="/signup" className={styles.links}>
          Sign Up
        </Link>
        <Link href="./login/" className={styles.links}>
          Login
        </Link>
        {/*End Button sections*/}
      </div>
    </main>
  );
}
