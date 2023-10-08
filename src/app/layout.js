import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
	title: "Dose home page",
	description: "Home",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={robotoMono.className}>{children}</body>
		</html>
	);
}
