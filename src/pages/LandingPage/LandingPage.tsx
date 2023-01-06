import { Button } from "antd";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      LandingPage
      <Link to="/admin/home">
        <Button>Go to home</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
