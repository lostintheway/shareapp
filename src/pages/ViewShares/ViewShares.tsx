import React from "react";
import { Button } from "antd";
import { useContext } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";
import { Actions, IsOpenStore, withIsOpen } from "../../store/IsOpenContext";
import AntTable from "../../components/Common/AntTable/AntTable";

const ViewShares = () => {
  const { state, dispatch } = useContext(IsOpenStore);

  const onOpen = () => dispatch({ type: Actions.share, payload: true });

  return (
    <div>
      <AddShare />
      <Button onClick={onOpen} type="primary">
        Add Share
      </Button>
      <AntTable
        rowKey={"name"}
        dataSource={[
          { name: "Sushil Sampang Rai" },
          { name: "Sushil Rai" },
          { name: "Sushil22222 Rai" },
        ]}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
        ]}
      />
    </div>
  );
};

export default withIsOpen(ViewShares);
