import React from "react";
import { Button, Drawer, message, Space } from "antd";
import { useContext } from "react";
import { Actions, IsOpenStore } from "../../../store/IsOpenContext";
import AddShareForm from "./AddShareForm";

const AddShare = () => {
  const { state, dispatch } = useContext(IsOpenStore);

  const onClose = () => dispatch({ type: Actions.share, payload: false });

  return (
    <Drawer
      title="Add Share"
      width={"auto"}
      onClose={onClose}
      open={state.addShareisOpen}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button type="primary" ghost onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={() => message.info("Submit clicked")} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <AddShareForm />
    </Drawer>
  );
};

export default AddShare;
