import { useOnboardingStore } from "../store/onboardingStore";
import clsx from "clsx";

const steps = ["User Info", "Preferences", "Assets", "Review", "Done"];

export default function StepIndicator() {
  const step = useOnboardingStore((s) => s.onboardingStep);

  return +(
    <div
      className="w-full flex justify-center mb-8"
      role="navigation"
      aria-label="Onboarding progress"
    >
      <div className="flex gap-2 sm:gap-4">
        {steps.map((label, index) => {
          const stepNum = index + 1;
          const isActive = step === stepNum;
          const isCompleted = step > stepNum;

          return (
            <div
              key={label}
              className="flex items-center gap-2"
              role="listitem"
              aria-label={label}
            >
              <div
                className={clsx("w-4 h-4 rounded-full border-2", {
                  "bg-brand border-brand": isActive,
                  "bg-muted border-muted": !isActive && !isCompleted,
                  "bg-brand border-brand/80": isCompleted,
                })}
                aria-current={isActive ? "step" : undefined}
              />
              <span className="text-sm text-muted hidden sm:block">
                {label}
              </span>
              {stepNum !== steps.length && (
                <span className="w-8 h-px bg-muted/50 hidden sm:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
