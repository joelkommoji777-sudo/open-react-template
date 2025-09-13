"use client";

import React, { useEffect, useState } from "react";
import ChartMock from "@/components/ChartMock";

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [tab, setTab] = useState<'overview'|'matching'|'profile'>('overview');

  useEffect(() => {
    try {
      const p = localStorage.getItem('profile');
      if (p) setProfile(JSON.parse(p));
    } catch (e) {
      // ignore
    }
  }, []);

  const name = profile ? `${profile.firstName || ''} ${profile.lastName || ''}`.trim() : '';

  const saveProfile = (data: any) => {
    try {
      localStorage.setItem('profile', JSON.stringify(data));
      setProfile(data);
    } catch (e) {}
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold font-nacelle text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200))]">Welcome Back{name ? `, ${name.split(' ')[0]}` : ''}!</h2>
              <p className="text-sm text-indigo-200/65">Your research outreach dashboard</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-6">
            <nav className="inline-flex rounded-md bg-gray-900/30 p-1">
              <button onClick={() => setTab('overview')} className={`px-4 py-2 rounded-md text-sm ${tab==='overview'? 'bg-gray-800 text-white' : 'text-indigo-200/65'}`}>Overview</button>
              <button onClick={() => setTab('matching')} className={`ml-2 px-4 py-2 rounded-md text-sm ${tab==='matching'? 'bg-gray-800 text-white' : 'text-indigo-200/65'}`}>Professor Matching</button>
              <button onClick={() => setTab('profile')} className={`ml-2 px-4 py-2 rounded-md text-sm ${tab==='profile'? 'bg-gray-800 text-white' : 'text-indigo-200/65'}`}>Profile</button>
            </nav>
          </div>

          {tab === 'overview' && (
            <>
              <div className="grid gap-6 md:grid-cols-4 mb-6">
                <div className="rounded-xl bg-gray-900/40 p-4">
                  <h4 className="text-sm text-indigo-200/65">Emails Sent</h4>
                  <div className="mt-3 text-2xl font-semibold">1</div>
                </div>
                <div className="rounded-xl bg-gray-900/40 p-4">
                  <h4 className="text-sm text-indigo-200/65">Opens</h4>
                  <div className="mt-3 text-2xl font-semibold text-green-400">1</div>
                </div>
                <div className="rounded-xl bg-gray-900/40 p-4">
                  <h4 className="text-sm text-indigo-200/65">Email Responses</h4>
                  <div className="mt-3 text-2xl font-semibold">0</div>
                </div>
                <div className="rounded-xl bg-gray-900/40 p-4">
                  <h4 className="text-sm text-indigo-200/65">Response Rate</h4>
                  <div className="mt-3 text-2xl font-semibold">0.0%</div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-xl bg-gray-900/40 p-6">
                  <h3 className="mb-4 text-lg font-medium text-indigo-200/75">Activity Chart</h3>
                  <div className="h-44 rounded-md"><ChartMock data={[12,9,8,6,5,7,10]} /></div>
                </div>
                <div className="rounded-xl bg-gray-900/40 p-6">
                  <h3 className="mb-4 text-lg font-medium text-indigo-200/75">Email Status Distribution</h3>
                  <div className="h-44 flex items-center justify-center text-indigo-200/50">No data yet</div>
                </div>
              </div>
            </>
          )}

          {tab === 'matching' && (
            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Professor Matching</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-indigo-200/65">University</label>
                  <input className="form-input w-full" placeholder="e.g. University of Georgia" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-200/65">Research area</label>
                  <input className="form-input w-full" placeholder="e.g. computer vision" />
                </div>
                <div className="text-right">
                  <button className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Find Professors</button>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm text-indigo-200/65 mb-2">Results (mock)</h4>
                  <ul className="space-y-3">
                    <li className="rounded-md border border-gray-800/40 p-3">
                      <div className="font-semibold">Dr. Alice Smith — Computer Vision</div>
                      <div className="text-sm text-indigo-200/50">University of Georgia · Vision Lab</div>
                    </li>
                    <li className="rounded-md border border-gray-800/40 p-3">
                      <div className="font-semibold">Prof. John Doe — Machine Learning</div>
                      <div className="text-sm text-indigo-200/50">State University · ML Group</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {tab === 'profile' && (
            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Profile & Resume</h3>
              <ProfileEditor initial={profile} onSave={saveProfile} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProfileEditor({ initial, onSave }: { initial?: any; onSave: (data: any) => void }) {
  const [data, setData] = useState<any>({
    firstName: '',
    lastName: '',
    grade: '',
    gmail: '',
    interests: '',
    education: '',
    publications: '',
    skills: '',
    experience: '',
    ...(initial || {}),
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setData((d: any) => ({ ...d, ...(initial || {}) }));
  }, [initial]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((s: any) => ({ ...s, [name]: value }));
  };

  const save = () => {
    onSave(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">First name</label>
          <input name="firstName" value={data.firstName} onChange={handleChange} className="form-input w-full" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">Last name</label>
          <input name="lastName" value={data.lastName} onChange={handleChange} className="form-input w-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">Grade</label>
          <input name="grade" value={data.grade} onChange={handleChange} className="form-input w-full" placeholder="e.g. Senior, Masters" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">Gmail</label>
          <input name="gmail" value={data.gmail} onChange={handleChange} className="form-input w-full" placeholder="you@gmail.com" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-indigo-200/65">Research interests</label>
        <textarea name="interests" value={data.interests} onChange={handleChange as any} rows={3} className="form-input w-full" placeholder="e.g. computer vision, NLP" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-indigo-200/65">Education</label>
        <input name="education" value={data.education} onChange={handleChange} className="form-input w-full" placeholder="e.g. BSc Computer Science" />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-indigo-200/65">Publications</label>
        <textarea name="publications" value={data.publications} onChange={handleChange as any} rows={3} className="form-input w-full" placeholder="List publications or leave blank" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">Skills</label>
          <input name="skills" value={data.skills} onChange={handleChange} className="form-input w-full" placeholder="e.g. Python, PyTorch" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-indigo-200/65">Experience</label>
          <input name="experience" value={data.experience} onChange={handleChange} className="form-input w-full" placeholder="e.g. Research assistant at X" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>{saved ? <span className="text-sm text-green-400">Saved</span> : <span className="text-sm text-indigo-200/65">Make sure this info is correct before outreach</span>}</div>
        <div>
          <button onClick={save} className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Save Profile</button>
        </div>
      </div>
    </div>
  );
}
