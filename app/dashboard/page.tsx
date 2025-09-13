"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ChartMock from "@/components/ChartMock";

export default function DashboardPage() {
  const [profile, setProfile] = useState<{ firstName?: string; lastName?: string } | null>(null);

  useEffect(() => {
    try {
      const p = localStorage.getItem("profile");
      if (p) setProfile(JSON.parse(p));
    } catch (e) {
      // ignore
    }
  }, []);

  const name = profile ? `${profile.firstName || ""} ${profile.lastName || ""}`.trim() : "";

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold font-nacelle text-transparent bg-clip-text bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200))]">Welcome Back{name ? `, ${name.split(" ")[0]}` : ""}!</h2>
              <p className="text-sm text-indigo-200/65">Your research outreach dashboard</p>
            </div>
          </div>

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

          <div className="mt-6 grid gap-6 md:grid-cols-3">
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
              </div>
            </div>

            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Connect Email</h3>
              <p className="text-sm text-indigo-200/65 mb-4">Connect your Gmail to send personalized outreach directly from your account.</p>
              <div className="flex items-center gap-3">
                <button className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Connect Gmail</button>
                <button className="btn bg-gray-800 text-gray-300">Manage</button>
              </div>
            </div>

            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Profile & Resume</h3>
              <div className="mb-3">
                <div className="text-sm text-indigo-200/50">Name</div>
                <div className="font-semibold">{name || "Your name"}</div>
              </div>
              <div className="mb-3">
                <div className="text-sm text-indigo-200/50">Gmail</div>
                <div className="font-semibold">{typeof window !== 'undefined' && localStorage.getItem('resumeName') ? (localStorage.getItem('resumeName')) : 'Not uploaded'}</div>
              </div>
              <div className="rounded-md border border-gray-800/40 p-3">
                <div className="h-36 w-full rounded-md bg-gray-800/30 flex items-center justify-center text-indigo-200/50">Resume preview (mock)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
