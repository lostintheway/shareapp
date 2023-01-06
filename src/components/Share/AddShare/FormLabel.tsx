import React from "react";
import { Form, Input } from "antd";

interface Props {
  name: string;
  label: string;
}

export const FormLabel = ({ name, label }: Props) => {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        {
          required: true,
          message: label + "cannot be empty",
        },
      ]}
    >
      <Input placeholder={label} />
    </Form.Item>
  );
};
