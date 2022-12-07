import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ComputerIcon from "@mui/icons-material/Computer";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "react-router-dom";

export let navLinks = [
    {
        "key": 0,
        "icons": <Link to="/"><HomeIcon /></Link>,
        "name": <Link to="/">Home</Link>,
        "link": "/"
    },
    {
        "key": 1,
        "icons": <Link to="/about"><PersonIcon /></Link>,
        "name": <Link to="/about">About</Link>,
        "link": "/about"
    },
    {
        "key": 2,
        "icons": <Link to="/skills"><KeyboardIcon /></Link>,
        "name": <Link to="/skills">Skills</Link>,
        "link": "/skills"
    },
    {
        "key": 3,
        "icons": <Link to="/projects"><ComputerIcon /></Link>,
        "name": <Link to="/projects">Projects</Link>,
        "link": "/projects"
    },
    {
        "key": 4,
        "icons": <Link to="/contact"><PhoneIcon /></Link>,
        "name": <Link to="/contact">Contact</Link>,
        "link": "/contact"
    },
]