// components/EngagementChart.tsx
"use client";

import { Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  ReferenceLine,
} from "recharts";

const data = [
  { month: "Jan", value: 200 },
  { month: "Feb", value: 100 },
  { month: "Mar", value: 150 },
  { month: "Apr", value: 300 },
  { month: "May", value: 180 },
  { month: "Jun", value: 500 },
  { month: "Jul", value: 420 },
  { month: "Aug", value: 300 },
  { month: "Sep", value: 450 },
  { month: "Oct", value: 520 },
];

export default function EngagementChart() {
  return (
    <Box sx={{ height: 260 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* Gradient for light area shading */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          {/* Dotted blue reference line */}
          <ReferenceLine
            y={300}
            stroke="#3B82F6"
            strokeDasharray="4 4"
          />

          {/* Light shaded area */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#areaGradient)"
          />

          {/* Main line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#000"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
