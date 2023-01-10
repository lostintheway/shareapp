import React from "react";
import { Form, Radio } from "antd";

type Props = {
  name: string;
  label: string;
  data: { value: string; label: string }[];
  init: string;
};

const FormRadio = ({ name, label, data, init }: Props) => {
  return (
    <Form.Item
      name={name}
      initialValue={init}
      label={label}
      rules={[{ required: true, message: label + " cannot be empty" }]}
    >
      <Radio.Group buttonStyle="solid">
        {data.map((dataaa) => (
          <Radio.Button value={dataaa.value}>{dataaa.label}</Radio.Button>
        ))}
      </Radio.Group>
    </Form.Item>
  );
};

export default FormRadio;
