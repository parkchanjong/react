import React from 'react';

const VideoListItem = ({video}) => {
    //const video = props.video;//props에 비디오 할당  ==const VideoListItem = ({video}) => { 과 동일 =비디오를 가져와 새로운 video를 생성
    const imageURL = video.snippet.thumbnails.default.url;//비디오 가져와 이미지url 선언-- 유트브로 부터 반환되는값(이미지줌)-썸네일-스크립트변수
    return(
    <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageURL} />
            </div>   
            <div className="media-body">
            <div className="media-heading">{video.snippet.title}}</div>
            </div>
        </div>
    </li>
    );
};//비디로 리스트 하나하나 썸네일과 타이틀 보여짐

export default VideoListItem;