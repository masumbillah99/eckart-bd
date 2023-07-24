import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import MuseumIcon from "@mui/icons-material/Museum";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Link } from "react-router-dom";

const CollegeCardData = ({ collegeData }) => {
  const {
    id,
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
    <Card>
      <CardMedia
        component="img"
        alt="college picture"
        image={college_image}
        sx={{ height: "250px", textAlign: "center" }}
        className="mx-auto"
      />
      <CardContent sx={{ padding: "40px" }}>
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
        <Typography sx={{ marginBottom: "5px", marginTop: "5px" }}>
          <MuseumIcon /> Admission: {admission_dates?.application_start} -{" "}
          {admission_dates?.application_end}
        </Typography>
        <Typography variant="div" className="flex items-center gap-3">
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
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained">
          <Link to={`/colleges/${id}`}>View Details</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CollegeCardData;
