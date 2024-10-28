import { useState } from "react";
import songFile from "../assets/Song/Fuera.mp3";
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
    id: 1, 
    title: "y si no fuera", 
    artist: "Artista 1", 
    audioSrc: songFile, 
    spotifyUrl: "https://open.spotify.com/track/spotify-id-1", 
    youtubeUrl: "https://www.youtube.com/watch?v=youtube-id-1" 
  },
  { 
    id: 2, 
    title: "Amarella", 
    artist: "Artista 2", 
    audioSrc: songFile1, 
    spotifyUrl: "https://open.spotify.com/track/spotify-id-2", 
    youtubeUrl: "https://www.youtube.com/watch?v=youtube-id-2" 
  },
  { 
    id: 3, 
    title: "El Momento", 
    artist: "Artista 3", 
    audioSrc: songFile2, 
    spotifyUrl: "https://open.spotify.com/track/spotify-id-3", 
    youtubeUrl: "https://www.youtube.com/watch?v=youtube-id-3" 
  },
  { 
    id: 4, 
    title: "Esa Droga", 
    artist: "Artista 4", 
    audioSrc: songFile3, 
    spotifyUrl: "https://open.spotify.com/track/spotify-id-4", 
    youtubeUrl: "https://www.youtube.com/watch?v=youtube-id-4" 
  },
  { 
    id: 5, 
    title: "Pegao Pegao", 
    artist: "Artista 5", 
    audioSrc: songFile4, 
    spotifyUrl: "https://open.spotify.com/track/spotify-id-5", 
    youtubeUrl: "https://www.youtube.com/watch?v=youtube-id-5" 
  },
];

// Audio player component
const AudioPlayer = ({ currentSong }: { currentSong: Song | null }) => {
  return (
    <div className="text-center m-10 h-10">
      {currentSong && (
        <audio key={currentSong.id} controls>
          <source src={currentSong.audioSrc} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}
      {currentSong ? (
        <p>{currentSong.title} - {currentSong.artist}</p>
      ) : (
        <p>Selecciona una canción para reproducir</p>
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

  const currentSong = currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div className="justify-items-center p-7">
      <div className="w-96 border shadow-xl items-center mt-7 rounded-lg bg-white p-8">
        <h2 className="text-center mb-4">Playlist</h2>
        <AudioPlayer currentSong={currentSong} />
        <button onClick={playNextSong} className="mb-4">Cambiar canción</button>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-2 text-center">Canción</th>
              <th className="p-2 text-center">Artista</th>
              <th className="p-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr
                key={song.id}
                className="cursor-pointer text-center"
              >
                <td className="border p-2">{song.title}</td>
                <td className="border p-2">{song.artist}</td>
                <td className="border p-2 flex justify-center gap-2">
                  <a
                    href={song.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Spotify
                  </a>
                  <a
                    href={song.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    YouTube
                  </a>
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
