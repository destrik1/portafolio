import React, { useRef, useEffect } from "react";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  Youtube?: string; // Enlace de YouTube opcional
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, Youtube }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement) return;

    // Configuración del Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Si el video está visible, se reproduce
          videoElement.play();
        } else {
          // Si el video sale del viewport, se pausa
          videoElement.pause();
        }
      },
      {
        threshold: 0.5, // Al menos el 50% del video debe estar visible para que se reproduzca
      }
    );

    observer.observe(videoElement);

    // Limpieza del Observer cuando el componente se desmonta
    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  const handleClick = () => {
    if (Youtube) {
      window.location.href = Youtube; // Redirige al enlace de YouTube si está disponible
    }
  };

  return (
    <div className="relative w-full max-w-sm p-4 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow">
      <div
        className="relative overflow-hidden rounded-lg group"
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
