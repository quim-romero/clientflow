import { useRef } from "react";

export default function Step3() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="container py-12 max-w-xl">
      <h2 className="text-2xl font-display font-bold mb-6">
        Upload any helpful assets
      </h2>
      <p className="text-muted mb-6">
        Brand files, previous work, references — anything you think helps us
        understand your project better.
      </p>

      <div
        onClick={openFileDialog}
        className="cursor-pointer border-2 border-dashed border-muted/50 dark:border-white/20 rounded-xl p-6 text-center hover:bg-muted/10 dark:hover:bg-white/5 transition"
      >
        <p className="text-sm">Click to select files</p>
        <p className="text-xs text-muted mt-1">
          Accepted formats: PDF, JPG, PNG, TXT, etc.
        </p>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        multiple
        onChange={() => {}}
        className="hidden"
      />
    </section>
  );
}
