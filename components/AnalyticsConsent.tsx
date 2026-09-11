"use client";

import { useEffect, useMemo, useState } from "react";

const CONSENT_KEY = "bashdemy-analytics-consent";

type ConsentState = "unknown" | "accepted" | "declined";
type PlausibleQueue = NonNullable<typeof window.plausible> & {
  q?: unknown[];
};

type AnalyticsConsentProps = {
  cloudflareWebAnalyticsToken?: string;
  plausibleDomain?: string;
};

function loadScript(
  id: string,
  src: string,
  configure: (script: HTMLScriptElement) => void
) {
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.defer = true;
  configure(script);
  document.head.appendChild(script);
}

function loadAnalytics({
  cloudflareWebAnalyticsToken,
  plausibleDomain,
}: Required<AnalyticsConsentProps>) {
  if (plausibleDomain) {
    if (!window.plausible) {
      const plausibleQueue: PlausibleQueue = (...args) => {
        plausibleQueue.q = plausibleQueue.q || [];
        plausibleQueue.q.push(args);
      };

      window.plausible = plausibleQueue;
    }

    loadScript(
      "plausible-analytics",
      "https://plausible.io/js/script.outbound-links.js",
      script => {
        script.dataset.domain = plausibleDomain;
      }
    );
  }

  if (cloudflareWebAnalyticsToken) {
    loadScript(
      "cloudflare-web-analytics",
      "https://static.cloudflareinsights.com/beacon.min.js",
      script => {
        script.type = "module";
        script.dataset.cfBeacon = JSON.stringify({
          token: cloudflareWebAnalyticsToken,
        });
      }
    );
  }
}

export function AnalyticsConsent({
  cloudflareWebAnalyticsToken = "",
  plausibleDomain = "",
}: AnalyticsConsentProps) {
  const [consent, setConsent] = useState<ConsentState>("unknown");
  const isConfigured = Boolean(cloudflareWebAnalyticsToken || plausibleDomain);
  const analyticsConfig = useMemo(
    () => ({ cloudflareWebAnalyticsToken, plausibleDomain }),
    [cloudflareWebAnalyticsToken, plausibleDomain]
  );

  useEffect(() => {
    if (!isConfigured) {
      setConsent("declined");
      return;
    }

    const stored = window.localStorage.getItem(CONSENT_KEY);

    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
  }, [isConfigured]);

  useEffect(() => {
    if (consent !== "accepted" || !isConfigured) {
      return;
    }

    loadAnalytics(analyticsConfig);
  }, [analyticsConfig, consent, isConfigured]);

  if (!isConfigured || consent !== "unknown") {
    return null;
  }

  const saveConsent = (nextConsent: ConsentState) => {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    setConsent(nextConsent);
  };

  return (
    <aside className="fixed bottom-4 left-1/2 z-50 w-[min(calc(100vw-2rem),32rem)] -translate-x-1/2 rounded-xl border border-theme-border bg-white/95 p-4 shadow-xl backdrop-blur-md">
      <p className="text-sm text-theme-secondary">
        I use optional privacy-friendly analytics to understand page views and
        contact-link clicks. No marketing cookies, profile matching, or hidden
        identity lookup.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => saveConsent("declined")}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-theme-primary px-4 py-2 text-sm font-semibold text-theme-primary transition hover:bg-theme-background-alt"
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={() => saveConsent("accepted")}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-theme-primary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
