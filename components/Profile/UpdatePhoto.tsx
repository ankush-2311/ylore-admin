"use client";

import React, { useRef, useState } from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ProfileImage from "@/public/demoProfile.svg";
import UpdatePhotoSkeleton from "@/utils/skeleton/UpdatePhotoSkeleton";

const UpdatePhoto = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const adminUser = {
    first_name: "John",
    last_name: "Doe",
    profile: "",
  };

  const imageSrc =
    previewImage || adminUser?.profile || (ProfileImage as unknown as string);

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setPreviewImage(previewUrl);

  };

  if (!adminUser) return <UpdatePhotoSkeleton />;

  return (
    <Box sx={{ width: "90%" }}>
      <Paper
        elevation={0}
        sx={{
          p: "20px",
          borderRadius: "10px",
          border: "1px solid #DBDBDB",
          minHeight: 370,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          gap: "14px",
        }}
      >
        {/* Avatar Wrapper */}
        <Box
          sx={{
            position: "relative",
            cursor: "pointer",
          }}
          onClick={handleChooseFile}
        >
          <Avatar
            src={imageSrc}
            sx={{
              width: { xs: 140, sm: 170, md: 182 },
              height: { xs: 140, sm: 170, md: 182 },
              border: "2px solid #E5E5E5",
            }}
          />

          {/* Edit Icon */}
          <Box
            sx={{
              position: "absolute",
              bottom: 6,
              right: 6,
              width: 34,
              height: 34,
              backgroundColor: "#4DB9C8",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <EditIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          hidden
          accept="image/*"
          onChange={handleFileChange}
        />

        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            fontWeight: 600,
            color: "#222",
            fontFamily: "DM Sans, sans-serif",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          Hi, {adminUser.first_name} {adminUser.last_name}
        </Typography>
      </Paper>
    </Box>
  );
};

export default UpdatePhoto;
