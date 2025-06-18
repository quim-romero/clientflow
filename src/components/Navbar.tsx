import { Link, useNavigate, useLocation } from "react-router-dom";
import { useOnboardingStore } from "../store/onboardingStore";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const user = useOnboardingStore((s) => s.user);
  const reset = useOnboardingStore((s) => s.reset);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    reset();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full px-6 py-4 border-b border-muted/10 bg-white dark:bg-[#15132B] flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-bold font-display text-brand">
          ClientFlow
        </Link>
        {user && (
          <>
            <Link
              to="/dashboard"
              className={`text-sm ${
                isActive("/dashboard") ? "font-semibold" : "text-muted"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/onboarding"
              className={`text-sm ${
                isActive("/onboarding") ? "font-semibold" : "text-muted"
              }`}
            >
              Onboarding
            </Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
          <>
            <span className="text-sm text-muted hidden sm:block">{user}</span>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1 rounded-full border border-muted text-muted hover:bg-muted/10 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-sm px-4 py-1 rounded-full bg-brand text-white hover:bg-brand-dark transition"
          >
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
}
