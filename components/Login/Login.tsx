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
} from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import ylore from "../../public/assets/logo.svg";
import eyeClosed from "../../public/assets/EyeClosed.svg";
import checkIcon from "../../public/assets/Checkbox.svg";
import { Checkbox, FormControlLabel } from "@mui/material";

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
  backButtonSx,
} from "./loginStyle";

const Login = () => {
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const dispatch = useDispatch();
  const [loginAdmin, { isLoading }] = useLoginAdminMutation();
  const { push } = useRouter();
  const isForgotLoading = false;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isForgetPassword) {
      try {
        const response = await loginAdmin({ email, password }).unwrap();
        const { token, user } = response;

        dispatch(setAuth({ token, user }));
        push("/dashboard");

        dispatch(
          showToast({
            message: "Login successful!",
            severity: "success",
          })
        );
      } catch (err) {
        const error = err as { status?: number };

        if (error?.status === 404) {
          dispatch(showToast({ message: "User not found", severity: "error" }));
          return;
        }
        if (error?.status === 401) {
          dispatch(
            showToast({ message: "Invalid credentials", severity: "error" })
          );
          return;
        }

        dispatch(showToast({ message: "Login failed", severity: "error" }));
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

          <Box component="form" onSubmit={handleSubmit} sx={formSx}>
            <Box>
              <Typography sx={labelSx}>
                Email <span style={{ color: "#AD0303" }}>*</span>
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={inputSx}
              />
            </Box>

            {isForgetPassword && (
              <Typography sx={helperTextSx}>
                Don’t remember your registered email? Reach out to our support
                team for further assistance.
              </Typography>
            )}

            {!isForgetPassword && (
              <Box>
                <Typography sx={labelSx}>
                  Password <span style={{ color: "#AD0303" }}>*</span>
                </Typography>

                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={inputSx}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((p) => !p)}>
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

            <Button type="submit" fullWidth sx={submitButtonSx}>
              {isLoading ? (
                <CircularProgress size={28} sx={{ color: "#fff" }} />
              ) : isForgetPassword ? (
                "Submit"
              ) : (
                "Login"
              )}
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
