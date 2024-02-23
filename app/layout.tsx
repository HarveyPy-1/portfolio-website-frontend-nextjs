import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
// import { ThemeProvider } from "@/app/components/ThemeProvider";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Harvey Ezihe | Portfolio",
	description: "Personal portfolio website for Harvey Ezihe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={dm_sans.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
