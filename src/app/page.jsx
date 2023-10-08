import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<div>
			<main>
				<p>Home Page</p>
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
