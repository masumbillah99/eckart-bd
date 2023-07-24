import { Button, Container, TextField } from "@mui/material";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeGallery from "../CollegeGallery/CollegeGallery";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <div className="my-5 flex flex-col md:flex-row justify-center gap-12 md:gap-5">
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="search your favorite college name"
          className="w-full md:w-3/4 lg:w-1/2 h-5"
        />
        <Button
          type="submit"
          variant="contained"
          color="success"
          className="h-14 md:w-36 lg:w-32"
        >
          SEARCH
        </Button>
      </div>

      {/* college card section */}
      <CollegeCard />

      {/* college gallery section */}
      <CollegeGallery />
    </Container>
  );
};

export default Home;
