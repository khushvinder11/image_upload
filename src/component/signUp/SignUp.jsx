import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import "./SignUpStyle.less";
// import "../login/LoginStyle.less";
// import Navbar from "../Navbar/Navbar";

const SingUpPage = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo, "serinfo");
  const navigate = useNavigate();

  const onFinish = (values) => {
    // console.log("Success:", values);
    setUserInfo(values);
    navigate("/loginpage");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // Radio button..
  // const [value, setValue] = useState(1);
  // console.log(value, "value radio");
  // const onChange = (e) => {
  //   console.log("radio checked", e.target.value);
  //   setValue(e.target.value);
  // };
  return (
    <div
      className="singup-page"
      style={{
        width: "100%",
        height: "100vh",
        display: "grid",
        placeItem: "cetner",
      }}
    >
      {/* <Navbar /> */}
      <div className="sign_up_container">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="Gender"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={"Male"}>Male</Radio>
              <Radio value={"Female"}>Female</Radio>
              <Radio value={"Other"}>Other</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Image Type"
            name="Image Type"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select
              showSearch
              style={{
                width: 380,
              }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "Animal",
                  label: "Animal",
                },
                {
                  value: "Flower",
                  label: "Flower",
                },
                {
                  value: "Space",
                  label: "Space",
                },
                {
                  value: "Human",
                  label: "Human",
                },
                {
                  value: "Movie",
                  label: "Movie",
                },
                {
                  value: "Girls",
                  label: "Girls",
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default SingUpPage;
