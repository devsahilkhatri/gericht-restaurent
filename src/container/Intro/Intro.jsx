import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handlePlay = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <section className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp3"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handlePlay}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" size={30} />
          ) : (
            <BsFillPlayFill color="#fff" size={30} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Intro;
