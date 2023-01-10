import SearchTable from "../../Common/AntTable/SearchTable";
import "./ShareTable.scss";

type Props = {
  children: React.ReactNode;
};

const ShareTable = (props: Props) => {
  const columns = [
    {
      title: "S.N",
      dataIndex: "sn",
      key: "sn",
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
    },
    {
      title: "LTP",
      dataIndex: "ltp",
      key: "ltp",
    },
    {
      title: "Qty",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Value",
      dataIndex: "marketValue",
      key: "marketValue",
    },
    {
      title: "Average Price",
      dataIndex: "averagePrice",
      key: "averagePrice",
    },
    {
      title: "Daily P/L",
      dataIndex: "dailyPL",
      key: "dailyPL",
    },
    {
      title: "Net P/L",
      dataIndex: "netPL",
      key: "netPL",
    },
    { title: "Action", dataIndex: "action", key: "action" },
  ];
  return (
    <>
      <div className="MyCard">
        <SearchTable
          className="ShareTable"
          rowKey={"symbol"}
          dataSource={[
            { symbol: "Sushil Sampang Rai" },
            { symbol: "Sushil Rai" },
            { symbol: "Sushil22222 Rai" },
          ]}
          columns={columns}
        >
          {props.children}
        </SearchTable>
      </div>
    </>
  );
};

export default ShareTable;
