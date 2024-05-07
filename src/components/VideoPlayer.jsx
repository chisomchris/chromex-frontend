import { useEffect, useRef, useState } from "react";
import settingBtn from "../assets/setting-2.png";
import playBtn from "../assets/play-circle.png";
import volumeBtn from "../assets/volume-high.png";
import { useParams } from "react-router-dom";

function formatTime(duration) {
  if (typeof duration !== "number" || duration < 0) return;
  const dd = (d) => (d.toString().length == 2 ? d : `0${d}`);
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration - hours * 3600) / 60);
  const seconds = Math.floor(duration - hours * 3600 - minutes * 60);
  return `${hours > 0 ? hours + ":" : ""}${minutes}:${dd(seconds)}`;
}

export function VideoPlayer() {
  const { video_id } = useParams();
  // console.log(video_id);
  const videoRef = useRef();
  const [duration, setDuration] = useState(videoRef.current?.duration || 0);
  const [playhead, setPlayhead] = useState(videoRef.current?.currentTime || 0);
  const [paused, setPaused] = useState(true);

  const playPuase = (video) => {
    if (video instanceof HTMLVideoElement) {
      if (video.paused || video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }
  };
  const onPlayPause = (e) => {
    setPaused(e.currentTarget.paused);
  };
  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offset = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = offset * duration;
  };

  useEffect(() => {
    const getDuration = (e) => {
      setDuration(e.currentTarget.duration);
    };
    const updateProgress = (e) => {
      setPlayhead(e.currentTarget.currentTime);
    };

    videoRef.current instanceof HTMLVideoElement &&
      videoRef.current.addEventListener("durationchange", getDuration);

    videoRef.current instanceof HTMLVideoElement &&
      videoRef.current.addEventListener("timeupdate", updateProgress);

    return () => {
      videoRef.current instanceof HTMLVideoElement &&
        videoRef.current.removeEventListener("durationchange", getDuration);

      videoRef.current instanceof HTMLVideoElement &&
        videoRef.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="border border-[#413C6D] rounded-2xl aspect-video max-w-lg">
      <video
        id="video"
        // autoPlay
        // controls
        preload="auto"
        className="h-full w-full rounded-t-2xl"
        ref={videoRef}
        onPlay={onPlayPause}
        onPause={onPlayPause}
      >
        <source
          src={`http://localhost:4000/api/v1/videos/watch/${video_id}`}
          type="video/mp4"
        />
        <source
          src={`http://192.168.43.52:4000/api/v1/videos/watch/${video_id}`}
          type="video/mp4"
        />
        <p>
          Download{" "}
          <a href="http://192.168.43.52:4000/api/v1/videos/watch">Video here</a>
        </p>
      </video>

      <div className="relative flex justify-between items-center px-4 pt-5 pb-3">
        <div
          className="absolute w-full h-1 top-0 left-0 right-0 bg-[#3333] rounded-full cursor-pointer"
          onClick={seek}
        >
          <div
            className="h-full bg-[#120B48] rounded-full"
            style={{
              width: `${
                duration > 0 ? Math.floor((playhead / duration) * 100) : 0
              }%`,
            }}
          />
        </div>

        <p className="text-xl font-medium text-[#939393]">
          <span>{formatTime(playhead)}</span> /{" "}
          <span>{formatTime(duration)}</span>
        </p>

        <div className="flex flex-nowrap gap-2 text-[#141414]">
          <div className="flex flex-col items-center">
            <button onClick={() => playPuase(video)} className="px-2 py-1">
              <img className="w-6" src={playBtn} alt="" />
            </button>
            <p className="text-xs font-medium">{paused ? "Play" : "Pause"}</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="px-2 py-1">
              <img className="w-6" src={volumeBtn} alt="" />
            </button>
            <p className="text-xs font-medium">Volume</p>
          </div>
          <div className="flex flex-col items-center">
            <button className="px-2 py-1">
              <img className="w-6" src={settingBtn} alt="" />
            </button>
            <p className="text-xs font-medium">Settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
