import { Button, Drawer, Space } from "antd";
import AddShareForm from "./AddShareForm";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AddShare = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer
      title="Add Share"
      width={"auto"}
      onClose={onClose}
      open={isOpen}
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
      <AddShareForm />
    </Drawer>
  );
};

export default AddShare;
