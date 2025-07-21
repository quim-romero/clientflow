import { useOnboardingStore } from "../../store/onboardingStore";
import { motion } from "framer-motion";

export default function Step4() {
  const data = useOnboardingStore((s) => s.data);
  const setStep = useOnboardingStore((s) => s.setStep);
  const nextStep = useOnboardingStore((s) => s.nextStep);

  const handleSubmit = () => {
    nextStep();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="container py-12 max-w-xl"
      aria-labelledby="review-title"
    >
      <h2 id="review-title" className="text-2xl font-display font-bold mb-6">
        Review your information
      </h2>
      <p id="review-help" className="sr-only">
        Review the information you provided before submitting.
      </p>

      <dl
        className="bg-light dark:bg-dark rounded-xl p-6 shadow-sm space-y-4 border border-muted/10"
        aria-describedby="review-help"
      >
        <div className="flex justify-between items-start py-2 border-b border-muted/20">
          <dt className="font-medium text-sm text-muted">Name</dt>
          <dd className="text-right max-w-[60%] text-sm">{data.name || "—"}</dd>
        </div>
        <div className="flex justify-between items-start py-2 border-b border-muted/20">
          <dt className="font-medium text-sm text-muted">Company</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.company || "—"}
          </dd>
        </div>
        <div className="flex justify-between items-start py-2 border-b border-muted/20">
          <dt className="font-medium text-sm text-muted">Goals</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.goals || "—"}
          </dd>
        </div>
        <div className="flex justify-between items-start py-2 border-b border-muted/20">
          <dt className="font-medium text-sm text-muted">Communication</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.communication || "—"}
          </dd>
        </div>
        <div className="flex justify-between items-start py-2 border-b border-muted/20">
          <dt className="font-medium text-sm text-muted">Availability</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.availability || "—"}
          </dd>
        </div>
        <div className="flex justify-between items-start py-2">
          <dt className="font-medium text-sm text-muted">Tools</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.tools || "—"}
          </dd>
        </div>
        <div className="flex justify-between items-start py-2">
          <dt className="font-medium text-sm text-muted">Uploaded files</dt>
          <dd className="text-right max-w-[60%] text-sm">
            {data.assets && data.assets.length > 0
              ? data.assets.map((f) => f.name).join(", ")
              : "—"}
          </dd>
        </div>
      </dl>

      <div className="pt-8 flex justify-between">
        <button
          type="button"
          onClick={() => setStep(3)}
          className="px-4 py-2 rounded-full border border-muted text-muted hover:bg-muted/10"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
        >
          Submit
        </button>
      </div>
    </motion.section>
  );
}
