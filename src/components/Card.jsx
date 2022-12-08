import * as React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  margin: 8,
  color: "#000",
  textAlign: "center",
}));

export default function Card({ info }) {
  return (
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
      <Item sx={{ p: 2 }} key={info.key}>
        <img src={info.img} alt="" />
        <img src={info.img} alt="" />
        <img src={info.img} alt="" />
      </Item>
    </Box>
  );
}
