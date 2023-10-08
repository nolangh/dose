import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<main>
			<h1 className={styles.title}>DOSE</h1>
			<div>
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
				</ul>
			</div>
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
