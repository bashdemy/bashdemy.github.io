"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (
      eventName: string,
      options?: { props?: Record<string, string> }
    ) => void;
  }
}

const contactHosts = new Map([
  ["linkedin.com", "linkedin"],
  ["github.com", "github"],
  ["substack.com", "substack"],
  ["instagram.com", "instagram"],
  ["hertechcircle.org", "her-tech-circle"],
]);

function normalizeHost(hostname: string) {
  return hostname.replace(/^www\./, "");
}

function sendPlausibleEvent(eventName: string, props: Record<string, string>) {
  if (typeof window.plausible !== "function") {
    return;
  }

  window.plausible(eventName, { props });
}

function describeLink(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute("href") ?? "";

  try {
    const url = new URL(rawHref, window.location.href);
    const host = normalizeHost(url.hostname);
    const path = `${url.pathname}${url.hash}` || "/";
    const contactTarget = [...contactHosts.entries()].find(
      ([domain]) => host === domain || host.endsWith(`.${domain}`)
    );

    if (contactTarget) {
      return {
        eventName: "Contact Link Click",
        props: {
          target: contactTarget[1],
          host,
          path,
        },
      };
    }

    if (url.origin !== window.location.origin) {
      return {
        eventName: "Outbound Link Click",
        props: {
          host,
          path,
        },
      };
    }
  } catch {
    return null;
  }

  return null;
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;

      if (!(anchor instanceof HTMLAnchorElement)) {
        return;
      }

      const linkEvent = describeLink(anchor);

      if (linkEvent) {
        sendPlausibleEvent(linkEvent.eventName, linkEvent.props);
      }
    };

    document.addEventListener("click", onClick, true);

    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
