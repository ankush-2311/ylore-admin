import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Box } from "@mui/material";

const CustomHeaderSkeleton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Skeleton circle height={32} width={32} />
      <Skeleton height={24} width={100} />
      <Skeleton height={24} width={20} />
    </Box>
  );
};

export default CustomHeaderSkeleton;
