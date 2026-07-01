import React from "react";

import {

Badge,

IconButton

} from "@mui/material";

import NotificationsIcon

from "@mui/icons-material/Notifications";

export default function NotificationCenter(){

 return(

  <IconButton>

   <Badge

    badgeContent={3}

    color="error"

   >

    <NotificationsIcon />

   </Badge>

  </IconButton>

 );

}