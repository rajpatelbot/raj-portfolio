import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

export let SocialIcons = [
  {
    key: 0,
    icon: (
      <a
        href="https://www.linkedin.com/in/rajpatel17-bot/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon className="socialBtn" />
      </a>
    ),
  },
  {
    key: 1,
    icon: (
      <a
        href="https://twitter.com/raj_patel1515"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon className="socialBtn" />
      </a>
    ),
  },
  {
    key: 2,
    icon: (
      <a
        href="https://github.com/rajpatel17-bot"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon className="socialBtn" />
      </a>
    ),
  },
  {
    key: 3,
    icon: (
      <a href="mailto: rajpatel158g@gmail.com">
        <EmailIcon className="socialBtn"></EmailIcon>
      </a>
    ),
  },
  {
    key: 4,
    icon: (
      <a
        href="https://www.instagram.com/mr__raj_17/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon className="socialBtn" />
      </a>
    ),
  },
];
