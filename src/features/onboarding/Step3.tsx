import { useRef, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { useOnboardingStore } from "../../store/onboardingStore";

export default function Step3() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const data = useOnboardingStore((s) => s.data);
  const updateData = useOnboardingStore((s) => s.updateData);
  const nextStep = useOnboardingStore((s) => s.nextStep);
  const prevStep = useOnboardingStore((s) => s.prevStep);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    updateData({ assets: fileList });
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="container py-12 max-w-xl"
      aria-labelledby="assets-title"
    >
      <h2 id="assets-title" className="text-2xl font-display font-bold mb-6">
        Upload any helpful assets
      </h2>
      <p id="assets-help" className="text-muted mb-6">
        Brand files, previous work, references — anything you think helps us
        understand your project better.
      </p>

      <label htmlFor="assets" className="sr-only">
        Select files to upload
      </label>
      <input
        id="assets"
        type="file"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
        aria-describedby="assets-help"
        className="sr-only"
      />

      <button
        type="button"
        onClick={openFileDialog}
        className="w-full cursor-pointer border-2 border-dashed border-muted/50 dark:border-white/20 rounded-xl p-6 text-center hover:bg-muted/10 dark:hover:bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
        aria-describedby="assets-help"
      >
        <p className="text-sm">Click to select files</p>
        <p className="text-xs text-muted mt-1">
          Accepted formats: PDF, JPG, PNG, TXT, etc.
        </p>
      </button>

      {data.assets && data.assets.length > 0 && (
        <ul
          className="mt-6 space-y-2 text-sm"
          aria-live="polite"
          aria-relevant="additions removals"
        >
          {data.assets.map((file, i) => (
            <li
              key={i}
              className="flex justify-between bg-light dark:bg-dark p-2 rounded border border-muted/20"
            >
              <span>{file.name}</span>
              <span className="text-muted text-xs">
                {(file.size / 1024).toFixed(1)} KB
              </span>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-8 flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 rounded-full border border-muted text-muted hover:bg-muted/10"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="px-6 py-2 rounded-full bg-brand text-white hover:bg-brand-dark transition"
        >
          Continue
        </button>
      </div>
    </motion.section>
  );
}
