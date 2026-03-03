"use client";

import { Paper, Typography, Stack, Box, IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";

// ✅ Correct SVG imports
import placePinIcon from "@/public/assets/user management/user details/savedcontent/placepin.svg";
import bookIcon from "@/public/assets/user management/user details/savedcontent/boook.svg";
import commentIcon from "@/public/assets/user management/user details/savedcontent/placepin.svg";
import earthIcon from "@/public/assets/user management/user details/savedcontent/earth.svg";

export interface SavedContentItem {
  id: number;
  icon: any;
  title: string;
  subtitle: string;
  saved?: boolean;
}

export const recentActivityData: SavedContentItem[] = [
  {
    id: 1,
    icon: placePinIcon,
    title: "Published a new story",
    subtitle: "Exploring Tokyo streets",
    saved: true,
  },
  {
    id: 2,
    icon: bookIcon,
    title: "Liked a tour",
    subtitle: "Kyoto Heritage Walk",
    saved: false,
  },
  {
    id: 3,
    icon: commentIcon,
    title: "Commented on a post",
    subtitle: "Amazing experience!",
    saved: true,
  },
  {
    id: 4,
    icon: earthIcon,
    title: "Started following",
    subtitle: "John Smith",
    saved: false,
  },
];

export default function SavedContent() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F8F9FB",
      }}
    >
      <Typography fontWeight={600} mb={2}>
        Saved Content
      </Typography>

      <Stack spacing={2}>
        {recentActivityData.map((item) => (
          <Box
            key={item.id}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #EFEFEF",
              height:75,
            }}
          >
            {/* LEFT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {/* ICON */}
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

              {/* TEXT */}
              <Box>
                <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#000" }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: 12, color: "#777", lineHeight: 1.4 }}>
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>

            {/* RIGHT: BOOKMARK */}
            <IconButton size="small">
              {item.saved ? (
                <BookmarkIcon sx={{ color: "#4DB9C8" }} />
              ) : (
                <BookmarkBorderIcon sx={{ color: "#999" }} />
              )}
            </IconButton>
          </Box>
        ))}
      </Stack>
    </Paper>
  );
}
