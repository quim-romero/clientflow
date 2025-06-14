import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../store/onboardingStore";
import Step1 from "../features/onboarding/Step1";
import Step2 from "../features/onboarding/Step2";

export default function Onboarding() {
  const user = useOnboardingStore((s) => s.user);
  const step = useOnboardingStore((s) => s.onboardingStep);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  if (!user) return null;

  return (
    <main className="min-h-screen py-12">
      {step === 1 && <Step1 />} {step === 2 && <Step2 />}
    </main>
  );
}
