"use client";

// components/NavBar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

const NavBar: React.FC = () => {
  //   const router = useRouter();

  const handleNavigation = (path: string) => {
    // router.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" onClick={() => handleNavigation("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => handleNavigation("/about")}>
          About
        </Button>
        <Button color="inherit" onClick={() => handleNavigation("/contact")}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
