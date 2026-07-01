import React from "react";

import { Link } from "react-router-dom";

import {

  Drawer,

  List,

  ListItemButton,

  ListItemText,

  Toolbar,

  useTheme,

  useMediaQuery

} from "@mui/material";

const drawerWidth = 250;

const items = [

  {

    label: "Dashboard",

    path: "/"

  },

  {

    label: "Analytics",

    path: "/analytics"

  },

  {

    label: "Customers",

    path: "/customers"

  },

  {

    label: "Recommendations",

    path: "/recommendations"

  },

  {

    label: "Executive",

    path: "/executive"

  },

  {

    label: "Monitoring",

    path: "/monitoring"

  },

  {

    label: "AI Insights",

    path: "/ai-insights"

  },

  {

    label: "Summary",

    path: "/executive-summary"

  }

];

export default function Sidebar() {

  const theme = useTheme();

  const mobile = useMediaQuery(

    theme.breakpoints.down("md")

  );

  return (

    <Drawer

      variant={

        mobile

          ? "temporary"

          : "permanent"

      }

      open={!mobile}

      sx={{

        width: drawerWidth,

        flexShrink: 0,

        "& .MuiDrawer-paper": {

          width: drawerWidth,

          boxSizing: "border-box",

          top: "64px",

          height: "calc(100% - 64px)"

        }

      }}

    >

      <Toolbar />

      <List>

        {

          items.map(

            (item) => (

              <ListItemButton

                key={item.path}

                component={Link}

                to={item.path}

              >

                <ListItemText

                  primary={item.label}

                />

              </ListItemButton>

            )

          )

        }

      </List>

    </Drawer>

  );

}