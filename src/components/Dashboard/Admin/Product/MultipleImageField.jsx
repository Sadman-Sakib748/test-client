"use client";

import React from "react";
import { Form, Input, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const MultipleImageField = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Product Images</h2>

      <Form.List name="images">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="flex items-center gap-5">
                <Form.Item
                  {...restField}
                  name={name}
                  rules={[
                    { required: true, message: "Please enter image URL" },
                  ]}
                  className="flex-1"
                >
                  <Input placeholder="Enter image URL" size="large" />
                </Form.Item>

                <Button
                  type="text"
                  danger
                  className="-mt-5"
                  icon={<MinusCircleOutlined />}
                  onClick={() => remove(name)}
                />
              </div>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Image
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>
    </div>
  );
};

export default MultipleImageField;
