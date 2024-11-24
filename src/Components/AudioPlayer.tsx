import { useState } from "react";
import songFile1 from "../assets/Song/Amarella.mp3";
import songFile2 from "../assets/Song/ElMomento.mp3";
import songFile3 from "../assets/Song/EsaDroga.mp3";
import songFile4 from "../assets/Song/PegaoPegao.mp3";

// Define Song type
interface Song {
  id: number;
  title: string;
  artist: string;
  audioSrc: string;
  spotifyUrl: string;
  youtubeUrl: string;
}

// Lista de canciones
const songs: Song[] = [
  {
    id: 2,
    title: "Amarella",
    artist: "NR x Matita x PAYA x FRESKOBEATS",
    audioSrc: songFile1,
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/3ImFUPNS1fQFEbcGwiYzhB?si=ebd46446134b4fa2",
    youtubeUrl: "https://www.youtube.com/watch?v=3PEsPqIOlzU",
  },
  {
    id: 3,
    title: "El Momento",
    artist: "PAYA x DJ LUVID",
    audioSrc: songFile2,
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/07sMYGHaCgtGImSLMN2lhg?si=d1eedb0b6b654521",
    youtubeUrl: "https://youtu.be/NVuc4C25WmY?si=zUdEg2BUfPUZhEOl",
  },
  {
    id: 4,
    title: "Esa Droga",
    artist: "PAYA x DJ LUVID",
    audioSrc: songFile3,
    spotifyUrl:
      "https://open.spotify.com/intl-es/track/0wwDRmD9Ak75lcl8HjkNfq?si=fc5f194ce8e342ec",
    youtubeUrl: "https://youtu.be/Z17LOZi4tCw?si=U1gA8gmkL4PTCd3j",
  },
  {
    id: 5,
    title: "Pegao Pegao",
    artist: "PAYA x DJ LUVID Ft Matita, Riilax, Demcy",
    audioSrc: songFile4,
    spotifyUrl: "https://open.spotify.com/track/spotify-id-5",
    youtubeUrl: "https://youtu.be/sHl_OUSFI9I?si=GqzOBmJDLhGcMHhT",
  },
];

// Componente para el reproductor de audio
const AudioPlayer = ({ currentSong }: { currentSong: Song | null }) => {
  return (
    <div className="flex flex-col items-center mb-6">
      {currentSong ? (
        <>
          {/* Reproductor de audio */}
          <audio
            key={currentSong.id}
            controls
            className="w-full max-w-[350px] rounded-lg"
            controlsList="nodownload" // Evita descargas
          >
            <source src={currentSong.audioSrc} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>

          {/* Información de la canción */}
          <p className="mt-4 text-white text-lg font-semibold text-center">
            {currentSong.title}
          </p>
          <p className="text-gray-400 text-sm text-center">
            {currentSong.artist}
          </p>
        </>
      ) : (
        <p className="text-gray-300 text-lg">Selecciona una canción</p>
      )}
    </div>
  );
};

// Componente principal de Playlist
const Playlist = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(0);

  const setSong = (index: number) => {
    setCurrentSongIndex(index);
  };

  const currentSong =
    currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div className="flex justify-center min-h-screen p-6">
      <div className="w-full max-w-md border shadow-lg rounded-md p-6 bg-gray-800">
        {/* Título */}
        <h2 className="text-center text-2xl font-bold mb-6 text-white">
          Playlist
        </h2>

        {/* Reproductor de audio */}
        <AudioPlayer currentSong={currentSong} />

        {/* Tabla de canciones */}
        <div className="space-y-4">
          {songs.map((song, index) => (
            <div
              key={song.id}
              className={`flex flex-col bg-gray-700 p-4 rounded-md hover:bg-gray-600 transition ${
                currentSongIndex === index ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setSong(index)}
            >
              <p className="text-base text-white">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist}</p>
              <div className="flex gap-3 mt-2">
                <a
                  href={song.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white text-sm px-3 py-2 rounded hover:bg-green-600 transition"
                >
                  Spotify
                </a>
                <a
                  href={song.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white text-sm px-3 py-2 rounded hover:bg-red-600 transition"
                >
                  YouTube
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
