"use client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

{
	/*Styled componenets */
}
const Main = styled.main`
	background-color: darkolivegreen;
`;

export default function Signup() {
	return (
		<div>
			<Main className="container-fluid">
				<button>
					<Link href="/">Home</Link>
				</button>
				Signup
			</Main>
		</div>
	);
}
