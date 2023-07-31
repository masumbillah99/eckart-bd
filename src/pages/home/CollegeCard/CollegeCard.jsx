import { Button, Container, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import CollegeCardData from "./CollegeCardData";

const CollegeCard = () => {
  const [collegesData, setCollegesData] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/colleges`)
      .then((res) => res.json())
      .then((data) => setCollegesData(data));
  }, []);

  const handleSearch = () => {
    fetch(`${import.meta.env.VITE_SERVER}/searchCollege/${searchText}`)
      .then((res) => res.json())
      .then((data) => setCollegesData(data));
  };

  return (
    <Container maxWidth="xl" className="my-10">
      <div className="mb-10 flex flex-col md:flex-row justify-center gap-12 md:gap-5">
        <TextField
          onChange={(e) => setSearchText(e.target.value)}
          id="outlined-basic"
          variant="outlined"
          placeholder="search your favorite college name"
          className="w-full md:w-3/4 lg:w-1/2 h-5"
        />
        <Button
          onClick={handleSearch}
          type="submit"
          variant="contained"
          color="success"
          className="h-14 md:w-36 lg:w-32"
        >
          SEARCH
        </Button>
      </div>

      <h1 className="text-2xl font-bold">Feature College</h1>
      <hr className="w-1/6 border-2 border-purple-600 mb-5 mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {collegesData?.map((collegeData) => (
          <CollegeCardData key={collegeData?._id} collegeData={collegeData} />
        ))}
      </div>
    </Container>
  );
};

export default CollegeCard;
