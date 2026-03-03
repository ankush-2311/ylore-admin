// components/StatCard.tsx
"use client";

import { Paper, Typography, Box } from "@mui/material";
import Image from "next/image";

import viewsIcon from "../../../../public/assets/user management/user details/views.svg";
import likesIcon from "../../../../public/assets/user management/user details/likes.svg";
import commentsIcon from "../../../../public/assets/user management/user details/comments.svg";
import shareIcon from "../../../../public/assets/user management/user details/share.svg";

interface Props {
  label: string;
  value: string;
}

const ICON_MAP: Record<string, any> = {
  views: viewsIcon,
  likes: likesIcon,
  comments: commentsIcon,
  shares: shareIcon,
};

export default function StatCard({ label, value }: Props) {
  const icon = ICON_MAP[label.toLowerCase()] ?? viewsIcon;

  return (
    <Paper
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 2,
        border: "1px solid #eee",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          backgroundColor: "#E3F6F9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 1,
        }}
      >
        <Image src={icon} alt={label} width={30} height={30} />
      </Box>

      <Typography fontWeight={700}>{value}</Typography>
      <Typography fontSize={12} color="text.secondary">
        {label}
      </Typography>
    </Paper>
  );
}
