import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import React from "react";

const userData = {
  name: "John Smith",
  status: "Active",
  bio: "Travel enthusiast and food lover. Exploring the world one city at a time 🌍✨",
  email: "smith.john683@gmail.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  lastActive: "22.12.2024",
  memberSince: "22.12.2024",
  profileImage: "https://via.placeholder.com/107",
};

const statsData = [
  { value: "2235", label: "Followers" },
  { value: "535", label: "Following" },
  { value: "45", label: "Posts" },
  { value: "0", label: "Reports" },
];

const ProfileDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        border: "1px solid #dadada",
        padding: "27px 4px",
        maxWidth: "1520px",
        mt:4
      }}
    >
     <Stack direction="row" spacing={3.25} alignItems="center">
      <Avatar
  src={userData.profileImage}
  alt={userData.name}
  sx={{
    width: 108,
    height: 108,
    flexShrink: 0,   
  }}
/>

      <Stack spacing={1.75} sx={{ width: 814 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack spacing={0.75} sx={{ width: 485 }}>
            <Stack direction="row" spacing={0.625} alignItems="center">
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "DM Sans, Helvetica",
                  fontWeight: 600,
                  fontSize: 18,
                  lineHeight: "20.4px",
                  color: "#1a1a1a",
                }}
              >
                {userData.name}
              </Typography>

              <VerifiedIcon sx={{ width: 20, height: 20, color: "#1DA1F2" }} />

              <Chip
                label={userData.status}
                size="small"
                sx={{
                  height: "auto",
                  backgroundColor: "#d2ffdf",
                  color: "#115425",
                  fontSize: 8,
                  fontFamily: "DM Sans, Helvetica",
                  fontWeight: 400,
                  borderRadius: "53.19px",
                  px: 0.665,
                  py: 0.333,
                  "& .MuiChip-label": {
                    px: 0,
                  },
                }}
              />
            </Stack>

            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "normal",
                color: "#828282",
                opacity: 0.8,
              }}
            >
              {userData.bio}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <Button
              variant="contained"
              startIcon={<SendIcon sx={{ width: 16, height: 16 }} />}
              sx={{
                width: 133,
                height: 32,
                backgroundColor: "#0fcce6",
                color: "white",
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "none",
                borderRadius: "10px",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  backgroundColor: "#0db8d1",
                },
              }}
            >
              Send Email
            </Button>

            <Button
              variant="contained"
              startIcon={
                <PauseCircleOutlineIcon sx={{ width: 16, height: 16 }} />
              }
              sx={{
                width: 133,
                height: 32,
                backgroundColor: "#e3f2fd",
                color: "#1976d2",
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 500,
                fontSize: 14,
                textTransform: "none",
                borderRadius: "10px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#bbdefb",
                  boxShadow: "none",
                },
              }}
            >
              Suspend
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={6}>
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailOutlinedIcon
              sx={{ width: 16, height: 16, color: "#828282" }}
            />
            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 12,
                color: "#828282",
              }}
            >
              {userData.email}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneOutlinedIcon
              sx={{ width: 16, height: 16, color: "#828282" }}
            />
            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 12,
                color: "#828282",
              }}
            >
              {userData.phone}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <LocationOnOutlinedIcon
              sx={{ width: 16, height: 16, color: "#828282" }}
            />
            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 12,
                color: "#828282",
              }}
            >
              {userData.location}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={4.5}>
          <Stack spacing={0.5} sx={{ width: 102 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 12,
                color: "#828282",
              }}
            >
              Last Active
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayOutlinedIcon
                sx={{ width: 16, height: 16, color: "#828282" }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Sans, Helvetica",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#1a1a1a",
                }}
              >
                {userData.lastActive}
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={0.5} sx={{ width: 102 }}>
            <Typography
              sx={{
                fontFamily: "DM Sans, Helvetica",
                fontWeight: 400,
                fontSize: 12,
                color: "#828282",
              }}
            >
              Member Since
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarTodayOutlinedIcon
                sx={{ width: 16, height: 16, color: "#828282" }}
              />
              <Typography
                sx={{
                  fontFamily: "DM Sans, Helvetica",
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#1a1a1a",
                }}
              >
                {userData.memberSince}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>

      <Stack
          direction="row"
          spacing={38}
          alignItems="center"
          justifyContent="center"
          mt={5}
        >
          {statsData.map((stat, index) => (
            <Stack key={index} spacing={1.25} alignItems="center">
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontWeight: 700,
                  fontSize: "30px",
                  lineHeight: "30px",
                  color: "#17181a",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  lineHeight: "19px",
                  color: "#070707",
                }}
              >
                {stat.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      
    </Box>
  );
}

export default ProfileDetails;