import { Button, Drawer, Space } from "antd";
import { useContext } from "react";
import { IsOpenStore, Actions } from "../../../store/IsOpenContext";
import AddPortfolioForm from "./AddPortfolioForm";

const AddPortfolio = () => {
  const { state, dispatch } = useContext(IsOpenStore);

  const onClose = () => dispatch({ type: Actions.pf, payload: false });

  return (
    <Drawer
      title="Add Portfolio"
      width={"auto"}
      onClose={onClose}
      open={state.addPFisOpen}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button type="primary" ghost onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </Space>
      }
    >
      <AddPortfolioForm />
    </Drawer>
  );
};

export default AddPortfolio;
