import React from 'react'
import videojs from 'video.js'
// import 'videojs-contrib-hls'
import 'video.js/dist/video-js.css'

const VideoJS = props => {
  const videoRef = React.useRef(null)
  const playerRef = React.useRef(null)
  // const { options, onReady } = props

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return
      window.videojs = videojs
      const player = (playerRef.current = videojs(
        videoElement,
        {
          // withCredentials: true,
          sources: [
            {
              src: 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8',
              type: 'application/x-mpegURL',
            },
          ],
        },
        () => {
          console.log('player is ready')
          // onReady && onReady(player)
          player.play()
        },
      ))
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div>
      <video ref={videoRef} className="video-js vjs-big-play-centered">
        {/* <source src="http://devstreaming.apple.com/videos/wwdc/2015/413eflf3lrh1tyo/413/hls_vod_mvp.m3u8" type="applicationx-mpegURL" /> */}
      </video>
    </div>
  )
}

export default VideoJS
