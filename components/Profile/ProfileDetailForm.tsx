"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { InputField } from "./InputField";
import { primaryBtn, secondaryBtn } from "./userProfileStyle";
import { updateProfileSchema } from "@/utils/validationSchema/profileDetailSchema";



export function ProfileDetailsForm() {
  return (
    <Box sx={{ width: "100%" }}>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          role: "",
        }}
        validationSchema={updateProfileSchema}
        onSubmit={(values) => {
          console.log("Profile Submit:", values);
        }}
      >
        {({ handleChange, values, touched, errors }) => (
          <Form>
            <Paper
              elevation={0}
              sx={{
                padding: "30px",
                borderRadius: "10px",
                border: "1px solid #DBDBDB",
                height: "100%",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "30px",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: 700 }}>
                  Update Profile
                </Typography>

                <Stack direction="row" spacing={1.5}>
                  <Button type="submit" variant="contained" sx={primaryBtn}>
                    Update
                  </Button>
                  <Button type="reset" variant="outlined" sx={secondaryBtn}>
                    Cancel
                  </Button>
                </Stack>
              </Box>

              {/* Fields */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                  },
                  gap: "16px",
                }}
              >
                <InputField name="firstName" label="First Name" />
                <InputField name="lastName" label="Last Name" />
                <InputField name="email" label="Email" />
                <InputField name="phoneNumber" label="Phone Number" />

                {/* Role (full width) */}
                <Box sx={{ gridColumn: "1 / -1" }}>
                
                
  <InputField
    name="role"
    label="Role"
    select
    options={[
      { label: "Admin", value: "Admin" },
      { label: "User", value: "User" },
      { label: "Creator", value: "Creator" },
    ]}
  />
</Box>
                </Box>
            
            </Paper>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
