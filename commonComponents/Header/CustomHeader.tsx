"use client";

import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomHeaderProps } from "@/utils/types/customHeaderType";

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
  const router = useRouter();

  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleCloseMenu();
    router.push("/user-profile"); 
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "20px 31px",
        mb: "30px",
        border: "1px solid #DBDBDB",
        borderRadius: "10px",
        marginTop: 4,
      }}
    >
      {/* LEFT */}
      <Box>
        {/* ✅ dynamic title */}
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            color: "#1A1A1A",
            textTransform: "capitalize",
            mb: "5px",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#636363",
            opacity: 0.8,
            lineHeight: 1.5,
          }}
        >
          Welcome back! Here's what's happening today.
        </Typography>
      </Box>

      {/* RIGHT */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "22px" }}>
        {/* PROFILE DROPDOWN */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={handleOpenMenu}
        >
          <Avatar
            src="https://api.builder.io/api/v1/image/assets/TEMP/2260f98d083d2fbc69db3f81dc67fd5248023175?width=60"
            sx={{ width: 30, height: 30 }}
          />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#1A1A1A",
              fontFamily: "Roboto",
            }}
          >
            John smith
          </Typography>
          <KeyboardArrowDownIcon sx={{ fontSize: "12px", color: "#1A1A1A" }} />
        </Box>

      

        {/* MENU */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default CustomHeader;
