import React from "react";
import { Button } from "antd";
import { useContext } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";
import { Actions, IsOpenStore, withIsOpen } from "../../store/IsOpenContext";

const ViewShares = () => {
  const { state, dispatch } = useContext(IsOpenStore);

  const onOpen = () => dispatch({ type: Actions.share, payload: true });

  return (
    <div>
      {JSON.stringify(state)}
      <Button onClick={onOpen}>open drawer</Button>
      <AddShare />
    </div>
  );
};

export default withIsOpen(ViewShares);
