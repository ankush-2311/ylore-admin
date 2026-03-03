"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./Modal";
import { DeleteAccountModalProps } from "@/utils/types/modal";

export default function DeleteAccountModal({
  isOpen,
  onClose,
  onConfirm,
}: DeleteAccountModalProps) {
  const [inputValue, setInputValue] = useState("");
 

  const handleConfirm = () => {
    if (inputValue === "DELETE") {
      onConfirm?.();
      handleClose();
    }
  };

  const handleClose = () => {
    onClose();
    setInputValue("");
   
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Box
        sx={{
          p: "24px",
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {/* CLOSE BUTTON */}
        <IconButton onClick={handleClose} sx={{ mb: 1 }}>
          <CloseIcon />
        </IconButton>

        <Box
          sx={{
            width: "100%",
            maxWidth: "380px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* ICON */}
          <Box
            sx={{
              width: "125px",
              height: "125px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src="https://api.builder.io/api/v1/image/assets/TEMP/8922d1ff41efbd6c248561c3ffd809e64fa7da3d?width=250"
              alt="Delete account"
              sx={{ width: "125px", height: "125px" }}
            />
          </Box>

          {/* TITLE */}
          <Box textAlign="center">
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 600,
                lineHeight: "150%",
                color: "#0A0A0A",
              }}
            >
              Delete Account
            </Typography>

            <Typography
              sx={{
                mt: 1,
                maxWidth: "308px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#737373",
                lineHeight: "150%",
              }}
            >
              Do you want to delete it permanently?
              <br />
              This action is irreversible!
            </Typography>
          </Box>

          {/* STEP 1 */}
          
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}>
              <Button
                onClick={handleConfirm}
                sx={{
                  height: "48px",
                  borderRadius: "999px",
                  backgroundColor: "#DE5454",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#c94848" },
                }}
              >
                Yes
              </Button>

              <Button
                onClick={handleClose}
                sx={{
                  height: "48px",
                  borderRadius: "999px",
                  backgroundColor: "#F6F5F5",
                  color: "#000",
                  fontSize: "18px",
                  fontWeight: 600,
                  textTransform: "none",
                }}
              >
                No
              </Button>
            </Box>
          

        
        </Box>
      </Box>
    </Modal>
  );
}