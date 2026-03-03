// components/EngagementOverview.tsx
import { Box, Paper, Typography } from "@mui/material";
import StatCard from "./StatCard";
import EngagementChart from "./EngagementChart";

export default function EngagementOverview() {
  return (
    <Paper sx={{ p: 3, mb: 3, borderRadius: 2 , mt:4 }}>
      <Typography fontWeight={600} mb={2}>
        Engagement Overview
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <StatCard label="Views" value="2235" />
        <StatCard label="Likes" value="1068" />
        <StatCard label="Comments" value="153" />
        <StatCard label="Shares" value="92" />
      </Box>

      <EngagementChart />
    </Paper>
  );
}
