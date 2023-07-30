import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import SchoolIcon from "@mui/icons-material/School";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const CollegeCardData = ({ collegeData }) => {
  const {
    _id,
    college_image,
    college_name,
    admission_dates,
    research_history,
    sports_categories,
    events,
    location,
  } = collegeData;

  //   console.log(collegeData);

  return (
    <Card
      sx={{
        position: "relative",
        height: {
          xs: "550px",
          sm: "550px",
          // md: "550px",
          // lg: "550px",
          xl: "540px",
          padding: "0 0 40px",
        },
      }}
    >
      <CardMedia
        component="img"
        alt="college picture"
        image={college_image}
        sx={{ height: "250px", textAlign: "center" }}
        className="mx-auto"
      />
      <CardContent sx={{ padding: { sm: "10px", lg: "40px" } }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {college_name}
        </Typography>
        <Typography>{research_history}</Typography>
        <Typography sx={{ marginBottom: "5px", marginTop: "5px" }}>
          <LocationOnIcon sx={{ color: "#0D1E70" }} /> {location}
        </Typography>
        <Typography className="flex items-center gap-3">
          <SchoolIcon /> Admission: {admission_dates?.application_start} --{" "}
          {admission_dates?.application_end}
        </Typography>
        {/* <Typography variant="div" className="flex items-center gap-3">
          <SportsEsportsIcon />
          {sports_categories?.slice(0, 3)?.map((evs, index) => (
            <Typography className="" variant="body1" key={index}>
              {evs}
              {","}
            </Typography>
          ))}
        </Typography>
        <Typography variant="div">
          <EventNoteRoundedIcon /> Events:
          <br />
          {events?.map((evs, index) => (
            <Typography className="pl-10" variant="body1" key={index}>
              {index + 1}. {evs?.event_name}
            </Typography>
          ))}
        </Typography> */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: { xs: "10px", sm: "20px", md: "20px", lg: "10px" },
            right: { xs: "10px", md: "20px", lg: "40px" },
            left: { xs: "10px", md: "20px", lg: "40px" },
          }}
          className=""
          // className="w-80 lg:w-96 h-10"
        >
          <Link to={`/colleges/${_id}`} className="w-full">
            View Details
          </Link>
        </Button>
      </CardContent>
      {/* <CardActions sx={{ padding: "0 40px" }}>
        <Button variant="contained">
          <Link to={`/colleges/${_id}`}>View Details</Link>
        </Button>
      </CardActions> */}
    </Card>
  );
};

export default CollegeCardData;
