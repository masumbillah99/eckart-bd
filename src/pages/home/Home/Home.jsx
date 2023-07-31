import { Button, Container, TextField } from "@mui/material";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeGallery from "../CollegeGallery/CollegeGallery";

const Home = () => {
  return (
    <Container maxWidth="xl">
      {/* college card section */}
      <CollegeCard />

      {/* college gallery section */}
      <CollegeGallery />
    </Container>
  );
};

export default Home;
