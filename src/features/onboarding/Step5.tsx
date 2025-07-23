import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useOnboardingStore } from "../../store/onboardingStore";

export default function Step5() {
  const user = useOnboardingStore((s) => s.user);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="container py-20 text-center max-w-xl"
      aria-live="polite"
    >
      <h1 className="text-4xl font-display font-bold text-brand mb-4">
        Thank you!
      </h1>

      <p className="text-muted mb-6">
        Your onboarding is complete. We’ll review your submission and reach out
        shortly
        {user ? (
          <>
            {" "}
            at <span className="font-medium">{user}</span>.
          </>
        ) : (
          "."
        )}
      </p>

      <p className="text-sm text-muted mb-10">
        You may close this window or return later to your dashboard.
      </p>

      <div>
        <Link
          to="/dashboard"
          className="inline-block px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
          aria-label="Go to Dashboard"
        >
          Go to dashboard
        </Link>
      </div>
    </motion.section>
  );
}
