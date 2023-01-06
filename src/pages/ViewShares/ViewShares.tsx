import { Button, Cascader } from "antd";
import { useContext } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";
import { Actions, IsOpenStore, withIsOpen } from "../../store/IsOpenContext";
import ShareTable from "../../components/Share/ShareTable/ShareTable";
import { PlusOutlined } from "@ant-design/icons";

const ViewShares = () => {
  const { dispatch } = useContext(IsOpenStore);

  const onOpen = () => dispatch({ type: Actions.share, payload: true });

  return (
    <div>
      <AddShare />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 60,
        }}
      >
        <b style={{ fontWeight: 500, fontSize: 20 }}>Share Details</b>
        <Button onClick={onOpen} type="primary" icon={<PlusOutlined />}>
          Add Share
        </Button>
      </div>
      <ShareTable>
        <div className="SortDiv">
          <Cascader
            defaultValue={["all"]}
            bordered={false}
            options={[{ label: "Over All", value: "all" }]}
          ></Cascader>
          <Cascader
            placeholder="Sort By:"
            bordered={false}
            className="borderLeft"
          ></Cascader>
        </div>
      </ShareTable>
    </div>
  );
};

export default withIsOpen(ViewShares);
