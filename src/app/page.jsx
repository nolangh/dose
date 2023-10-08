import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<div className="container-fluid">
			<main>
				<p>Home Page</p>

				{/*Button section */}
				<a className={styles.a_tag}>
					<Link href="/signup">Sign Up</Link>
				</a>
				<div className="container-fluid a_tag_container">
					<a className={styles.a_tag}>
						<Link href="./login/">Login</Link>
					</a>
				</div>
				{/*End Button sections*/}
			</main>
		</div>
	);
}
