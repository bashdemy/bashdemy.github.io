import type { Metadata } from "next";
import Link from "next/link";
import Card from "../../../components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Bashdemy handles personal data, analytics, cookies, external links, and contact information on this portfolio website.",
  alternates: {
    canonical: "/privacy/",
  },
};

const sections = [
  {
    title: "What This Site Collects",
    body: [
      "This portfolio is a static website. It does not include a contact form, account login, checkout, comments, or tracking analytics.",
      "If you contact me through LinkedIn, GitHub, Substack, Instagram, or another linked service, any information you share is handled by that service and by the normal conversation we have there.",
    ],
  },
  {
    title: "Cookies And Analytics",
    body: [
      "This site does not set its own analytics cookies.",
      "GitHub Pages, browsers, CDNs, and linked third-party platforms may process basic technical information such as IP address, browser details, referrer, and request logs for security, delivery, and abuse prevention.",
    ],
  },
  {
    title: "External Links",
    body: [
      "This site links to external platforms including GitHub, LinkedIn, Substack, Instagram, company websites, and project sites.",
      "Those sites have their own privacy practices. Opening an external link may let that platform know you visited from this portfolio.",
    ],
  },
  {
    title: "Content And Images",
    body: [
      "Images and project descriptions are included to present my work, interests, education, and professional experience.",
      "If you have a privacy question about content that appears here, contact me through one of the linked professional profiles.",
    ],
  },
];

export default function PrivacyPage() {
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
            Privacy
          </p>
          <h1 className="font-heading text-4xl font-bold text-theme-primary">
            Privacy Policy
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
