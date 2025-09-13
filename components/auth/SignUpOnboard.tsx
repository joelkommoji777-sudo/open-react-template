"use client";

import React, { useState } from "react";
import Link from "next/link";
import Onboarding from "@/components/onboarding/Onboarding";

export default function SignUpOnboard() {
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [profileData, setProfileData] = useState<any>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // collect basic fields and open onboarding with mock data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const [firstName, ...rest] = (name || "").split(" ");
    const lastName = rest.join(" ");
    setProfileData({ firstName: firstName || "", lastName: lastName || "", gmail: email || "" });
    setShowOnboarding(true);
  };

  return (
    <div>
      {!showOnboarding ? (
        <form onSubmit={handleRegister} className="mx-auto max-w-[400px]">
          <div className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="name">Name <span className="text-red-500">*</span></label>
              <input id="name" name="name" type="text" className="form-input w-full" placeholder="Your full name" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="company">Company Name <span className="text-red-500">*</span></label>
              <input id="company" name="company" type="text" className="form-input w-full" placeholder="Your company name" required />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-indigo-200/65" htmlFor="email">Work Email <span className="text-red-500">*</span></label>
              <input id="email" name="email" type="email" className="form-input w-full" placeholder="Your work email" />
            </div>
            <div>
              <label className="block text-sm font-medium text-indigo-200/65" htmlFor="password">Password <span className="text-red-500">*</span></label>
              <input id="password" name="password" type="password" className="form-input w-full" placeholder="Password (at least 10 characters)" />
            </div>
          </div>
          <div className="mt-6 space-y-5">
            <button type="submit" className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]">Register</button>
            <div className="flex items-center gap-3 text-center text-sm italic text-gray-600 before:h-px before:flex-1 before:bg-linear-to-r before:from-transparent before:via-gray-400/25 after:h-px after:flex-1 after:bg-linear-to-r after:from-transparent after:via-gray-400/25">or</div>
            <button className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%]">Sign In with Google</button>
          </div>
          <div className="mt-6 text-center text-sm text-indigo-200/65">Already have an account? <Link className="font-medium text-indigo-500" href="/signin">Sign in</Link></div>
        </form>
      ) : (
        <div>
          <Onboarding
            initialProfile={profileData}
            onComplete={(profile, resume) => {
              // for now, just show a simple success and keep mock dashboard reachable
              console.log("onboarding complete", profile, resume);
              // navigate to a mock dashboard state by replacing content
              // we simply show a minimal dashboard replacement below
            }}
          />
        </div>
      )}
    </div>
  );
}
