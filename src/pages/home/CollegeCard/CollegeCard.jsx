import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import CollegeCardData from "./CollegeCardData";

const CollegeCard = () => {
  const [collegesData, setCollegesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/colleges")
      .then((res) => res.json())
      .then((data) => setCollegesData(data));
  }, []);

  return (
    <Container maxWidth="xl" className="my-10">
      <h1 className="text-2xl font-bold">College Section</h1>
      <hr className="w-1/6 border-2 border-purple-600 mb-5 mt-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collegesData?.map((collegeData) => (
          <CollegeCardData key={collegeData?.id} collegeData={collegeData} />
        ))}
      </div>
    </Container>
  );
};

export default CollegeCard;
