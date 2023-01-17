import React, { useState } from "react";
import { Upload } from "antd";
import ImgCrop from "antd-img-crop";
import Navbar from "../Navbar/Navbar";
import "./FileUploadStyle.less";

const FileUpload = () => {
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList, "newfilelist");
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div className="upload_page">
      <Navbar />
      <ImgCrop rotate>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default FileUpload;