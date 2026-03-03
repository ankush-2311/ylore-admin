"use client";

import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Container,
  Card,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Formik } from "formik";

import { useDispatch } from "react-redux";

import ylore from "../../public/assets/logo.svg";
import eyeClosed from "../../public/assets/EyeClosed.svg";
import checkIcon from "../../public/assets/Checkbox.svg";

import { useLoginAdminMutation } from "@/redux/apis/authApi";
import { setAuth } from "@/redux/slices/authSlice";
import { showToast } from "@/redux/slices/toastSlice";

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
  helperTextSx,
  checkboxRowSx,
  forgotTextSx,
  submitButtonSx,
} from "./loginStyle";
import { getValidationSchema } from "./validationschema";

const Login = () => {
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const DUMMY_OTP = "123456";

  const dispatch = useDispatch();
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const { push } = useRouter();

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }

    // AUTO VERIFY WHEN 6 DIGITS ENTERED
    const enteredOtp = updatedOtp.join("");
    if (enteredOtp.length === 6) {
      if (enteredOtp === DUMMY_OTP) {
        setOtpVerified(true);
        dispatch(
          showToast({
            message: "OTP verified successfully",
            severity: "success",
          })
        );
      } else {
        setOtpVerified(false);
        dispatch(
          showToast({
            message: "Invalid OTP",
            severity: "error",
          })
        );
      }
    }
  };

  return (
    <Box sx={pageWrapperSx}>
      <Container maxWidth="sm">
        <Card sx={cardSx}>
          <Box sx={logoBoxSx}>
            <Image src={ylore} alt="Ylore Logo" width={57} height={87} />
          </Box>

          <Box sx={headerBoxSx}>
            <Typography sx={titleSx}>
              {isForgetPassword ? "Forgot Password" : "Sign in"}
            </Typography>
            <Typography sx={subtitleSx}>
              {isForgetPassword ? (
                <>
                  Secure password recovery <br />
                  Enter your registered email to receive reset instructions.
                </>
              ) : (
                <>
                  Welcome to the Admin Portal <br />
                  Authenticate to manage content, users, and platform workflows
                </>
              )}
            </Typography>
          </Box>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={getValidationSchema(isForgetPassword)}
            validateOnBlur
            validateOnChange
            onSubmit={async (values) => {
              if (!isForgetPassword) {
                try {
                  const response = await loginAdmin({
                    email: values.email,
                    password: values.password,
                  }).unwrap();

                  dispatch(setAuth(response));
                  push("/dashboard");

                  dispatch(
                    showToast({
                      message: "Login successful!",
                      severity: "success",
                    })
                  );
                } catch (err: any) {
                  dispatch(
                    showToast({
                      message: "Login failed",
                      severity: "error",
                    })
                  );
                }
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <Box component="form" onSubmit={handleSubmit} sx={formSx}>
                {/* Email */}
                <Box>
                  <Typography sx={labelSx}>
                    Email <span style={{ color: "#AD0303" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    name="email"
                    placeholder="Enter your Email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    sx={inputSx}
                  />

                  <Box display="flex" justifyContent="flex-end" mt={0.5}>
                    <Typography
                      fontSize="13px"
                      fontWeight={500}
                      color="#2BBED6"
                      sx={{ cursor: "pointer" }}
                      onClick={() => setOtpSent(true)}
                    >
                      Send OTP
                    </Typography>
                  </Box>

                  {touched.email && errors.email && (
                    <Typography color="error" fontSize="12px" mt={0.5}>
                      {errors.email}
                    </Typography>
                  )}
                </Box>

                {isForgetPassword && (
                  <Typography sx={helperTextSx}>
                    Don’t remember your registered email? Reach out to our
                    support team for further assistance.
                  </Typography>
                )}

                {!isForgetPassword && (
                  <Box>
                    <Typography sx={labelSx}>
                      Password <span style={{ color: "#AD0303" }}>*</span>
                    </Typography>
                    <TextField
                      fullWidth
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
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

                    <Box sx={checkboxRowSx}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={keepSignedIn}
                            onChange={() => setKeepSignedIn((k) => !k)}
                            checkedIcon={
                              <Image
                                src={checkIcon}
                                alt="checked"
                                width={18}
                                height={18}
                              />
                            }
                          />
                        }
                        label="Keep me signed in"
                      />

                      <Typography
                        sx={forgotTextSx}
                        onClick={() => setIsForgetPassword(true)}
                      >
                        Forgot password?
                      </Typography>
                    </Box>
                  </Box>
                )}

                {/* OTP SECTION — EXACT DESIGN */}
                {otpSent && (
                  <Box mt={1.5}>
                    <Typography fontSize="14px" fontWeight={500} mb={1}>
                      Enter OTP sent to abc***@gmail.com{" "}
                      <span style={{ color: "#AD0303" }}>*</span>
                    </Typography>

                    <Box display="flex" gap={4}>
                      {otp.map((digit, index) => (
                        <TextField
                          key={index}
                          id={`otp-${index}`}
                          value={digit}
                          onChange={(e) =>
                            handleOtpChange(e.target.value, index)
                          }
                          inputProps={{
                            maxLength: 1,
                            style: {
                              textAlign: "center",
                              fontSize: "16px",
                              fontWeight: 600,
                            },
                          }}
                          sx={{
                            width: 52,
                            height: 44,
                            "& .MuiOutlinedInput-root": {
                              height: 44,
                              borderRadius: "22px",
                              backgroundColor: "#F9FEFF",
                              "& fieldset": {
                                border: "1.5px solid #4DB9C8",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#4DB9C8",
                              },
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}

                <Button
                  type="submit"
                  fullWidth
                  sx={submitButtonSx}
                  disabled={!otpVerified}
                >
                  {isLoading ? (
                    <CircularProgress size={28} sx={{ color: "#fff" }} />
                  ) : isForgetPassword ? (
                    "Submit"
                  ) : (
                    "Login"
                  )}
                </Button>
              </Box>
            )}
          </Formik>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
