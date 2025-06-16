import { useOnboardingStore } from "../../store/onboardingStore";

export default function Step4() {
  const data = useOnboardingStore((s) => s.data);

  const renderRow = (label: string, value?: string | string[]) => (
    <div className="flex justify-between items-start py-2 border-b border-muted/20">
      <span className="font-medium text-sm text-muted">{label}</span>
      <span className="text-right max-w-[60%] text-sm">
        {Array.isArray(value) ? value.join(", ") : value || "—"}
      </span>
    </div>
  );

  return (
    <section className="container py-12 max-w-xl">
      <h2 className="text-2xl font-display font-bold mb-6">
        Review your information
      </h2>
      <div className="bg-light dark:bg-dark rounded-xl p-6 shadow-sm space-y-4 border border-muted/10">
        {renderRow("Name", data.name)}
        {renderRow("Company", data.company)}
        {renderRow("Goals", data.goals)}
        {renderRow("Communication", data.communication)}
        {renderRow("Availability", data.availability)}
        {renderRow("Tools", data.tools)}
        {renderRow(
          "Uploaded files",
          data.assets?.map((f) => f.name)
        )}
      </div>
    </section>
  );
}
