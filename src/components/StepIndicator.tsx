import { useOnboardingStore } from "../store/onboardingStore";

const TOTAL_STEPS = 5;

export default function StepIndicator() {
  const rawStep = useOnboardingStore((s) => s.onboardingStep);

  const step = Number.isFinite(rawStep) && rawStep! >= 1 ? rawStep! : 1;

  const progress =
    TOTAL_STEPS > 0
      ? Math.min(100, Math.max(0, (step / TOTAL_STEPS) * 100))
      : 0;

  const progressPct = Number.isFinite(progress) ? Math.round(progress) : 0;

  return (
    <div className="container max-w-xl mb-6" aria-label="Progress">
      <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand transition-all"
          style={{ width: `${progressPct}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="sr-only" aria-live="polite">
        Step {step} of {TOTAL_STEPS}
      </p>
    </div>
  );
}
