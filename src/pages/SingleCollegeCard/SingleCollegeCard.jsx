import { Container, Divider } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const SingleCollegeCard = () => {
  const collegeData = useLoaderData();
  //   console.log(collegeData);

  const {
    _id,
    college_logo,
    college_image,
    college_name,
    admission_process,
    admission_dates,
    research_history,
    research_works,
    sports_categories,
    events,
    location,
  } = collegeData;

  return (
    <Container maxWidth="xl">
      <div className="my-20 xl:w-2/3 mx-auto">
        <Card
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          className="gap-5 items-center justify-between p-5 lg:p-0 lg:px-20 lg:py-10"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h4" className="font-bold">
                {college_name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                officiis nobis illum rerum voluptatibus ipsum iusto magnam nulla
                libero reprehenderit. Vero a reiciendis placeat hic? Error
                quaerat dolore beatae molestiae?
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={college_logo}
            alt="college logo"
          />
        </Card>
        <br />
        <Card className="p-7 lg:p-0 lg:px-20 lg:py-10">
          <Box>
            <Typography variant="div">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Admission Process:
              </Typography>
              <Typography variant="subtitle" className="">
                {admission_process} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error ab accusamus sed? Temporibus praesentium
                nihil, possimus saepe architecto unde id!
              </Typography>
            </Typography>

            <Typography variant="div">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "10px" }}
              >
                Admission Date:
              </Typography>
              <Typography
                variant="subtitle"
                className="flex flex-col gap-3 pt-3"
              >
                <Typography variant="span">
                  <CheckCircleRoundedIcon sx={{ color: "#43a047" }} /> Admission
                  Start: {admission_dates?.application_start}
                </Typography>
                <Typography variant="span">
                  <CheckCircleRoundedIcon sx={{ color: "#43a047" }} /> Admission
                  End: {admission_dates?.application_end}
                </Typography>
                <Typography variant="span">
                  <CheckCircleRoundedIcon sx={{ color: "#43a047" }} /> Entrance
                  Exam: {admission_dates?.entrance_exam_date}
                </Typography>
                <Typography variant="span">
                  <CheckCircleRoundedIcon sx={{ color: "#43a047" }} /> Interview
                  Date: {admission_dates?.interview_date}
                </Typography>
              </Typography>
            </Typography>

            <Typography variant="div">
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginTop: "10px" }}
              >
                Research History:
              </Typography>
              <Typography variant="subtitle" className="">
                {research_history} Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Accusamus voluptate, dolore eos odit eaque ab.
              </Typography>
            </Typography>
          </Box>
        </Card>
      </div>
    </Container>
  );
};

export default SingleCollegeCard;
