import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Metadata for SEO
export const metadata: Metadata = {
  title: "Ujjwal Paswan - Software Engineer",
  description:
    "Ujjwal Paswan, a software engineer with over 2 years of experience in building scalable web applications and backend services. Proficient in Node.js, React, AWS, and more, with expertise in performance optimization and modern tech solutions. Passionate about contributing to innovative software projects.",
  openGraph: {
    title: "Ujjwal Paswan - Software Engineer",
    description:
      "Learn more about Ujjwal Paswan, a skilled software engineer specializing in web applications, backend services, and performance optimization.",
    url: "https://ujjwalpaswan.me", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://www.ujjwalpaswan.me/myimage.png", // Replace with your OG image
        alt: "Ujjwal Paswan - Software Engineer",
        width: 520,
        height: 700,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ujjwal Paswan - Software Engineer",
    description:
      "Discover Ujjwal Paswan's portfolio showcasing expertise in scalable web development and modern software solutions.",
    images: ["https://www.ujjwalpaswan.me/myimage.png"], // Replace with your image
  },
  robots: "index, follow",
  keywords: [
    "Ujjwal Paswan",
    "Software Engineer",
    "Web Developer",
    "Node.js Developer",
    "React Developer",
    "Ujjwal",
    "Paswan",
    "Uzwal",
    "Ujjwal Kumar",
    "Paswan Ujjwal",
    "Software Developer",
    "AWS",
    "OpenAI",
    "CI/CD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ujjwalpaswan.me" /> {/* Replace with your domain */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
