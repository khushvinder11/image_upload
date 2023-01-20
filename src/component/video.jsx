import React from "react";

const Video = () => {
  // const aa = 2;

  // const bb = Math.random();
  // console.log(bb);
  return (
    <div>
      <iframe
        width="420"
        height="245"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <iframe
        width="420"
        height="245"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WsRhQwpmGw4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
