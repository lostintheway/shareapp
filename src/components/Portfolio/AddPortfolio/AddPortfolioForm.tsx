import { Col, Form, Radio, Row, Select } from "antd";
import { ColHm } from "../../Form.helper";
import { FormLabel } from "./FormLabel";

type Props = {};

const AddPortfolioForm = (props: Props) => {
  const { Option } = Select;
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col {...ColHm(12)}>
          <FormLabel label="Name" name="shareName" />
        </Col>
        <Col {...ColHm(12)}>
          <FormLabel label="Date" name="date" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col {...ColHm(12)}>
          <FormLabel label="Quantity" name="quantity" />
        </Col>
        <Col {...ColHm(12)}>
          <FormLabel label="Price" name="price" />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col {...ColHm(12)}>
          <Form.Item
            initialValue="buy"
            name="transType"
            label="Type"
            rules={[{ required: true, message: "Type cannot be empty" }]}
          >
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="buy">buy</Radio.Button>
              <Radio.Button value="sell">sell</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddPortfolioForm;
