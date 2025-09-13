"use client";

import React from "react";

type ChartMockProps = {
  data?: number[];
  width?: number;
  height?: number;
};

export default function ChartMock({ data = [8, 6, 5, 4, 3, 2, 1], width = 600, height = 160 }: ChartMockProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = ((max - d) / (max - min || 1)) * height;
    return [x, y];
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ');
  const areaD = `${pathD} L ${width} ${height} L 0 ${height} Z`;

  const strokePoints = points.map((p) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(' ');

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="160" preserveAspectRatio="none" className="rounded-md">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#g1)" />
        <polyline points={strokePoints} fill="none" stroke="#8b5cf6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r={3.5} fill="#a78bfa" />
        ))}
      </svg>
    </div>
  );
}
