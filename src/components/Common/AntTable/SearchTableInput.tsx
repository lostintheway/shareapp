import { Dispatch, useEffect, useState } from "react";
import { Input, InputProps } from "antd";
import Fuse from "fuse.js";
import { useDebounce } from "./useDebounce";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
  dataSource: readonly object[] | undefined;
  setDataSource: Dispatch<unknown>;
  inputProps: InputProps;
};

const SearchTableInput = ({ dataSource, setDataSource, inputProps }: Props) => {
  const options = {
    keys: Object.keys(dataSource ? dataSource[0] : []).map((keys) => keys),
  };

  const [searchVal, setSearchVal] = useState<string>("");
  const debouncedValue = useDebounce<string>(searchVal, 200);

  useEffect(() => {
    if (!debouncedValue) {
      setDataSource(dataSource);
    }
    if (!dataSource || !searchVal) {
      return;
    }
    const fuse = new Fuse(dataSource, options);
    const result = fuse.search(debouncedValue);
    setDataSource(
      result.sort((a, b) => a.refIndex - b.refIndex).map((resul) => resul.item)
    );
    return () => {
      setDataSource([]);
    };
  }, [debouncedValue]);

  return (
    <Input
      style={{ maxWidth: 500 }}
      allowClear
      prefix={<SearchOutlined />}
      onChange={(e) => setSearchVal(e.target.value)}
      {...inputProps}
    />
  );
};

export default SearchTableInput;
