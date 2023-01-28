import { Select, Button, Modal, Table } from "antd";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  FileAddOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import "./TagPageStyle.less";
import ModalPage from "../modal/Modal";

const TagPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [secondTagName, setSecondTagName] = useState([]);
  const [modalTitle, setModalTitle] = useState();
  const [addEdit, setAddEdit] = useState("Add");
  const [valueItem, setValueItem] = useState();

  // modal...............
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    // setSecondTagName(tagname);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //   delete items...........
  const deleteItme = (key) => {
    const del = secondTagName.filter((v) => v.key !== key);
    console.log(del, "key");
    setSecondTagName(del);
  };

  //   edit items...............
  const editItme = (key) => {
    // const edt = tagname.filter((v) => v.key == key);
    // console.log(edt, "edt");
    setIsModalOpen(true);
    // setEditItem(key);
  };

  const tagName = [
    "Categories",
    "Sub Categories",
    "Tags",
    "Filters",
    "Best In",
    "Extra Talent",
  ];

  const datalist = [
    "Apple",
    "orange",
    "khushvinder",
    "khushpreet",
    "Harpinder",
    "Singh",
    "Maan",
  ];

  return (
    <>
      <Navbar />
      <div className="tagpage_container">
        {tagName.map((val) => {
          return (
            <div
              className="tag-div"
              style={{ borderRight: "1px solid #8c8585" }}
            >
              <div className="tagpage_inner_div">
                <span className="tagpage_header">
                  <h3 onClick={() => setModalTitle(val)}> {val}</h3>
                  <FileAddOutlined
                    onClick={() => {
                      showModal();
                      setModalTitle(val);
                      setAddEdit("Add");
                    }}
                  />
                </span>
              </div>
              <div className="tag-items">
                {datalist.map((v, key) => {
                  return (
                    <div className="tag-name">
                      <span>
                        {key + 1}.
                        <h4
                          style={{ cursor: "pointer", display: "inline-block" }}
                        >
                          {v}
                        </h4>
                      </span>
                      <span className="tag-del-edi-icon">
                        <EditOutlined
                          onClick={() => {
                            editItme(key);
                            setIsModalOpen(true);
                            setAddEdit("Edit");
                            setModalTitle(val);
                          }}
                        />
                        <DeleteOutlined onClick={() => deleteItme(v.key)} />{" "}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <ModalPage
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        modalTitle={modalTitle}
        addEdit={addEdit}
      />
    </>
  );
};
export default TagPage;
