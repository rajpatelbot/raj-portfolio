import contactImg from "../assets/images/contactPageImg.svg";
import { useEffect, useState } from "react";
import Main from "../layout/Main";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SayHi = styled(Button)({
  color: "#F65158",
  borderColor: "#F65158",
  height: "50px",

  "&:hover": {
    backgroundColor: "#FFECED",
    borderColor: "#FD4C53",
  },
});

const ContactPage = () => {
  let isHomePage = true;
  const file_name = "contact.md";
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
      imgSrc={contactImg}
      isHomePage={isHomePage}
      btn={
        <Stack
          spacing={1}
          direction="row"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <SayHi variant="outlined">Say Hello to me</SayHi>
          <a
            href="https://www.buymeacoffee.com/rajpatel17bot"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              style={{ height: "50px", width: "100%" }}
            />
          </a>
        </Stack>
      }
    />
  );
};

export default ContactPage;
