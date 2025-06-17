import { useOnboardingStore } from "../store/onboardingStore";

export default function Dashboard() {
  const data = useOnboardingStore((s) => s.data);

  return (
    <main className="min-h-screen container py-20">
      <h1 className="text-3xl font-display font-bold mb-2">Welcome back 👋</h1>
      <p className="text-muted mb-8">
        Here's the current status of your project.
      </p>

      <section className="bg-light dark:bg-dark p-6 rounded-xl shadow-sm border border-muted/10 mb-12">
        <h2 className="text-xl font-semibold mb-4">Project Status</h2>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center justify-between">
            <span className="text-muted">📝 Onboarding Complete</span>
            <span className="text-green-600 font-medium">✓</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted">🎨 Design Phase</span>
            <span className="text-yellow-500 font-medium">In progress</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted">🧪 Review & Feedback</span>
            <span className="text-muted">Pending</span>
          </li>
          <li className="flex items-center justify-between">
            <span className="text-muted">🚀 Launch</span>
            <span className="text-muted">Pending</span>
          </li>
        </ul>
      </section>

      <pre className="bg-light dark:bg-dark p-4 rounded text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}
