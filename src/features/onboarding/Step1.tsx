import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useOnboardingStore } from "../../store/onboardingStore";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  company: z.string().min(2, "Company is too short"),
  goals: z.string().min(10, "Goals must be more descriptive"),
});

type FormData = z.infer<typeof schema>;

export default function Step1() {
  const updateData = useOnboardingStore((s) => s.updateData);
  const nextStep = useOnboardingStore((s) => s.nextStep);
  const data = useOnboardingStore((s) => s.data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: data.name || "",
      company: data.company || "",
      goals: data.goals || "",
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
      <h2 className="text-2xl font-display font-bold mb-6">
        Let’s get started
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
            {...register("name")}
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium">
            Company
          </label>
          <input
            id="company"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "company-error" : undefined}
            type="text"
            {...register("company")}
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
          {errors.company && (
            <p id="company-error" className="text-red-500 text-sm mt-1">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="goals" className="block text-sm font-medium">
            What are your main goals?
          </label>
          <textarea
            id="goals"
            aria-invalid={errors.goals ? true : undefined}
            aria-describedby={errors.goals ? "goals-error" : undefined}
            rows={4}
            {...register("goals")}
            className="w-full mt-1 rounded border-muted bg-white dark:bg-dark p-2"
          />
          {errors.goals && (
            <p id="goals-error" className="text-red-500 text-sm mt-1">
              {errors.goals.message}
            </p>
          )}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="bg-brand text-white px-6 py-2 rounded-full hover:bg-brand-dark transition"
          >
            Continue
          </button>
        </div>
      </form>
    </motion.section>
  );
}
