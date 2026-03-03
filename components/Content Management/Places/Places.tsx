import CustomHeader from "@/commonComponents/Header/CustomHeader";
import SearchFilter from "@/commonComponents/Search Filter/SearchFilter";
import { Box } from "@mui/material";
import PlaceCard from "./PlaceCard";

const Places = () => {


 const statCardsData = Array.from({ length: 6 }).map((_, i) => ({
  image:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  title: "NYC Public Library",
  location: "Manhattan, NY",
  category: "Library",
  rating: 4.8,
  reviews: 325,
  visitors: 1234,
}));


  return (
    <Box sx={{ padding: "0 1.5rem" }}>
      <CustomHeader title="Places" />
      <SearchFilter placeholder="Search Places" />
        <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        gap: 3,
        marginTop: 4,
      }}
    >
      {statCardsData.map((item, index) => (
        <PlaceCard key={index} {...item} />
      ))}
    </Box>
    </Box>
  );
};

export default Places