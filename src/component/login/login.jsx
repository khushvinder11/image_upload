import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./LoginStyle.less";
import Navbar from "../Navbar/Navbar";

const LoginPage = () => {
  const [signUpInfo, setSignUpInfo] = useState();
  console.log(signUpInfo, "signinfopage");
  const onFinish = (values) => {
    console.log("Success:", values);
    setSignUpInfo(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login_container">
          <h1 style={{ textAlign: "center" }}>Login</h1>
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

            {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        > */}
            {/* <Checkbox>Remember me</Checkbox> */}
            {/* </Form.Item> */}

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
    </>
  );
};
export default LoginPage;
