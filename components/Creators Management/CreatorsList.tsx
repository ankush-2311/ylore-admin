"use client";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";

type CreatorStatus = "Approved" | "Pending";

interface Creator {
  id: number;
  name: string;
  email: string;
  followers: number;
  engagement: number;
  posts: number;
  earnings: number;
  status: CreatorStatus;
}

const creators: Creator[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 9.1,
    posts: 45,
    earnings: 342,
    status: "Approved",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 5.2,
    posts: 34,
    earnings: 142,
    status: "Pending",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 9.1,
    posts: 45,
    earnings: 342,
    status: "Approved",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 9.1,
    posts: 45,
    earnings: 342,
    status: "Approved",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 9.1,
    posts: 45,
    earnings: 342,
    status: "Approved",
  },
  {
    id: 3,
    name: "John Smith",
    email: "john@gmail.com",
    followers: 2235,
    engagement: 9.1,
    posts: 45,
    earnings: 342,
    status: "Approved",
  },
];

export default function CreatorsList() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ backgroundColor: "#fff", borderRadius: 2, p: 3 }}>
      {/* TABS */}
      <Typography fontWeight={600} fontSize={18} marginBottom={5}>Active Users</Typography>
     
     <SearchFilter placeholder="Search Creators"/>

      {/* LIST */}
      <Stack spacing={4} sx={{mt:5}}>
        {creators.map((creator) => (
          <Box
            key={creator.id}
            sx={{
              border: "1px solid #eee",
              borderRadius: 2,
              p: 2,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={8}>
              {/* LEFT */}
              <Stack direction="row" spacing={1.5} sx={{ minWidth: 220 }}>
                <Avatar />
                <Box>
                  <Typography fontWeight={600} fontSize={14}>
                    {creator.name}
                  </Typography>
                  <Typography fontSize={12} color="#777">
                    {creator.email}
                  </Typography>
                </Box>
              </Stack>

              <Divider orientation="vertical" flexItem />

              {/* METRICS */}
              <Metric label="Followers" value={creator.followers} />
              <Metric
                label="Engagement"
                value={`${creator.engagement}%`}
              />
              <Metric
                label="Content"
                value={`${creator.posts} posts`}
              />
              <Metric
                label="Earnings"
                value={`$${creator.earnings}`}
              />

              <Divider orientation="vertical" flexItem />

              {/* STATUS + ACTION */}
              <Stack direction="row" spacing={1} alignItems="center">
                <Chip
                  label={creator.status}
                  size="small"
                  sx={{
                    backgroundColor:
                      creator.status === "Approved"
                        ? "#E6F7ED"
                        : "#FFF7E6",
                    color:
                      creator.status === "Approved"
                        ? "#1B7F4C"
                        : "#A15C00",
                    fontSize: 11,
                  }}
                />

                {creator.status === "Pending" && (
                  <Stack direction="row" spacing={0.5}>
                    <CheckCircleIcon
                      sx={{ color: "#2e7d32", fontSize: 18 }}
                    />
                    <CancelIcon
                      sx={{ color: "#d32f2f", fontSize: 18 }}
                    />
                  </Stack>
                )}

                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    ml: 1,
                    textTransform: "none",
                    backgroundColor: "#12C2E9",
                    fontSize: 12,
                    borderRadius: 2,
                  }}
                >
                  View Profile
                </Button>
              </Stack>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

/* METRIC SUB COMPONENT */
function Metric({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography fontWeight={600} fontSize={14}>
        {value}
      </Typography>
      <Typography fontSize={11} color="#777">
        {label}
      </Typography>
    </Box>
  );
}
