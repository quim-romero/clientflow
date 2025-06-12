import { create } from "zustand";
import { persist } from "zustand/middleware";

type OnboardingData = {
  name?: string;
  company?: string;
  goals?: string;
  communication?: string;
  availability?: string;
  tools?: string;
  assets?: {
    name: string;
    size: number;
    type: string;
  }[];
};

type OnboardingState = {
  user: string | null;
  onboardingStep: number;
  data: OnboardingData;
  setUser: (email: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
  updateData: (values: Partial<OnboardingData>) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      user: null,
      onboardingStep: 1,
      data: {},
      setUser: (email) => set({ user: email }),
      nextStep: () =>
        set((state) => ({ onboardingStep: state.onboardingStep + 1 })),
      prevStep: () =>
        set((state) => ({ onboardingStep: state.onboardingStep - 1 })),
      setStep: (step) => set({ onboardingStep: step }),
      updateData: (values) =>
        set((state) => ({ data: { ...state.data, ...values } })),
      reset: () => set({ user: null, onboardingStep: 1, data: {} }),
    }),
    {
      name: "clientflow-onboarding",
    }
  )
);
