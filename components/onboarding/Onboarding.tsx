"use client";

import React, { useState } from "react";

type Profile = {
  firstName: string;
  lastName: string;
  grade: string;
  gmail: string;
  interests: string;
};

export default function Onboarding({
  initialProfile,
  onComplete,
}: {
  initialProfile?: Partial<Profile>;
  onComplete?: (profile: Profile, resume?: File | null) => void;
}) {
  const [step, setStep] = useState<number>(1);
  const [profile, setProfile] = useState<Profile>({
    firstName: initialProfile?.firstName || "",
    lastName: initialProfile?.lastName || "",
    grade: initialProfile?.grade || "",
    gmail: initialProfile?.gmail || "",
    interests: initialProfile?.interests || "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setResumeFile(file);
      const url = URL.createObjectURL(file);
      setResumeUrl(url);
    }
  };

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const finish = () => {
    onComplete && onComplete(profile, resumeFile);
  };

  return (
    <div className="mx-auto max-w-md rounded-xl bg-gray-900/40 p-6">
      <div className="mb-4 text-center">
        <h3 className="font-nacelle text-xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50))]">Welcome — quick setup</h3>
        <p className="text-indigo-200/65">Set up your profile so our AI can find the right professors for you.</p>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-indigo-200/65">First name</label>
              <input name="firstName" value={profile.firstName} onChange={handleChange} className="form-input w-full" />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-indigo-200/65">Last name</label>
              <input name="lastName" value={profile.lastName} onChange={handleChange} className="form-input w-full" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-indigo-200/65">Grade</label>
            <input name="grade" value={profile.grade} onChange={handleChange} className="form-input w-full" placeholder="e.g. Senior, Masters" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-indigo-200/65">Gmail</label>
            <input name="gmail" value={profile.gmail} onChange={handleChange} className="form-input w-full" placeholder="you@gmail.com" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-indigo-200/65">Research interests</label>
            <textarea name="interests" value={profile.interests} onChange={handleChange as any} rows={3} className="form-input w-full" placeholder="e.g. computer vision, NLP" />
          </div>

          <div className="flex items-center justify-between">
            <div />
            <button onClick={next} className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Continue</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-indigo-200/65">Upload your resume</label>
            <input type="file" accept=".pdf,.doc,.docx,image/*" onChange={handleFile} className="w-full text-sm text-gray-300" />
            <p className="text-xs text-indigo-200/50 mt-2">Supported: PDF, DOC, DOCX or image. This uses a mock upload and is stored only in browser for now.</p>
          </div>

          <div className="flex items-center justify-between">
            <button onClick={prev} className="btn bg-gray-800 text-gray-300">Back</button>
            <button onClick={next} className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Preview Resume</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-indigo-200/65">Resume preview</label>
            {resumeUrl ? (
              // if pdf show embed, else show image
              resumeFile && resumeFile.type === "application/pdf" ? (
                <iframe src={resumeUrl} className="h-64 w-full rounded-md bg-gray-800" />
              ) : (
                <img src={resumeUrl} alt="resume preview" className="h-64 w-full rounded-md object-contain bg-gray-800" />
              )
            ) : (
              <div className="h-64 w-full rounded-md border border-gray-700/40 flex items-center justify-center text-indigo-200/50">No resume uploaded yet</div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button onClick={prev} className="btn bg-gray-800 text-gray-300">Back</button>
            <button onClick={() => { finish(); onComplete && onComplete(profile, resumeFile); }} className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Finish & Go to Dashboard</button>
          </div>
        </div>
      )}
    </div>
  );
}
