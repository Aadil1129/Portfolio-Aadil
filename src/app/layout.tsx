import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aadil Ali - React.js Developer",
  description:
    "Professional React.js Developer from Delhi, India. 2+ years of experience in React.js, Next.js, Redux, and modern web technologies.",
  keywords: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Frontend Developer",
    "Web Developer",
    "Delhi",
    "India",
  ],
  authors: [{ name: "Aadil Ali" }],
  creator: "Aadil Ali",
  openGraph: {
    title: "Aadil Ali - React.js Developer",
    description: "Professional React.js Developer from Delhi, India",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadil Ali - React.js Developer",
    description: "Professional React.js Developer from Delhi, India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
