"use client";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { InputField } from "./InputField";
import { primaryBtn, secondaryBtn } from "./userProfileStyle";
import { PasswordSchema } from "@/utils/validationSchema/profileDetailSchema";



export function UpdatePasswordForm() {
  return (
    <Box sx={{ width: "100%" }}>
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={PasswordSchema}
        onSubmit={(values) => {
          console.log("Password Submit:", values);
        }}
      >
        {() => (
          <Form>
            <Paper
              elevation={0}
              sx={{
                padding: "30px",
                borderRadius: "10px",
                border: "1px solid #DBDBDB",
                mt: "30px",
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
                  Update Password
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
                {/* Full width */}
                <Box sx={{ gridColumn: "1 / -1" }}>
                  <InputField
                    name="currentPassword"
                    label="Current Password"
                    type="password"
                  />
                </Box>

                {/* Two columns */}
                <InputField
                  name="newPassword"
                  label="New Password"
                  type="password"
                />

                <InputField
                  name="confirmPassword"
                  label="Confirm New Password"
                  type="password"
                />
              </Box>
            </Paper>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
