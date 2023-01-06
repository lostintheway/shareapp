import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Result
      style={{ width: "100vw", padding: "8%" }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default PageNotFound;
