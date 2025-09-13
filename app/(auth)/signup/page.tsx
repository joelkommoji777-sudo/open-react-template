export const metadata = {
  title: "Sign Up - Open PRO",
  description: "Page description",
};

import Link from "next/link";
import SignUpOnboard from "@/components/auth/SignUpOnboard";

export default function SignUp() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Render the client onboarding component which handles registration and redirection */}
          <div className="mx-auto max-w-md">
            <SignUpOnboard />
          </div>
        </div>
      </div>
    </section>
  );
}
