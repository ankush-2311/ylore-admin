"use client";

import FilterListIcon from "@mui/icons-material/FilterList";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";
import React from "react";

interface SearchFilterProps {
  placeholder?: string;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  placeholder = "Search",
}) => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={3.75}
      sx={{
        width: "100%",
        maxWidth: "2000px",
        px: 0.5,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ width: "100%" }}
      >
        {/* Search Input */}
        <Autocomplete
          options={[]}
          freeSolo
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              backgroundColor: "#fff",
              borderRadius: "7px",
              height: "40px",
              paddingTop: 0,
              paddingBottom: 0,
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder={placeholder}
              variant="outlined"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#dadada",
                  },
                  "&:hover fieldset": {
                    borderColor: "#dadada",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#dadada",
                  },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#828282",
                  opacity: 1,
                  fontSize: "12px",
                  fontFamily: "DM Sans, Helvetica",
                },
              }}
            />
          )}
        />

        {/* Filters */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ cursor: "pointer", whiteSpace: "nowrap" }}
        >
          <FilterListIcon sx={{ width: 14, height: 14 }} />
          <Typography
            sx={{
              fontFamily: "DM Sans, Helvetica",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            Filters
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SearchFilter;
