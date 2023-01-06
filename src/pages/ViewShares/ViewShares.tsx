import React from "react";
import { Button, Cascader, Radio, Tabs } from "antd";
import { useContext } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";
import { Actions, IsOpenStore, withIsOpen } from "../../store/IsOpenContext";
import SearchTable from "../../components/Common/AntTable/SearchTable";
import ShareTable from "../../components/Share/ShareTable/ShareTable";
import { PlusOutlined } from "@ant-design/icons";

const ViewShares = () => {
  const { dispatch } = useContext(IsOpenStore);

  const onOpen = () => dispatch({ type: Actions.share, payload: true });

  const items = [
    { label: `Over All`, children: `Content of Tab Pane 1`, key: "1" },
    { label: `Tab 2`, children: `Content of Tab Pane 2`, key: "2" },
    { label: `Tab 3`, children: `Content of Tab Pane 3`, key: "3" },
    { label: `Tab 4`, children: `Content of Tab Pane 4`, key: "4" },
  ];
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
        <Radio.Group onChange={() => {}}>
          <Radio.Button value="topLeft">PortFolio</Radio.Button>
          <Radio.Button value="topRight">topRight</Radio.Button>
          <Radio.Button value="bottomLeft">bottomLeft</Radio.Button>
          <Radio.Button value="bottomRight">bottomRight</Radio.Button>
        </Radio.Group>
      </ShareTable>
    </div>
  );
};

export default withIsOpen(ViewShares);
