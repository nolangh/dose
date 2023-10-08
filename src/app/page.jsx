import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<div>
			<main>
				<h1>DOSE</h1>
				<Link href="/signup" className={styles.links}>
					Sign Up
				</Link>
				<Link href="./login/" className={styles.links}>
					Login
				</Link>
				{/*End Button sections*/}
			</main>
		</div>
	);
}
