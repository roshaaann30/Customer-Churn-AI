import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav

      style={{

        display: "flex",

        gap: "30px",

        padding: "20px",

        background: "#1976d2",

      }}

    >

      <Link

        style={{ color: "white" }}

        to="/"

      >

        Dashboard

      </Link>

      <Link

        style={{ color: "white" }}

        to="/analytics"

      >

        Analytics

      </Link>

      <Link

        style={{ color: "white" }}

        to="/customers"

      >

        Customers

      </Link>

      <Link

        style={{ color: "white" }}

        to="/recommendations"

      >

        Recommendations

      </Link>

      <Link

        style={{ color: "white" }}

        to="/executive"

      >

        Executive

      </Link>

    </nav>

  );

}

export default Navbar;