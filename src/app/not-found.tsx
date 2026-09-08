import Link from "next/link";
import Card from "../../components/ui/Card";

export default function NotFound() {
  return (
    <main className="section-padding flex min-h-screen items-center justify-center">
      <Card className="max-w-xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-theme-muted">
          404
        </p>
        <h1 className="font-heading text-4xl font-bold text-theme-primary">
          This page is not here.
        </h1>
        <p className="mt-4 text-theme-secondary">
          The portfolio is still online, but this route does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-theme-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Return home
        </Link>
      </Card>
    </main>
  );
}
