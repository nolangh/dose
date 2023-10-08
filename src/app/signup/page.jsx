"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Signup.module.scss";

export default function Signup() {
	return (
		<div>
			<main className={styles.main}>
				<button>
					<Link href="/">Home</Link>
				</button>
				Signup
			</main>
		</div>
	);
}
