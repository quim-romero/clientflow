import { useOnboardingStore } from "../../store/onboardingStore"

export default function Step5() {
  const user = useOnboardingStore((s) => s.user)

  return (
    <section className="container py-20 text-center max-w-xl">
      <h1 className="text-4xl font-display font-bold text-brand mb-4">
        Thank you!
      </h1>
      <p className="text-muted mb-6">
        Your onboarding is complete. We’ll review your submission and reach out shortly at <span className="font-medium">{user}</span>.
      </p>
      <p className="text-sm text-muted">
        You may close this window or return later to your dashboard.
      </p>
    </section>
  )
}
