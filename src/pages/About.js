import Main from "../layout/Main";
import raj2Img from "../assets/images/raj2Img.png";
import { SocialIcons } from "../apis/SocialIcons";
import useFetch from "../hook/useFetch";

const About = () => {
  const file_name = "about.md";
  const [data] = useFetch(file_name);

  return (
    <Main
      content={data}
      imgSrc={raj2Img}
      btn={SocialIcons.map((socialIcon) => socialIcon.icon)}
    />
  );
};

export default About;
