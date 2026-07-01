import React from "react";

import {

 IconButton

} from "@mui/material";

import {

 LightMode,

 DarkMode

} from "@mui/icons-material";

export default function ThemeToggle({

 mode,

 setMode

}) {

 const toggleTheme = () => {

  setMode(

   mode === "light"

   ? "dark"

   : "light"

  );

 };

 return (

  <IconButton

   onClick={toggleTheme}

   color="inherit"

  >

   {

    mode === "light"

    ? <DarkMode />

    : <LightMode />

   }

  </IconButton>

 );

}