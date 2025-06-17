import { useOnboardingStore } from "../store/onboardingStore";

export default function Dashboard() {
  const data = useOnboardingStore((s) => s.data);

  return (
    <main className="min-h-screen container py-20">
      <h1 className="text-3xl font-display font-bold mb-2">Welcome back 👋</h1>
      <p className="text-muted mb-8">
        Here's the current status of your project.
      </p>

      <pre className="bg-light dark:bg-dark p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
