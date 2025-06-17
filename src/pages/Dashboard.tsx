import { useOnboardingStore } from "../store/onboardingStore";

export default function Dashboard() {
  const data = useOnboardingStore((s) => s.data);
  const user = useOnboardingStore((s) => s.user);

  return (
    <main className="min-h-screen container py-20">
      <h1 className="text-3xl font-display font-bold mb-2">
        Welcome back, {user?.split("@")[0]} 👋
      </h1>
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

      <section className="bg-light dark:bg-dark p-6 rounded-xl shadow-sm border border-muted/10">
        <h2 className="text-xl font-semibold mb-4">Your Submission</h2>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium text-muted">Name:</span> {data.name}
          </p>
          <p>
            <span className="font-medium text-muted">Company:</span>{" "}
            {data.company}
          </p>
          <p>
            <span className="font-medium text-muted">Goals:</span> {data.goals}
          </p>
          <p>
            <span className="font-medium text-muted">Preferred Tools:</span>{" "}
            {data.tools}
          </p>
          <p>
            <span className="font-medium text-muted">Availability:</span>{" "}
            {data.availability}
          </p>
          <p>
            <span className="font-medium text-muted">Communication:</span>{" "}
            {data.communication}
          </p>

          {data.assets && data.assets.length > 0 && (
            <div>
              <p className="font-medium text-muted mb-1">Uploaded Files:</p>
              <ul className="list-disc ml-5">
                {data.assets.map((f, i) => (
                  <li key={i}>
                    {f.name} ({(f.size / 1024).toFixed(1)} KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
