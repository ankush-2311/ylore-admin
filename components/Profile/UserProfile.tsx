"use client";

import { Box } from "@mui/material";
import UpdatePhoto from "./UpdatePhoto";

import CustomHeader from "@/commonComponents/Header/CustomHeader";
import { ProfileDetailsForm } from "./ProfileDetailForm";
import { UpdatePasswordForm } from "./UpdatePassowordForm";

const UserProfile = () => {
  return (
    <Box sx={{ padding: "0 1.7rem" }}>
      <CustomHeader title="User Profile" />
      <Box
        sx={{
          mt: 3,
        }}
      >
  <Box
  sx={{
    display: "flex",
    width: "100%",
    gap: "16px",         
    alignItems: "stretch",
  }}
>
  {/* LEFT: IMAGE */}
  <Box
    sx={{
      flex: "0 0 25%",
    }}
  >
    <UpdatePhoto />
  </Box>

  {/* RIGHT: FORM */}
  <Box
    sx={{
      flex: "1 1 auto",
    }}
  >
    <ProfileDetailsForm />
  </Box>
</Box>

        <UpdatePasswordForm />
      </Box>
    </Box>
  );
};

export default UserProfile;
