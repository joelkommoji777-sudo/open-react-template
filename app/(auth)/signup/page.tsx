export const metadata = {
  title: "Sign Up - Open PRO",
  description: "Page description",
};

import Link from "next/link";
import SignUpOnboard from "@/components/auth/SignUpOnboard";

import Onboarding from "@/components/onboarding/Onboarding";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Direct onboarding: skip the initial signup form and go straight to quick setup */}
          <div className="mx-auto max-w-md">
            <Onboarding
              onComplete={(profile, resume) => {
                try {
                  localStorage.setItem("profile", JSON.stringify(profile));
                  if (resume && typeof resume.name === "string") {
                    localStorage.setItem("resumeName", resume.name);
                  }
                } catch (e) {
                  // ignore
                }
                if (typeof window !== "undefined") {
                  window.location.href = "/dashboard";
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
