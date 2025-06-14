import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboardingStore } from "../../store/onboardingStore";
import { motion } from "framer-motion";

const schema = z.object({
  communication: z.string().min(2, "Please select your preferred method."),
  availability: z.string().min(2, "Tell us about your schedule."),
  tools: z.string().min(2, "Let us know which tools you use."),
});

type FormData = z.infer<typeof schema>;

export default function Step2() {
  const data = useOnboardingStore((s) => s.data);
  const updateData = useOnboardingStore((s) => s.updateData);
  const nextStep = useOnboardingStore((s) => s.nextStep);
  const prevStep = useOnboardingStore((s) => s.prevStep);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      communication: data.communication || "",
      availability: data.availability || "",
      tools: data.tools || "",
    },
  });

  const onSubmit = (values: FormData) => {
    updateData(values);
    nextStep();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="container py-12 max-w-xl"
    >
      <h2 className="text-2xl font-display font-bold mb-6">Your Preferences</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">
            Preferred communication style
          </label>
          <select
            {...register("communication")}
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          >
            <option value="">Select one</option>
            <option value="email">Email</option>
            <option value="slack">Slack</option>
            <option value="video">Video Calls</option>
            <option value="async">Async (Notion, Docs, etc.)</option>
          </select>
          {errors.communication && (
            <p className="text-red-500 text-sm mt-1">
              {errors.communication.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            Your availability (hours/time zone)
          </label>
          <input
            type="text"
            {...register("availability")}
            placeholder="e.g., Mon–Fri 10am–6pm CET"
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
          {errors.availability && (
            <p className="text-red-500 text-sm mt-1">
              {errors.availability.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">
            What tools do you use or prefer?
          </label>
          <input
            type="text"
            {...register("tools")}
            placeholder="Figma, Notion, Loom, Trello, etc."
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
          {errors.tools && (
            <p className="text-red-500 text-sm mt-1">{errors.tools.message}</p>
          )}
        </div>

        <div className="pt-6 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-4 py-2 rounded-full border border-muted text-muted hover:bg-muted/10"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
          >
            Continue
          </button>
        </div>
      </form>
    </motion.section>
  );
}
