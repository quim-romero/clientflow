export default function Step1() {
  return (
    <section className="container py-12 max-w-xl">
      <h2 className="text-2xl font-display font-bold mb-6">
        Let’s get started
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Company</label>
          <input className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">
            What are your main goals?
          </label>
          <textarea
            rows={4}
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
        </div>
        <div className="pt-4">
          <button className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}
