import contactImg from "../assets/images/contactPageImg.svg";
import Main from "../layout/Main";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useFetch from "../hook/useFetch";

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
  const [data] = useFetch(file_name);

  return (
    <Main
      content={data}
      imgSrc={contactImg}
      isHomePage={isHomePage}
      btn={
        <Stack
          spacing={1}
          direction="row"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <a href="mailto: rajpatel158g@gmail.com">
            {" "}
            <SayHi variant="outlined">Say Hello to me</SayHi>
          </a>
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
