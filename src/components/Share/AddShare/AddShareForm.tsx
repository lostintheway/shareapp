import { Col, Form, Radio, Row } from "antd";
import { ColHm } from "../../Form.helper";
import { FormLabel } from "./FormLabel";
import FormRadio from "./FormRadio";

const AddShareForm = () => {
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
          <FormRadio
            init="buy"
            label="Transaction Type"
            name="transType"
            data={[
              { value: "buy", label: "Buy" },
              { value: "sell", label: "Sell" },
            ]}
          />
        </Col>
        <Col {...ColHm(12)}>
          <FormRadio
            init="SECONDARY"
            label="Share Type"
            name="shareType"
            data={[
              { value: "SECONDARY", label: "Secondary" },
              { value: "IPO", label: "IPO" },
            ]}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default AddShareForm;
