"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Dating App Admin Panel",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Created a web application an adult dating platform facilitating client-provider matchmaking",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Bowling Web Application",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Developed a bowling game website featuring live scoring for multiple leagues and teams",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Essential Apartment Parking",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Designed and executed a multi-story commercial real estateproject catering to diverse businesses on a rental basis",
    url: "https://github.com/nazirali007/Essential-Apartment-Parking",
  },
  {
    name: "Buy And Sell Web Admin Panel",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Discover great deals on pre-owned items and for sellers to connect with a wide audience of potential buyers",
    url: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
  },
  {
    name: "Social Media",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Our personal social media application offers a private, secure, and user-friendly space to connect with close friends and family .",
    url: "https://github.com/nazirali007/Social-Media-Web-Application",
  },
];

export default function CardSection() {
  //   const navigate = useNavigate();
  const router = useRouter();

  const handleCardClick = (url: string) => {
    // navigate(url);
    router.push(url);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {projects.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card
              sx={{
                minWidth: {
                  xs: "100%", // 100% width on extra-small screens
                  sm: 250, // 250px width on small screens and above
                  cursor: "pointer",
                },
                maxWidth: 500, // max width of 500px on larger screens
                borderRadius: "0.6rem",
                backgroundImage:
                  "url(https://www.split.io/wp-content/uploads/Blog-2160x1080_GitandGitHubatWork-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                height: {
                  xs: "auto", // auto height on extra-small screens
                  sm: "100%", // 100% height on small screens and above
                },
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => handleCardClick(item?.url)}
            >
              <CardContent className="mt-3">
                <Typography sx={{ fontSize: "1rem" }} gutterBottom>
                  {item?.name}
                </Typography>
                <Typography>{item?.Author}</Typography>
                <Typography variant="body2" sx={{ my: 1.5 }}>
                  {item?.technology}
                </Typography>
                <Typography variant="body2" component="div">
                  {item?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
