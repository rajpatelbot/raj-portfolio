import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
    return (
      <div className="errorPage">
        <h1>404</h1>
        <h2>😢Page Not Found😢</h2>
        <Link to={"/"}>
          <Button
            style={{ marginTop: "2rem" }}
            variant="contained"
            size="medium"
            color="primary"
          >
            Go to home
          </Button>
        </Link>
      </div>
    );
}

export default Error
