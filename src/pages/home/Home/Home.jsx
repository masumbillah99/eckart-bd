import { Button, Container, TextField } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import CollegeCard from "../CollegeCard/CollegeCard";
import CollegeGallery from "../CollegeGallery/CollegeGallery";

const Home = () => {
  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCollegesData(data));
  }, []);

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
      <h1 className="text-2xl font-bold">College Section</h1>
      <hr className="w-1/6 border-2 border-purple-600 mb-5 mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegesData?.map((collegeData) => (
          <CollegeCard key={collegeData?.id} collegeData={collegeData} />
        ))}
      </div>

      {/* college gallery section */}
      <CollegeGallery />
    </Container>
  );
};

export default Home;
