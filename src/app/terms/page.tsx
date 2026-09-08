import type { Metadata } from "next";
import Link from "next/link";
import Card from "../../../components/ui/Card";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms for using the Bashdemy personal portfolio website, including content, external links, and project information.",
  alternates: {
    canonical: "/terms/",
  },
};

const sections = [
  {
    title: "Website Purpose",
    body: [
      "This website is a personal portfolio for Bazhena Dementyeva, also known as Maria Demy and bashdemy.",
      "It presents professional experience, selected projects, personal interests, and public links.",
    ],
  },
  {
    title: "Content Accuracy",
    body: [
      "I aim to keep the information current and accurate, but portfolio content may change as projects, roles, and links evolve.",
      "External websites linked from this portfolio are not controlled by me and may update independently.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Unless otherwise stated, the writing, design, and original portfolio content on this website belong to Bazhena Dementyeva.",
      "Third-party logos, names, and references remain the property of their respective owners and are used to identify relevant work, education, or projects.",
    ],
  },
  {
    title: "No Professional Guarantee",
    body: [
      "The site is provided for general information and portfolio presentation. It is not legal, financial, employment, or technical consulting advice.",
      "If you rely on linked resources or project descriptions, please verify details with the original source where appropriate.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="section-padding min-h-screen">
      <div className="container-custom max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex text-sm font-semibold text-theme-accent underline-offset-4 transition hover:text-theme-accent-hover hover:underline"
        >
          Back home
        </Link>

        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-theme-muted">
            Terms
          </p>
          <h1 className="font-heading text-4xl font-bold text-theme-primary">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-theme-secondary">
            Last updated 7 September 2026.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map(section => (
            <Card key={section.title}>
              <h2 className="mb-4 font-heading text-2xl font-semibold text-theme-primary">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map(paragraph => (
                  <p key={paragraph} className="text-theme-secondary">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
