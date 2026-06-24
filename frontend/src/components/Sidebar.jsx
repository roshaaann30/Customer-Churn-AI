import {

Drawer,

List,

ListItem,

ListItemText

}

from "@mui/material";

import {

Link

}

from "react-router-dom";

function Sidebar(){

const items=[

["Dashboard","/"],

["Analytics","/analytics"],

["Customers","/customers"],

["Recommendations","/recommendations"],

["Executive","/executive"],

["History","/history"],

["Monitoring","/monitoring"]

]

return(

<Drawer

variant="permanent"

>

<List>

{

items.map(

([name,path])=>(

<ListItem

button

component={Link}

to={path}

key={name}

>

<ListItemText

primary={name}

/>

</ListItem>

)

)

}

</List>

</Drawer>

)

}

export default Sidebar