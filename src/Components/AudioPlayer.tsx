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

// List of songs with unique IDs, artists, and URLs
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

// Audio player component
const AudioPlayer = ({ currentSong }: { currentSong: Song | null }) => {
  return (
    <div className="text-center m-10 h-10 bg">
      {currentSong ? (
        <div className="flex justify-center">
          <audio
            key={currentSong.id}
            controls
            className="w-3/4" // Hacer la barra más larga (75% del contenedor)
            style={{
              backgroundColor: "#4CAF50", // Cambiar el color de la barra de reproducción (puedes ajustarlo a tu color)
              borderRadius: "10px",
            }}
          >
            <source src={currentSong.audioSrc} type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
      ) : (
        <p>Selecciona una canción para reproducir</p>
      )}
      {currentSong && (
        <p className="text-white mt-2">
          {currentSong.title} - {currentSong.artist}
        </p>
      )}
    </div>
  );
};

// Playlist component with song table
const Playlist = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(0);

  const playNextSong = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
      console.log("Cambiando a la siguiente canción:", songs[nextIndex].title);
    }
  };

  const setSong = (index: number) => {
    setCurrentSongIndex(index);
    console.log("Canción seleccionada:", songs[index].title);
  };

  const currentSong =
    currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div className="flex justify-center p-7">
      <div className="w-full max-w-4xl border shadow-xl rounded-lg p-8 bg-gray-800">
        <h2 className="text-center text-4xl font-semibold mb-6 text-white">
          Playlist
        </h2>
        <AudioPlayer currentSong={currentSong} />
        <button
          onClick={playNextSong}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Cambiar canción
        </button>
        <table className="w-full table-auto text-white">
          <thead>
            <tr className="bg-gray-700 text-xl">
              <th className="p-3 text-center font-medium">Canción</th>
              <th className="p-3 text-center font-medium">Artista</th>
              <th className="p-3 text-center font-medium">Acciones</th>
              <th className="p-3 text-center font-medium">Seleccionar</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id} className="hover:bg-gray-600 cursor-pointer">
                <td className="border p-3 text-center">{song.title}</td>
                <td className="border p-3 text-center">{song.artist}</td>
                <td className="border p-3 text-center flex justify-center gap-2">
                  <a
                    href={song.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    Spotify
                  </a>
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    YouTube
                  </a>
                </td>
                <td className="border p-3 text-center">
                  <button
                    onClick={() => setSong(index)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Seleccionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Playlist;
