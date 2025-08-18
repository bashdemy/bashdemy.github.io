import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://bashdemy.com'),
  title: {
    default:
      'Bazhena Dementyeva (Maria Demy) - Senior Software Engineer | Backend, Cloud & AI Solutions',
    template:
      '%s | Bazhena Dementyeva (Maria Demy) - Software Engineer',
  },
  description:
    'Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) - Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions. Expert in Java, Python, React with focus on privacy-first engineering and scalable systems.',
  keywords: [
    'Bazhena Dementyeva',
    'Maria Dementyeva',
    'Maria Demy',
    'bashdemy',
    'software engineer',
    'backend developer',
    'cloud architect',
    'AI engineer',
    'Java developer',
    'Python developer',
    'React developer',
    'privacy-first engineering',
    'scalable systems',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    images: [{ url: '/profile-picture.JPG' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/profile-picture.JPG'],
  },
  alternates: { canonical: '/' },
  icons: {
    icon: '/flower-icon.svg',
    shortcut: '/flower-icon.svg',
    apple: '/profile-picture.JPG',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-theme-background">{children}</body>
    </html>
  );
}
