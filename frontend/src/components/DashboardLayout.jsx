import { Box } from "@mui/material";

function DashboardLayout({ children }) {

  return (

    <Box sx={{

      padding:"30px",

      background:"#f5f7fa",

      minHeight:"100vh"

    }}>

      {children}

    </Box>

  )

}

export default DashboardLayout