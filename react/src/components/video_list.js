//데이터 표시하는 준비
import React from 'react';
//const videos = props.videos;  props인 비디오가 비디오 리스트로 전달- 랜더링 될떄 마다 전달

import VideoListItem from './video_list_item';
//함수형 기반
const VideoList = (props) => {  
    const videoItems = props.video.map((video) => {//넘겨받은 props를 video_list_item에 반환
        return (

        <VideoListItem 
        onVideoSelect={props.onVideoSelect}//앱으로 부터 가져온 props를  비디오리스트 아이템으로 전달
        key={video.etag} 
        video={video} />
    );
    });//key={video.etag} -리스트 하나한에 키 부여- 개별업데이트할수 있어 -프로세스 빨라짐

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );  //리팩토링할때 props를 this.props로  //{props.videos.length} props를 받아 비디오 배열을 가짐
};

export default VideoList;