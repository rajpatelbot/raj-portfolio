import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import raj1Img from "../assets/images/raj1Img.png";
import Main from "../layout/Main";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

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
  const [data] = useFetch(file_name);

  return (
    <>
      <Main
        content={data}
        imgSrc={raj1Img}
        isHomePage={isHomePage}
        btn={
          <Stack
            spacing={1}
            direction="row"
            style={{ width: "100%", marginTop: "1rem" }}
          >
            <Link to={"/contact"}>
              {" "}
              <ContactBtn variant="outlined">Contact me</ContactBtn>{" "}
            </Link>
            <DownloadBtn variant="contained">Download Resume</DownloadBtn>
          </Stack>
        }
      />
    </>
  );
};

export default HomePage;
