import { Button, Drawer, Space } from "antd";
import AddPortfolioForm from "./AddPortfolioForm";

const AddPortfolio = () => {
  return (
    <Drawer
      title="Add Share"
      width={"auto"}
      onClose={onClose}
      open={addPFisOpen}
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
