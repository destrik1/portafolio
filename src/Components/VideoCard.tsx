import React, { useRef } from 'react';

interface VideoCardProps {
  videoSrc: string;
  title: string;
  Youtube?: string; // Enlace de YouTube opcional
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, Youtube }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  const handleClick = () => {
    if (Youtube) {
      window.location.href = Youtube;  // Redirige al enlace de YouTube si está disponible
    }
  };

  return (
    <div className="relative w-full max-w-sm p-4 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      {/* Envolver el video con un div que detecte el clic para redirigir */}
      <div
        className="relative overflow-hidden rounded-lg group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick} // Maneja el clic para la redirección
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          muted
          loop
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
