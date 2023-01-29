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
        "https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY7N9Q0qZC_gXtwQ3lCJ9qJ6BH0eueSkSUX0SG2v9EDmrCS75ZfjbqjdPCSltOUlVW3U&usqp=CAU",
    },
    {
      image:
        "https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=612x612&w=0&k=20&c=8IrWu7J3Odp7mwZxizKfUVbDC6dvw-ttIKwvVXVIDvA=",
    },
    {
      image:
        "https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/im-married-but-in-love-with-another-man-what-should-i-do-1_.jpg.jpg",
    },
    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
    },

    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
    },
    {
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
    },
    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
    },
    {
      image:
        "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
    },
    {
      image:
        "https://www.istockphoto.com/resources/images/PhotoFTLP/P4-JAN-iStock-1432854572.jpg",
    },
  ];
  return (
    <div className="adminpagebody">
      <Navbar />
      <Layout>
        {/* <Layout> */}
        <Sider>
          <List
            size="large"
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
              </div>
            );
          })}
        </Content>
        {/* </Layout> */}
      </Layout>
    </div>
  );
};
export default Admin;
