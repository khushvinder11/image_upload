import React from "react";
import { Layout, Image, List } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Navbar from "../Navbar/Navbar";
import "./adminpageStyle.less";
const Admin = () => {
  const data = [
    "Racing",
    "Japanese",
    "Australian",
    "Man charged",
    "Los Angeles",
  ];

  const imgItem = [
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ];
  return (
    <div className="adminpagebody">
      <Navbar />
      <Layout>
        <Layout>
          <Sider>
            <List
              size="large"
              // header={<div>Header</div>}
              // footer={<div>Footer</div>}
              bordered
              dataSource={data}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Sider>
          <Content>
            {imgItem.map((v) => {
              return (
                <div className="image-container">
                  <Image src={v.image} />
                  <div className="image_bottom_tag">
                    <button className="tag-btn">Background </button>
                    <button className="tag-btn">Wallpapers</button>
                    <button className="tag-btn">Melbourne</button>
                    <button className="tag-btn">Background </button>
                    <button className="tag-btn">Wallpapers</button>
                    <button className="tag-btn">Melbourne</button>
                  </div>
                </div>
              );
              {
                /* return( <Image width={200} src={v} />
               <div>helo</div>); */
              }
            })}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default Admin;
