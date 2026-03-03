"use client";

import { Box, TextField, Typography, MenuItem } from "@mui/material";
import { useField } from "formik";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  select?: boolean;
  options?: { label: string; value: string }[];
}

export function InputField({
  label,
  type = "text",
  select = false,
  options = [],
  ...props
}: InputFieldProps) {
  const [field, meta] = useField(props.name);

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          color: "#888",
          mb: "8px",
        }}
      >
        {label}
      </Typography>

      <TextField
        {...field}
        fullWidth
        select={select}
        type={type}
        size="small"
        error={Boolean(meta.touched && meta.error)}
        helperText={meta.touched && meta.error}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "43px",         
            width:450,        
            fontFamily: "DM Sans, sans-serif",
            fontSize: "18px",
            fontWeight: 700,
            borderRadius: "5px",
            boxSizing: "border-box",
          },
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            height: "43px",                
          },
        }}
      >
        {select &&
          options.map((opt) => (
            <MenuItem key={opt.value} value={opt.value}>
              {opt.label}
            </MenuItem>
          ))}
      </TextField>
    </Box>
  );
}
