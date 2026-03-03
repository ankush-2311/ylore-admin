"use client";

import { ModalProps } from "@/utils/types/modal";
import { Box } from "@mui/material";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: "16px",
        backdropFilter: "blur(4px)",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "auto",
          minWidth:500,
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
