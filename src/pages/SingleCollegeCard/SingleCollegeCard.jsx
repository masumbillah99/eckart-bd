import { Container } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const SingleCollegeCard = () => {
  const collegeData = useLoaderData();
  //   console.log(collegeData);

  const {
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
          className="gap-5 items-center justify-between p-5 lg:p-0 lg:px-10 lg:py-10 hover:bg-gray-100"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h4"
                className="font-bold pb-2"
              >
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
        <Card className="p-7 lg:p-0 lg:px-10 lg:py-10 hover:bg-gray-100">
          <Box>
            <Typography component="div">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Admission Process:
              </Typography>
              <Typography variant="subtitle" className="">
                {admission_process} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error ab accusamus sed? Temporibus praesentium
                nihil, possimus saepe architecto unde id!
              </Typography>
            </Typography>

            <Typography component="div">
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
                  {admission_dates?.entrance_exam_date ? (
                    <>
                      <CheckCircleRoundedIcon sx={{ color: "#43a047" }} />{" "}
                      Entrance Exam: {admission_dates?.entrance_exam_date}
                    </>
                  ) : (
                    ""
                  )}
                </Typography>
                <Typography variant="span">
                  {admission_dates?.interview_date ? (
                    <>
                      <CheckCircleRoundedIcon sx={{ color: "#43a047" }} />{" "}
                      Interview Date: ${admission_dates?.interview_date}
                    </>
                  ) : (
                    ""
                  )}
                </Typography>
              </Typography>
            </Typography>

            <Typography component="div">
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

            <Typography component="div" sx={{ margin: "20px 0" }}>
              <h5 className="font-bold text-xl mb-3">Research Works: </h5>
              <div className="flex flex-col md:flex-row gap-3">
                {research_works?.map((work, index) => (
                  <div
                    className="p-5 rounded-lg bg-gradient-to-r from-orange-300 to-orange-500"
                    key={index}
                  >
                    <h4 className="text-xl font-mono font-bold">
                      {work?.research_title}
                    </h4>
                    <p className="flex items-center gap-2 py-2">
                      <MenuBookIcon /> {work?.research_area}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarMonthIcon /> {work?.research_published_date}
                    </p>
                  </div>
                ))}
              </div>
            </Typography>

            <Typography component="div">
              <h5 className="font-bold text-xl mb-3">College Events: </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {events?.map((work, index) => (
                  <div
                    className="p-5 rounded-lg bg-gradient-to-r from-orange-300 to-orange-500"
                    key={index}
                  >
                    <h4 className="text-xl font-mono font-bold">
                      {work?.event_name}
                    </h4>
                    <p className="flex items-center gap-2 py-2">
                      <MenuBookIcon /> {work?.event_venue}
                    </p>
                    <p className="flex items-center gap-2">
                      <CalendarMonthIcon /> {work?.event_date}
                    </p>
                    <p className="flex items-center gap-2">
                      <AccessTimeIcon /> {work?.event_time}
                    </p>
                  </div>
                ))}
              </div>
            </Typography>

            <Typography component="div" sx={{ margin: "20px 0" }}>
              <h5 className="font-bold text-xl mb-3">Sports: </h5>
              <div className="flex flex-row gap-5 font-mono font-bold">
                {sports_categories?.map((sport, index) => (
                  <p key={index}>
                    <SportsEsportsIcon /> {sport}
                  </p>
                ))}
              </div>
            </Typography>
          </Box>
        </Card>
        <Card>
          <CardMedia
            component="img"
            alt="college picture"
            image={college_image}
            sx={{ height: "400px" }}
            className=""
          />
        </Card>
      </div>
    </Container>
  );
};

export default SingleCollegeCard;
