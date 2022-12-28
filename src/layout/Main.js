import { React } from "react";
import Box from "@mui/material/Box";
import Markdown from "markdown-to-jsx";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 2,
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "coloumn",
        justifyContent: "center",
      }}
      {...other}
    />
  );
}

const Main = ({ content, imgSrc, btn, isHomePage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        borderRadius: 1,
        paddingLeft: !isHomePage ? "2rem" : "8rem",
        marginTop: "64px",
        height: `calc(100vh - 64px)`,
        flexDirection: !isHomePage ? "row-reverse" : "row",
      }}
    >
      <Item style={{ flexDirection: "column", padding: "0 2rem 1rem 2rem" }}>
        <Markdown style={{ textAlign: "start" }}>
          {content}
        </Markdown>
        <Box sx={{ flexDirection: "row", width: "100%", marginTop: "0.5rem" }}>
          {btn}
        </Box>
      </Item>

      <Item>
        <img
          src={imgSrc}
          alt="rajpatel-image1"
          style={{
            width: "33rem",
            marginLeft: !isHomePage ? "3rem" : "",
          }}
        />
      </Item>
    </Box>
  );
};

export default Main;
