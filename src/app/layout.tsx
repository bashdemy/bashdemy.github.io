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
    'senior software engineer',
    'backend developer',
    'cloud architect',
    'AI engineer',
    'machine learning engineer',
    'Java developer',
    'Python developer',
    'React developer',
    'NextJS developer',
    'Spring Boot',
    'AWS',
    'microservices',
    'privacy-first engineering',
    'scalable systems',
    'workflow automation',
    'AI integration',
    'cloud infrastructure',
    'women in tech',
    'full-stack developer',
    'software architecture',
    'agile development',
    'DevOps',
    'CI/CD',
    'API development',
    'database design',
    'system optimization',
  ],
  authors: [{ name: 'Bazhena Dementyeva', url: 'https://bashdemy.com' }],
  creator: 'Bazhena Dementyeva',
  publisher: 'Bazhena Dementyeva',
  applicationName: 'Bazhena Dementyeva Portfolio',
  category: 'Technology',
  classification: 'Portfolio Website',
  openGraph: {
    type: 'website',
    title: 'Bazhena Dementyeva - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions.',
    url: '/',
    siteName: 'Bazhena Dementyeva Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/profile-picture.JPG',
        width: 1200,
        height: 1200,
        alt: 'Bazhena Dementyeva - Senior Software Engineer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bazhena Dementyeva - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions.',
    creator: '@bashdemy',
    images: [
      {
        url: '/profile-picture.JPG',
        alt: 'Bazhena Dementyeva - Senior Software Engineer',
      }
    ],
  },
  alternates: { 
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'add-google-site-verification-when-ready',
  // },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bazhena Dementyeva",
  "alternateName": ["Maria Dementyeva", "Maria Demy", "bashdemy"],
  "jobTitle": "Senior Software Engineer",
  "description": "Senior Software Engineer specializing in backend development, cloud architecture, and AI-powered solutions.",
  "url": "https://bashdemy.com",
  "image": {
    "@type": "ImageObject",
    "url": "https://bashdemy.com/profile-picture.JPG",
    "width": 1200,
    "height": 1200
  },
  "knowsAbout": [
    "Software Engineering",
    "Backend Development",
    "Cloud Architecture", 
    "AI Integration",
    "Java Programming",
    "Python Programming",
    "React Development",
    "Spring Boot",
    "AWS",
    "Microservices",
    "DevOps",
    "API Development",
    "Database Design",
    "System Architecture"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Senior Software Engineer",
    "occupationLocation": {
      "@type": "Place",
      "name": "Remote"
    },
    "skills": [
      "Java", "Python", "React", "NextJS", "Spring Boot", "AWS", 
      "Docker", "Microservices", "API Development", "Cloud Architecture",
      "AI Integration", "Database Design", "DevOps", "CI/CD"
    ]
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Educational Institution"
  },
  "gender": "Female",
  "workExample": [
    {
      "@type": "SoftwareApplication",
      "name": "Workflow86",
      "description": "AI-powered workflow automation platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web"
    },
    {
      "@type": "SoftwareApplication", 
      "name": "Yes Help Network",
      "description": "Youth-led platform for early intervention in Domestic & Family Violence",
      "applicationCategory": "SocialNetworkingApplication",
      "operatingSystem": "Web"
    }
  ],
  "sameAs": [
    "https://github.com/bashdemy",
    "https://linkedin.com/in/bashdemy"
  ]
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type={structuredDataScript}
          suppressHydrationWarning={true}
        >
          {JSON.stringify(structuredData)}
        </script>
      </head>
      <body className="bg-theme-background">{children}</body>
    </html>
  );
}
