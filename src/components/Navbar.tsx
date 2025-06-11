import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="w-full px-6 py-4 border-b border-muted/10 bg-white dark:bg-[#15132B] flex justify-between items-center">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-xl font-bold font-display text-brand">
          ClientFlow
        </Link>
        <Link
          to="/dashboard"
          className={`text-sm ${isActive("/dashboard") ? "font-semibold" : "text-muted"}`}
        >
          Dashboard
        </Link>
        <Link
          to="/onboarding"
          className={`text-sm ${isActive("/onboarding") ? "font-semibold" : "text-muted"}`}
        >
          Onboarding
        </Link>
      </div>
    </nav>
  )
}
