import React from "react";

import {

  AppBar,

  Toolbar,

  Typography,

  Box

} from "@mui/material";

import SearchBar from "./SearchBar";

import NotificationCenter from "./NotificationCenter";

import UserProfile from "./UserProfile";

import ThemeToggle from "./ThemeToggle";

export default function Navbar({

  mode,

  setMode

}) {

  return (

    <AppBar

      position="fixed"

      sx={{

        zIndex: (theme) =>

          theme.zIndex.drawer + 1

      }}

    >

      <Toolbar

        sx={{

          gap: 2

        }}

      >

        <Typography

          variant="h6"

        >

          Customer Churn AI

        </Typography>

        <Box

          sx={{

            flexGrow: 1

          }}

        >

          <SearchBar />

        </Box>

        <NotificationCenter />

        <UserProfile />

        <ThemeToggle

          mode={mode}

          setMode={setMode}

        />

      </Toolbar>

    </AppBar>

  );

}