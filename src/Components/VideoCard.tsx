import React, { useRef, useEffect, useState } from "react";

interface VideoCardProps {
  videoSrc: string;
  title: string;
  Youtube?: string; // Enlace de YouTube opcional
}

const VideoCard: React.FC<VideoCardProps> = ({ videoSrc, title, Youtube }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si el dispositivo es móvil
  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768); // Considera móvil si el ancho es menor o igual a 768px
    };

    updateDeviceType(); // Configuración inicial
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // Configurar IntersectionObserver para autoplay en móviles
  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || !isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 } // Al menos el 50% del video visible
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [isMobile]);

  // Reproducción en PC al hacer hover
  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Redirigir a YouTube si hay enlace
  const handleClick = () => {
    if (Youtube) {
      window.open(Youtube, "_blank");
    }
  };

  return (
    <div
      className="relative w-full max-w-sm p-4 bg-black shadow-lg rounded-lg hover:shadow-xl transition-shadow"
      onClick={handleClick} // Manejar clic para redirigir
    >
      <div
        className="relative overflow-hidden rounded-lg group cursor-pointer"
        onMouseEnter={handleMouseEnter} // Hover para PC
        onMouseLeave={handleMouseLeave} // Salida del hover en PC
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg transition-all"
          src={videoSrc}
          muted
          loop
          playsInline // Necesario para autoplay en móviles
          onMouseEnter={handleMouseEnter} // Hover para PC
          onMouseLeave={handleMouseLeave} // Salida del hover en PC
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
