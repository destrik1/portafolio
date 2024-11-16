import React from "react";

interface Video {
  src: string;
  url: string;
}

interface VideoCardProps {
  videos: Video[];
}

const VideoCard: React.FC<VideoCardProps> = ({ videos }) => {
  const handleClick = (url: string) => {
    window.location.href = url; // Redirige a la URL proporcionada
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen p-4 overflow-auto ">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative w-full max-w-md overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer"
          onClick={() => handleClick(video.url)}
        >
          <video
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            loop
            muted
            preload="auto"
            onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
            onMouseLeave={(e) => (e.currentTarget as HTMLVideoElement).pause()}
          >
            <source src={video.src} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const videos: Video[] = [
    {
      src: "/video/esa_droga.mp4",
      url: "https://www.youtube.com/watch?v=video1",
    },
    {
      src: "/video/esa_droga.mp4",
      url: "https://www.youtube.com/watch?v=video2",
    },
    {
      src: "/video/esa_droga.mp4",
      url: "https://www.youtube.com/watch?v=video3",
    },
  ];

  return <VideoCard videos={videos} />;
};

export default App;
