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

      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      tag: ["United Kingdom", "Liverpool", "Hd Grey Wallpapers"],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQY7N9Q0qZC_gXtwQ3lCJ9qJ6BH0eueSkSUX0SG2v9EDmrCS75ZfjbqjdPCSltOUlVW3U&usqp=CAU",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://media.istockphoto.com/id/1285993433/photo/carefree-african-american-girl-in-studio.jpg?s=612x612&w=0&k=20&c=8IrWu7J3Odp7mwZxizKfUVbDC6dvw-ttIKwvVXVIDvA=",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://cdn.mind-diagnostics.org/uploads/mind-diagnostics/images/image/url/im-married-but-in-love-with-another-man-what-should-i-do-1_.jpg.jpg",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      tag: ["United Kingdom", "Liverpool", "Hd Grey Wallpapers"],
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
      tag: ["United Kingdom", "Liverpool", "Hd Grey Wallpapers"],
    },

    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg",
      tag: ["Background", "Hd Wallpapers", "Melbourne Vic"],
    },
    {
      image: "https://i1.sndcdn.com/artworks-000138348531-tpbp62-t500x500.jpg",
      tag: ["United Kingdom", "Liverpool", "Hd Grey Wallpapers"],
    },
    {
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      tag: ["onw", "two", "three"],
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559__480.jpg",
      tag: ["United Kingdom", "Liverpool", "Hd Grey Wallpapers"],
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
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Sider>
        <div class="gallery">
          {/* {imgItem.map((v) => {
            return (
              <div class="gallery__column">
                <a
                  href="https://unsplash.com/@jeka_fe"
                  target="_blank"
                  class="gallery__link"
                >
                  <figure class="gallery__thumb">
                    <img
                      src={v.image}
                      alt="Portrait by Jessica Felicio"
                      class="gallery__image"
                    />
                    <figcaption class="gallery__caption">
                      Portrait by Jessica Felicio
                    </figcaption>
                  </figure>
                </a>
              </div>
            );
          })} */}
          {/* <div class="gallery__column">
            <a
              href="https://unsplash.com/@jeka_fe"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                  alt="Portrait by Jessica Felicio"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Jessica Felicio
                </figcaption>
              </figure>
            </a>
          </div> */}

          {/* <div class="gallery__column">
            <a
              href="https://unsplash.com/@noahbuscher"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/AR7aumwKr2s/300x300"
                  alt="Portrait by Noah Buscher"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Noah Buscher
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@von_co"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/dnL6ZIpht2s/300x300"
                  alt="Portrait by Ivana Cajina"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Ivana Cajina
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@samburriss"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/tV_1sC603zA/300x500"
                  alt="Portrait by Sam Burriss"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Sam Burriss
                </figcaption>
              </figure>
            </a>
          </div> */}

          {/* <div class="gallery__column">
            <a
              href="https://unsplash.com/@marilezhava"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/Xm9-vA_bhm0/300x500"
                  alt="Portrait by Mari Lezhava"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Mari Lezhava
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@ethanhaddox"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/NTjSR3zYpsY/300x300"
                  alt="Portrait by Ethan Haddox"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Ethan Haddox
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@mr_geshani"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/2JH8d3ChNec/300x300"
                  alt="Portrait by Amir Geshani"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Amir Geshani
                </figcaption>
              </figure>
            </a>
          </div> */}

          {/* <div class="gallery__column">
            <a
              href="https://unsplash.com/@frxgui"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/FQhLLehm4dk/300x300"
                  alt="Portrait by Guilian Fremaux"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Guilian Fremaux
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@majestical_jasmin"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/OQd9zONSx7s/300x300"
                  alt="Portrait by Jasmin Chew"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Jasmin Chew
                </figcaption>
              </figure>
            </a>

            <a
              href="https://unsplash.com/@dimadallacqua"
              target="_blank"
              class="gallery__link"
            >
              <figure class="gallery__thumb">
                <img
                  src="https://source.unsplash.com/XZkEhowjx8k/300x500"
                  alt="Portrait by Dima DallAcqua"
                  class="gallery__image"
                />
                <figcaption class="gallery__caption">
                  Portrait by Dima DallAcqua
                </figcaption>
              </figure>
            </a>
          </div> */}
        </div>

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
