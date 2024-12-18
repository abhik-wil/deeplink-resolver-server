import type { Metadata } from "next";
import localFont from "next/font/local";
import { DeepLinkBackgroundContainer } from "../components";
import { RootProvider } from "../providers";

const geistSans = localFont({
	src: "../fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "ONDC Deep Link Generator",
	description: "Generate Deep Links",
};

export default function DeepLinkLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable}`}
				style={{ margin: 0 }}
			>
				<RootProvider>
					<DeepLinkBackgroundContainer>{children}</DeepLinkBackgroundContainer>
				</RootProvider>
			</body>
		</html>
	);
}