"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Modal from "./Modal";

interface EditUserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: () => void;
}

export default function EditUserDetailsModal({
  isOpen,
  onClose,
  onSave,
}: EditUserDetailsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "24px",
          px: 5,
          py: 4,
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: 26, fontWeight: 600 }}>
            User Details
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              startIcon={<ArrowBackIosNewIcon sx={{ fontSize: 14 }} />}
              onClick={onClose}
              sx={{
                backgroundColor: "#D9F7FB",
                color: "#0A4A52",
                px: 3,
                py: 1,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { backgroundColor: "#C7F0F6" },
              }}
            >
              Back
            </Button>

            <Button
              onClick={onSave}
              sx={{
                backgroundColor: "#0FCCE6",
                color: "#fff",
                px: 4,
                py: 1,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { backgroundColor: "#0DB8D1" },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* CONTENT */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 6,
          }}
        >
          {/* LEFT PROFILE */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ position: "relative", backgroundColor: "white" }}>
              <Avatar
                src="https://via.placeholder.com/120"
                sx={{ width: 120, height: 120 }}
              />

              <IconButton
                sx={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  backgroundColor: "#D9F7FB",
                  width: 34,
                  height: 34,
                  "&:hover": { backgroundColor: "#C7F0F6" },
                }}
              >
                <EditIcon sx={{ fontSize: 18, color: "#0A4A52" }} />
              </IconButton>
            </Box>

            <Typography sx={{ fontSize: 18, fontWeight: 500 }}>Hi,</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 700 }}>
              John Smith
            </Typography>
          </Box>

          {/* RIGHT FORM */}
          {/* RIGHT FORM */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr",
              rowGap: 3,
            }}
          >
            {/* FULL NAME */}
            <Box>
              <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                <Typography sx={{ fontSize: 13, color: "#777" }}>
                  Full Name
                </Typography>
                <InfoOutlinedIcon sx={{ fontSize: 14, color: "#999" }} />
              </Box>

              <TextField
                fullWidth
                defaultValue="John Smith"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            {/* EMAIL */}
            <Box>
              <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                <Typography sx={{ fontSize: 13, color: "#777" }}>
                  Email
                </Typography>
                <InfoOutlinedIcon sx={{ fontSize: 14, color: "#999" }} />
              </Box>

              <TextField
                fullWidth
                defaultValue="j********@gmail.com"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>

            {/* STATUS */}
            <Box>
              <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                <Typography sx={{ fontSize: 13, color: "#777" }}>
                  Status
                </Typography>
                <InfoOutlinedIcon sx={{ fontSize: 14, color: "#999" }} />
              </Box>

              <TextField
                fullWidth
                defaultValue="Active"
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
