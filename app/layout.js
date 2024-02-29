// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team Innoreva",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/innoreva-dark-favicon.svg" />
      <body 
      // className={inter.className} 
      suppressHydrationWarning>{children}</body>
    </html>
  );
}
