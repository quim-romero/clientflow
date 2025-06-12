import { useNavigate } from "react-router-dom";
import { useOnboardingStore } from "../store/onboardingStore";
import { useForm } from "react-hook-form";

export default function Login() {
  const setUser = useOnboardingStore((s) => s.setUser);
  const reset = useOnboardingStore((s) => s.reset);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ email: string }>();

  const onSubmit = ({ email }: { email: string }) => {
    reset();
    setUser(email);
    navigate("/onboarding");
  };

  return (
    <main className="min-h-[calc(100vh-64px-64px)] flex items-center justify-center px-6">
      <div className="w-full max-w-md pb-24">
        <h1 className="text-3xl font-display font-bold mb-6">Log in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              required
              className="w-full mt-1 rounded p-2 bg-white dark:bg-dark border border-muted"
            />
            <p className="text-xs text-muted mt-2">
              *This is a mock login — use any email to proceed.
            </p>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-brand text-white rounded-full hover:bg-brand-dark transition"
          >
            Start Onboarding
          </button>
        </form>
      </div>
    </main>
  );
}
