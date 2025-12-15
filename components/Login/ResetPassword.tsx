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

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

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

          <Box component="form" onSubmit={handleSubmit} sx={formSx}>
            {/* New Password */}
            <Box>
              <Typography sx={labelSx}>New Password *</Typography>
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
                        <Image src={eyeClosed} alt="toggle" width={20} height={20} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Confirm Password */}
            <Box>
              <Typography sx={labelSx}>Confirm Password *</Typography>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={inputSx}
              />
            </Box>

            {/* Terms Checkbox */}
            <Box sx={checkboxRowSx}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsAgreed}
                    onChange={() => setTermsAgreed((k) => !k)}
                    checkedIcon={
                      <Image src={checkIcon} alt="checked" width={18} height={18} />
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

            <Button type="submit" fullWidth sx={submitButtonSx}>
              Submit
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default ResetPassword;
