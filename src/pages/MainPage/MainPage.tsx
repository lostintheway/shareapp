import { Button } from "antd";

import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to="/admin/shares">
        <Button>Go to Shares</Button>
      </Link>
    </div>
  );
};

export default MainPage;
