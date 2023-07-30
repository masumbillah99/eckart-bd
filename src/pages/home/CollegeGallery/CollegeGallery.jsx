import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CollegeGallery = () => {
  const imgGallery = [
    {
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 1001,
    },
    {
      img: "https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 1002,
    },
    {
      img: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 1003,
    },
    {
      img: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      id: 1004,
    },
    {
      img: "https://images.unsplash.com/photo-1533854775446-95c4609da544?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
      id: 1005,
    },
    {
      img: "https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
      id: 1006,
    },
    {
      img: "https://images.unsplash.com/photo-1566055390950-e8334302c8cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      id: 1007,
    },
    {
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 1008,
    },
  ];

  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold">College Gallery</h1>
      <hr className="w-1/6 border-2 border-purple-600 mb-5 mt-2" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 rounded-xl">
        {imgGallery?.map((img) => (
          <Card sx={{ cursor: "pointer" }} key={img?.id}>
            <CardMedia
              sx={{ height: 200 }}
              image={img?.img}
              alt="image gallery"
              className="bg-slate-600 hover:bg-opacity-100 hover:scale-110 transition-all"
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollegeGallery;
