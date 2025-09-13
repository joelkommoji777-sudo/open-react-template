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
            <div>
              <button className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Create Campaign +</button>
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

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Campaign Status</h3>
              <div className="rounded-md border border-gray-800/40 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">University of Georgia Campaign</div>
                    <div className="text-sm text-indigo-200/50">1 university · 15 emails sent</div>
                  </div>
                  <div className="text-sm text-indigo-200/50">Progress: 20%</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-900/40 p-6">
              <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Recent Activity</h3>
              <div className="rounded-md border border-gray-800/40 p-6 text-indigo-200/50">No recent activity</div>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-gray-900/40 p-6">
            <h3 className="mb-3 text-lg font-medium text-indigo-200/75">Quick Actions</h3>
            <div className="flex items-center gap-3">
              <button className="btn bg-linear-to-t from-indigo-600 to-indigo-500 text-white">Create New Campaign</button>
              <button className="btn bg-gray-800 text-gray-300">Upload Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
