import { useState } from "react";

const VideoFrame = ({
  placeholder,
  iframeSrc,
  imgClassName,
  iframeClassName,
}: {
  placeholder: string;
  iframeSrc: string;
  imgClassName: string;
  iframeClassName: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative w-full h-full`}>
      {!isPlaying && (
        <div className="w-full h-full">
          <img
            src={placeholder}
            alt="Video placeholder"
            className={`w-full h-full ${imgClassName}`}
          />

          <button
            onClick={() => setIsPlaying(true)}
            className={`absolute inset-0 flex items-center justify-center transition `}
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
        <iframe
          src={`${iframeSrc}?autoplay=1`}
          className={`w-full h-full ${iframeClassName}`}
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoFrame;
