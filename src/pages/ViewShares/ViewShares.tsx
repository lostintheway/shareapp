import { Button } from "antd";
import { useContext } from "react";
import AddShare from "../../components/Share/AddShare/AddShare";
import { Actions, IsOpenStore } from "../../store/IsOpenContext";

const ViewShares = () => {
  const { dispatch } = useContext(IsOpenStore);

  return (
    <>
      <Button onClick={() => dispatch({ type: Actions.share, payload: true })}>
        open drawer
      </Button>
      <AddShare />
    </>
  );
};

export default ViewShares;
