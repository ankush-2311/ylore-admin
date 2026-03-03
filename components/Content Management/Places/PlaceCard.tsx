"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarIcon from "@mui/icons-material/Star";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useState } from "react";
import DeleteAccountModal from "@/modals/DeleteAccountModal";

export interface PlaceCardProps {
  image: string;
  title: string;
  location: string;
  category: string;
  rating: number;
  reviews: number;
  visitors: number;
}

const PlaceCard = ({
  image,
  title,
  location,
  category,
  rating,
  reviews,
  visitors,
}: PlaceCardProps) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleDelete = () => {
    console.log("User deleted");
    
  };

  return (
   <>
      <Card
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Image */}
        <CardMedia component="img" height="160" image={image} alt={title} />

        <CardContent sx={{ p: 2.5 }}>
          {/* Title */}
          <Typography fontSize={18} fontWeight={600}>
            {title}
          </Typography>

          {/* Stats & Buttons omitted for brevity */}

          {/* Actions */}
          <Stack direction="row" spacing={1.5} mt={2}>
            <Button
              fullWidth
              startIcon={<VisibilityOutlinedIcon />}
              sx={{
                backgroundColor: "#00C6E6",
                color: "#fff",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              View
            </Button>

            <Button
              fullWidth
              startIcon={<EditOutlinedIcon />}
              sx={{
                backgroundColor: "#E6F7FB",
                color: "#000",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Edit
            </Button>

            {/* DELETE ICON */}
            <Button
              onClick={() => setOpenDeleteModal(true)}
              sx={{
                minWidth: 44,
                borderRadius: "10px",
                border: "1px solid #FF5A5A",
                color: "#FF5A5A",
                "&:hover": { backgroundColor: "#FFECEC" },
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* DELETE MODAL */}
      <DeleteAccountModal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default PlaceCard;
