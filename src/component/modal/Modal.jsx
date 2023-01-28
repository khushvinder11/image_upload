import React, { useState } from "react";
import { Select, Modal } from "antd";
import "./ModalStyle.less";

const ModalPage = (props) => {
  const { isModalOpen, handleCancel, handleOk, modalTitle, addEdit } = props;
  const [tagname, setTageName] = useState();
  console.log(tagname, "tagneme");
  const [secondTagName, setSecondTagName] = useState([]);
  console.log(secondTagName, "secondTagName");

  // modal...............
  const handleChange = (value) => {
    console.log(value, "value");
    // setValueItem(value);
    const db = value.map((val) => {
      return {
        key: val.toLowerCase().replace(/\W/, "-"),
        value: val,
      };
    });
    console.log(db, "dpdp");

    setTageName(db);
  };

  return (
    <>
      <Modal
        title={`${addEdit} ${modalTitle}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            // minWidth: "90px",
            fontSize: "12px",
          }}
        >
          <span style={{ color: "red", fontSize: "21px" }}>*</span> {modalTitle}
        </div>
        <Select
          mode="tags"
          style={{
            width: "100%",
          }}
          placeholder={modalTitle}
          onChange={handleChange}
          //   options={options}
        />
      </Modal>
    </>
  );
};

export default ModalPage;
