import { Box } from "@mui/material"
import Card from "../components/Card";

const Projects = () => {
    return (
      <Box
        sx={{
          borderRadius: 1,
          marginTop: "64px",
          height: `calc(100vh - 64px)`,
        }}
      >
        <Card />
      </Box>
    );
}

export default Projects
