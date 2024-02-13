import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/app/components/ThemeProvider";
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
				<ThemeProvider attribute="class">{children}</ThemeProvider>
			</body>
		</html>
	);
}
