import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/images/logo.png";
import { navLinks } from "../apis/navLinks";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const GithubBtn = styled(Button)({
    color: "#000",
  });

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6" sx={{ my: 2, marginLeft: "8px" }}>
        <img style={{ width: "9rem" }} src={logo} alt="logo" />
      </Typography>
      <Divider />
      <List>
        {navLinks.map((navLink) => (
          <ListItem key={navLink.key} disablePadding>
            <ListItemButton>
              <ListItemText primary={navLink.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
          >
            <Link to={"/"}>
              {" "}
              <img style={{ width: "8rem" }} src={logo} alt="logo" />{" "}
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((navLink) => (
              <Button key={navLink.key} sx={{ color: "#000" }}>
                {navLink.name}
              </Button>
            ))}
          </Box>

          <a
            href="https://github.com/rajpatel17-bot/raj-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <GithubBtn
              sx={{
                borderRadius: 1,
              }}
            >
              <GitHubIcon />
            </GithubBtn>
          </a>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
