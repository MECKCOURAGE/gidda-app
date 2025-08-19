import { useState } from "react";

interface VideoFrameProps {
  placeholder: string;
  iframeSrc: string;
  imgClassName?: string;
  iframeClassName?: string;
  onPlay?: () => void;
  onPause?: () => void;
}

const VideoFrame = ({
  placeholder,
  iframeSrc,
  imgClassName = "",
  iframeClassName = "",
  onPlay,
  onPause,
}: VideoFrameProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      if (newState) {
        onPlay?.();
      } else {
        onPause?.();
      }
      return newState;
    });
  };

  return (
    <div className="relative w-full h-full">
      {!isPlaying && (
        <div className="w-full h-full relative">
          <img
            src={placeholder}
            alt="Video placeholder"
            className={`w-full h-full ${imgClassName}`}
          />
          <button
            onClick={togglePlayPause}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="p-[5px] bg-neutralWhite border-2 border-green rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#335F32"
                viewBox="0 0 24 24"
                className="w-12 h-12"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="relative w-full h-full">
          <iframe
            src={`${iframeSrc}?autoplay=1`}
            className={`w-full h-full ${iframeClassName}`}
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
          <button
            onClick={togglePlayPause}
            className="absolute top-2 right-2 p-2 bg-neutralWhite rounded-full border border-green flex items-center justify-center"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#335F32"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoFrame;
