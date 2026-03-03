"use client";

import Image from "next/image";
import { Paper, Typography, Stack, Box } from "@mui/material";

import editIcon from "@/public/assets/user management/user details/recent activity /newstory.svg";
import likeIcon from "@/public/assets/user management/user details/recent activity /likedtour.svg";
import commentIcon from "@/public/assets/user management/user details/recent activity /likedtour.svg";
import followIcon from "@/public/assets/user management/user details/recent activity /startedfollowing.svg"
import saveIcon from "@/public/assets/user management/user details/recent activity /savedplace.svg";

export interface RecentActivityItem {
  id: number;
  icon: any;
  title: string;
  subtitle: string;
  time: string;
}

export const recentActivityData: RecentActivityItem[] = [
  {
    id: 1,
    icon: editIcon,
    title: "Published a new story",
    subtitle: "Exploring Tokyo streets",
    time: "2h ago",
  },
  {
    id: 2,
    icon: likeIcon,
    title: "Liked a tour",
    subtitle: "Kyoto Heritage Walk",
    time: "3h ago",
  },
  {
    id: 3,
    icon: commentIcon,
    title: "Commented on a post",
    subtitle: "Amazing experience!",
    time: "5h ago",
  },
  {
    id: 4,
    icon: followIcon,
    title: "Started following",
    subtitle: "John Smith",
    time: "1d ago",
  },
  {
    id: 5,
    icon: saveIcon,
    title: "Saved a place",
    subtitle: "Mount Fuji Viewpoint",
    time: "2d ago",
  },
];

export default function RecentActivity() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight={600} mb={2}>
        Recent Activity
      </Typography>

      <Stack spacing={2.5}>
        {recentActivityData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* LEFT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* Icon */}
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  backgroundColor: "#EAF6F8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                />
              </Box>

              {/* Text */}
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#000" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>

            {/* RIGHT */}
            <Typography
              sx={{
                fontSize: 12,
                color: "#999",
                whiteSpace: "nowrap",
              }}
            >
              {item.time}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
