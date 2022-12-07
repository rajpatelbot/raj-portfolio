import Main from "../containers/Main";
import raj2Img from "../assets/images/raj2Img.png";
import { useEffect, useState } from "react";
import { SocialIcons } from "../apis/SocialIcons";

const About = () => {
  const file_name = "about.md";
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
  });

  return (
    <Main
      content={content}
      imgSrc={raj2Img}
      btn={SocialIcons.map((socialIcon) => socialIcon.icon)}
    />
  );
};

export default About;
