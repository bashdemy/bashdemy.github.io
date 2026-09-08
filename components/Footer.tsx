import Link from "next/link";
import { LOCALE_COPY, Locale } from "../constants/locale";

interface FooterProps {
  locale: Locale;
}

const Footer = ({ locale }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copy = LOCALE_COPY[locale].footer;

  return (
    <footer
      className="bg-theme-background border-t border-theme-border"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-center text-theme-secondary font-body">
                © {currentYear} Bazhena Dementyeva
              </p>
              <nav
                aria-label="Footer navigation"
                className="mt-3 flex flex-wrap justify-center gap-4 text-sm md:justify-start"
              >
                <Link
                  href="/"
                  className="text-theme-muted transition hover:text-theme-accent"
                >
                  {copy.home}
                </Link>
                <Link
                  href="/privacy/"
                  className="text-theme-muted transition hover:text-theme-accent"
                >
                  {copy.privacy}
                </Link>
                <Link
                  href="/terms/"
                  className="text-theme-muted transition hover:text-theme-accent"
                >
                  {copy.terms}
                </Link>
              </nav>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-theme-muted font-body">{copy.role}</p>
              <p className="text-sm text-theme-muted font-body mt-2">
                {copy.builtBy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
