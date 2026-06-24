import {

Card,

CardContent,

Typography

} from "@mui/material";

function KPIcard({

title,

value

}) {

return(

<Card

sx={{

borderRadius:4,

boxShadow:4,

height:150

}}

>

<CardContent>

<Typography

variant="h6"

>

{title}

</Typography>

<Typography

variant="h3"

>

{value}

</Typography>

</CardContent>

</Card>

)

}

export default KPIcard