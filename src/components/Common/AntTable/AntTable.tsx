import { Col, Row, Table, TableProps } from "antd";
import React, { useState } from "react";
import SearchTableInput from "./SearchTableInput";

const AntTable = (props: TableProps<any>) => {
  const { dataSource, columns, ...otherProps } = props;
  const [searchDataSource, setSearchDataSource] = useState(dataSource);
  return (
    <React.Fragment>
      <Row justify="end">
        <Col xs={12} sm={12} md={8} lg={4}></Col>
      </Row>
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <SearchTableInput
          dataSource={dataSource}
          setDataSource={setSearchDataSource}
          inputProps={{ placeholder: "Search" }}
        />
      </div>
      <Table {...otherProps} dataSource={searchDataSource} columns={columns} />
    </React.Fragment>
  );
};

export default AntTable;
