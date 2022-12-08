import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import raj1Img from "../assets/images/raj1Img.png";
import { useEffect, useState } from "react";
import Main from "../layout/Main";

const ContactBtn = styled(Button)({
  color: "#F65158",
  borderColor: "#F65158",

  "&:hover": {
    backgroundColor: "#FFECED",
    borderColor: "#FD4C53",
  },
});

const DownloadBtn = styled(Button)({
  backgroundColor: "#FBDE44",
  color: "#000",

  "&:hover": {
    backgroundColor: "#FFEB80",
    borderColor: "#FFEF9C",
  },
  "&:focus": {
    backgroundColor: "#FFED8C",
  },
});

const HomePage = () => {
  let isHomePage = true;
  const file_name = "intro.md";
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../md/${file_name}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setContent(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Main
      content={content}
      imgSrc={raj1Img}
      isHomePage={isHomePage}
      btn={
        <Stack
          spacing={1}
          direction="row"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <ContactBtn variant="outlined">Contact me</ContactBtn>
          <DownloadBtn variant="contained">Download Resume</DownloadBtn>
        </Stack>
      }
    />
  );
};

export default HomePage;
