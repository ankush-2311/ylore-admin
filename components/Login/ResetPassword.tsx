"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Card,
  InputAdornment,
  IconButton,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Formik } from "formik";

import ylore from "../../public/assets/logo.svg";
import eyeClosed from "../../public/assets/EyeClosed.svg";
import checkIcon from "../../public/assets/Checkbox.svg";

import {
  pageWrapperSx,
  cardSx,
  logoBoxSx,
  headerBoxSx,
  titleSx,
  subtitleSx,
  formSx,
  labelSx,
  inputSx,
  submitButtonSx,
  checkboxRowSx,
  checkboxControlSx,
  checkboxLabelTextSx,
  checkboxLinkTextSx,
} from "./loginStyle";
import {  resetPasswordValidationSchema } from "./validationschema";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={pageWrapperSx}>
      <Container maxWidth="sm">
        <Card sx={cardSx}>
          <Box sx={logoBoxSx}>
            <Image src={ylore} alt="Ylore Logo" width={57} height={87} />
          </Box>

          <Box sx={headerBoxSx}>
            <Typography sx={titleSx}>Forgot Password</Typography>
            <Typography sx={subtitleSx}>
              Secure password recovery <br />
              Enter your registered email to receive reset instructions.
            </Typography>
          </Box>

          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
              termsAgreed: false,
            }}
           
            validationSchema={resetPasswordValidationSchema}
            validateOnBlur
            validateOnChange
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit , handleBlur }) => (
              <Box component="form" onSubmit={handleSubmit} sx={formSx}>
                {/* New Password */}
                <Box>
                  <Typography sx={labelSx}>New Password *</Typography>
                  <TextField
                    fullWidth
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    value={values.password}
                     onBlur={handleBlur}
                    
                    onChange={handleChange}
                    sx={inputSx}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((p) => !p)}
                          >
                            <Image
                              src={eyeClosed}
                              alt="toggle"
                              width={20}
                              height={20}
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {touched.password && errors.password && (
                    <Typography color="error" fontSize="12px" mt={0.5}>
                      {errors.password}
                    </Typography>
                  )}
                </Box>

                {/* Confirm Password */}
                <Box>
                  <Typography sx={labelSx}>Confirm Password *</Typography>
                  <TextField
                    fullWidth
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••"
                    value={values.confirmPassword}
                     onBlur={handleBlur}
                    onChange={handleChange}
                    sx={inputSx}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Typography color="error" fontSize="12px" mt={0.5}>
                      {errors.confirmPassword}
                    </Typography>
                  )}
                </Box>

                {/* Terms */}
                <Box sx={checkboxRowSx}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="termsAgreed"
                        checked={values.termsAgreed}
                        onChange={handleChange}
                        checkedIcon={
                          <Image
                            src={checkIcon}
                            alt="checked"
                            width={18}
                            height={18}
                          />
                        }
                        sx={checkboxControlSx}
                      />
                    }
                    label={
                      <Typography sx={checkboxLabelTextSx}>
                        I agree to{" "}
                        <Typography component="span" sx={checkboxLinkTextSx}>
                          Terms of Service
                        </Typography>{" "}
                        &{" "}
                        <Typography component="span" sx={checkboxLinkTextSx}>
                          Privacy Policy
                        </Typography>
                      </Typography>
                    }
                  />
                </Box>

                {touched.termsAgreed && errors.termsAgreed && (
                  <Typography color="error" fontSize="12px">
                    {errors.termsAgreed}
                  </Typography>
                )}

                <Button type="submit" fullWidth sx={submitButtonSx}>
                  Submit
                </Button>
              </Box>
            )}
          </Formik>
        </Card>
      </Container>
    </Box>
  );
};

export default ResetPassword;
