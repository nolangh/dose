import React from "react";
import Link from "next/link";
import styles from "./Login.module.scss";

export default function Login() {
	return (
		<main className={styles.main_container}>
			<p>Login page</p>
			<button className={styles.test}>
				<Link href="/">Home</Link>
			</button>
		</main>
	);
}
