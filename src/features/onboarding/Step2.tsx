export default function Step2() {
  return (
    <section className="container py-12 max-w-xl">
      <h2 className="text-2xl font-display font-bold mb-6">Your Preferences</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium">
            Preferred communication style
          </label>
          <select className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2">
            <option value="">Select one</option>
            <option value="email">Email</option>
            <option value="slack">Slack</option>
            <option value="video">Video Calls</option>
            <option value="async">Async (Notion, Docs, etc.)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">
            Your availability (hours/time zone)
          </label>
          <input
            type="text"
            placeholder="e.g., Mon–Fri 10am–6pm CET"
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            What tools do you use or prefer?
          </label>
          <input
            type="text"
            placeholder="Figma, Notion, Loom, Trello, etc."
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
        </div>
        <div className="pt-6 text-right">
          <button className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}
