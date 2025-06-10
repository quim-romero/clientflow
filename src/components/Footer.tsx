export default function Footer() {
  return (
    <footer className="w-full border-t border-muted/10 py-6 px-6 text-center text-sm text-muted bg-white dark:bg-black">
      <p>
        Built with care by{" "}
        <span className="font-medium text-dark dark:text-white">
          Quim Romero
        </span>{" "}
        — {new Date().getFullYear()}
      </p>
    </footer>
  );
}
