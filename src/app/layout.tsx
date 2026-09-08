import type { Metadata } from "next";
import type { Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = "https://bashdemy.com";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Bazhena Dementyeva (Maria Demy) - Senior Software Engineer Sydney | React, Node.js, GraphQL, React Native",
    template: "%s | Bazhena Dementyeva (Maria Demy) - Senior Software Engineer",
  },
  description:
    "Bazhena Dementyeva (Maria Dementyeva, Maria Demy, bashdemy) is a senior software engineer in Sydney, Australia with experience across React, Next.js, Node.js, GraphQL, React Native, Java Spring Boot, AWS, microservices, and product delivery.",
  keywords: [
    "Bazhena Dementyeva",
    "Maria Dementyeva",
    "Maria Demy",
    "bashdemy",
    "senior software engineer",
    "senior software engineer Sydney",
    "senior software engineer Australia",
    "software engineer",
    "backend developer",
    "cloud architect",
    "Java developer",
    "Java",
    "TypeScript",
    "TypeScript developer",
    "Python developer",
    "React developer",
    "React",
    "React Native",
    "React Native developer",
    "GraphQL",
    "GraphQL developer",
    "Next.js",
    "NextJS",
    "NextJS developer",
    "Spring Boot",
    "Spring Boot developer",
    "AWS",
    "AWS developer",
    "AWS engineer",
    "GCP",
    "Google Cloud Platform",
    "Sydney software engineer",
    "microservices",
    "privacy-first engineering",
    "scalable systems",
    "workflow automation",
    "cloud infrastructure",
    "women in tech",
    "full-stack developer",
    "software architecture",
    "agile development",
    "DevOps",
    "CI/CD",
    "API development",
    "database design",
    "system optimization",
  ],
  authors: [{ name: "Bazhena Dementyeva", url: "https://bashdemy.com" }],
  creator: "Bazhena Dementyeva",
  publisher: "Bazhena Dementyeva",
  applicationName: "Bazhena Dementyeva Portfolio",
  category: "Technology",
  classification: "Portfolio Website",
  openGraph: {
    type: "website",
    title:
      "Bazhena Dementyeva - Senior Software Engineer Sydney | React, Node.js, GraphQL, React Native",
    description:
      "Senior software engineer in Sydney, Australia with experience across React, Next.js, Node.js, GraphQL, React Native, Java Spring Boot, AWS, and microservices.",
    url: "/",
    siteName: "Bazhena Dementyeva Portfolio",
    locale: "en_AU",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bazhena Dementyeva - Senior Software Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bazhena Dementyeva - Senior Software Engineer Sydney | React, Node.js, GraphQL, React Native",
    description:
      "Senior software engineer in Sydney, Australia with experience across React, Next.js, Node.js, GraphQL, React Native, Java Spring Boot, AWS, and microservices.",
    creator: "@bashdemy",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Bazhena Dementyeva - Senior Software Engineer",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: 'add-google-site-verification-when-ready',
  // },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbf7f5",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bazhena Dementyeva",
  alternateName: ["Maria Dementyeva", "Maria Demy", "bashdemy"],
  jobTitle: "Senior Software Engineer",
  description:
    "Senior software engineer specializing in full-stack product delivery, backend systems, cloud infrastructure, and microservices.",
  url: siteUrl,
  image: {
    "@type": "ImageObject",
    url: `${siteUrl}/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  knowsAbout: [
    "Software Engineering",
    "Senior Software Engineering",
    "Backend Development",
    "Cloud Architecture",
    "Java Programming",
    "Java",
    "TypeScript",
    "TypeScript Programming",
    "Python Programming",
    "React Development",
    "React",
    "React Native",
    "GraphQL",
    "Next.js",
    "NextJS",
    "Spring Boot",
    "AWS",
    "Amazon Web Services",
    "GCP",
    "Google Cloud Platform",
    "Microservices",
    "DevOps",
    "API Development",
    "Database Design",
    "System Architecture",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    occupationLocation: {
      "@type": "Place",
      name: "Sydney, Australia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sydney",
        addressCountry: "Australia",
      },
    },
    skills: [
      "Java",
      "TypeScript",
      "Python",
      "React",
      "React Native",
      "GraphQL",
      "Next.js",
      "NextJS",
      "Spring Boot",
      "AWS",
      "GCP",
      "Docker",
      "Microservices",
      "API Development",
      "Cloud Architecture",
      "Database Design",
      "DevOps",
      "CI/CD",
    ],
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Wollongong",
      url: "https://www.uow.edu.au/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "UNSW Sydney",
      url: "https://www.unsw.edu.au/",
    },
  ],
  gender: "Female",
  workExample: [
    {
      "@type": "SoftwareApplication",
      name: "Workflow86",
      description: "Workflow automation platform for business operations",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
    },
    {
      "@type": "WebSite",
      name: "Sonia Kania Photography",
      description: "Photography portfolio and booking website",
      url: "https://soniakania.com",
    },
    {
      "@type": "SoftwareApplication",
      name: "Yes Help Network",
      description:
        "Youth-led platform for early intervention in Domestic & Family Violence",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "Web",
    },
  ],
  sameAs: [
    "https://github.com/bashdemy",
    "https://linkedin.com/in/bazhena-dementyeva-0b7b17159",
    "https://bashdemy.substack.com",
    "https://instagram.com/bashdemy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredDataScript = `application/ld+json`;

  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <script type={structuredDataScript} suppressHydrationWarning={true}>
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body className={`${plusJakartaSans.variable} bg-theme-background`}>
        {children}
      </body>
    </html>
  );
}
