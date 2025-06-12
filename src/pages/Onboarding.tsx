import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../store/onboardingStore";

export default function Onboarding() {
  const user = useOnboardingStore((s) => s.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  if (!user) return null;

  return (
    <main className="min-h-screen py-12">
      <h1 className="text-2xl font-display font-bold text-center">
        Onboarding
      </h1>
    </main>
  );
}
