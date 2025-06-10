import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
        Welcome to <span className="text-brand">ClientFlow</span>
      </h1>

      <p className="text-muted max-w-md mb-10">
        A smooth, elegant onboarding experience built with care. Try it like a
        real user.
      </p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
        >
          Start Onboarding
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-2 rounded-full border border-muted text-muted hover:bg-muted/10 transition"
        >
          View Dashboard
        </Link>
      </div>
    </main>
  );
}
