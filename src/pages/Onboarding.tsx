import { useNavigate } from "react-router-dom";
import StepIndicator from "../components/StepIndicator";
import { useOnboardingStore } from "../store/onboardingStore";

import { lazy, Suspense, useEffect } from "react";
const Step1 = lazy(() => import("../features/onboarding/Step1"));
const Step2 = lazy(() => import("../features/onboarding/Step2"));
const Step3 = lazy(() => import("../features/onboarding/Step3"));
const Step4 = lazy(() => import("../features/onboarding/Step4"));
const Step5 = lazy(() => import("../features/onboarding/Step5"));

export default function Onboarding() {
  const user = useOnboardingStore((s) => s.user);
  const step = useOnboardingStore((s) => s.onboardingStep);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  if (!user) return null;

  return (
    <main className="min-h-screen py-12" aria-labelledby="onboarding-title">
      <h1 id="onboarding-title" className="sr-only">
        Onboarding
      </h1>

      {step < 5 && <StepIndicator />}
      <Suspense
        fallback={
          <div
            className="container max-w-xl py-20"
            role="status"
            aria-live="polite"
          >
            Loading…
          </div>
        }
      >
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </Suspense>
    </main>
  );
}
