import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Projects } from "../apis/Projects";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}> Personal Projects💻 </h1>
      <Grid
        style={{ padding: "20px 30px", placeItems: "center", display: "flex", justifyContent: "center", alignItems: "center" }}
        container
        gap={4}
        columns={{ xs: 4, sm: 8, md: 9 }}
      >
        {Projects.map((project) => (
          <Card style={{ width: 400 }} key={project.id}>
            <CardMedia
              style={{ height: 200, width: "100%" }}
              image={project.image}
              title={project.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <a href={project.links.repo} target={"_blank"} rel="noreferrer">
                <Button variant="outlined">💻 Code</Button>
              </a>
              <a href={project.links.live} target={"_blank"} rel="noreferrer">
                <Button variant="contained" color="secondary">
                  Live 🌎
                </Button>
              </a>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
