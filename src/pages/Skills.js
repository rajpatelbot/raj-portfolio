import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { SkillsInfo } from "../apis/SkillsInfo";
// import Card from "../components/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  margin: 8,
  color: "#000",
  textAlign: "center",
}));

const Skills = () => {
  return (
    <Box sx={{ width: "90%", margin: "5rem auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "2em" }}>Skills</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        {SkillsInfo.map((info) => (
          <Item
            sx={{
              p: 2,
              height: "8rem",
              width: "8rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            key={info.key}
          >
            <img style={{ width: "3rem" }} src={info.img} alt="" />
            <p> {info.name} </p>
          </Item>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
