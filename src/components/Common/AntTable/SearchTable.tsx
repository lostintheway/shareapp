import { Col, Row, Table, TableProps } from "antd";
import React, { useState } from "react";
import SearchTableInput from "./SearchTableInput";

const SearchTable = (props: TableProps<unknown>) => {
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
          justifyContent: "space-between",
        }}
      >
        {props.children}
        <SearchTableInput
          dataSource={dataSource}
          setDataSource={setSearchDataSource}
          inputProps={{ placeholder: "Search" }}
        />
      </div>
      <div className="GradientBorder"></div>
      <Table {...otherProps} dataSource={searchDataSource} columns={columns} />
    </React.Fragment>
  );
};

export default SearchTable;
