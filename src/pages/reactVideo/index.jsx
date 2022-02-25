import React, { useRef } from "react";
import VideoJS from "./videoplugin"; // point to where the functional component is stored

const VideoUse = () => {
  const playerRef = useRef(null);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    // responsive: true,
    // fluid: true,
    // height,
    // width,
 
    preload: "auto",

    // html5: {
    //     hls: {
    //       withCredentials: true
    //     }
    //   },
    sources: [
      {
        src: "http://devstreaming.apple.com/videos/wwdc/2015/413eflf3lrh1tyo/413/hls_vod_mvp.m3u8" ,
        type: 'application/x-mpegURL',
        // withCredentials: true
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.play()

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
    
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };

  return (
    <>
      <div>Rest of app here</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />

    </>
  );
};
export default VideoUse;
