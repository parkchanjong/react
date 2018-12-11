import React from "react";

// 비디오가 정의 되지 않아 비디오id를 읽을 수가 없음
const VideoDetail = ({ video }) => {
  //값은 props객체로 가져옴         비디오 객체안에 id있어서 url가져올수 있음
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //'https://www.youtube.com/embed/' + videoId;    es6 스타일

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-respons-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  ); //비디오아이디를 가지는 비디오는 i-frame을 통해 해당url을 가리키고 어플안에 유트브 프레이어로 보여짐
};

export default VideoDetail;
