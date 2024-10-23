import { useState } from "react";
import songFile from "../assets/Song/Fuera.mp3";
import songFile1 from "../assets/Song/Amarella.mp3";
import songFile2 from "../assets/Song/ElMomento.mp3";
import songFile3 from "../assets/Song/EsaDroga.mp3";
import songFile4 from "../assets/Song/PegaoPegao.mp3";

// Definición del tipo Song
interface Song {
  id: number;
  title: string;
  artist: string; // Agregamos el campo artista
  audioSrc: string;
}

// Lista de canciones con IDs únicos y artistas
const songs: Song[] = [
  { id: 1, title: "y si no fuera", artist: "Artista 1", audioSrc: songFile },
  { id: 2, title: "Amarella", artist: "Artista 2", audioSrc: songFile1 },
  { id: 3, title: "El Momento", artist: "Artista 3", audioSrc: songFile2 },
  { id: 4, title: "Esa Droga", artist: "Artista 4", audioSrc: songFile3 },
  { id: 5, title: "Pegao Pegao", artist: "Artista 5", audioSrc: songFile4 },
];

// Componente del reproductor de audio
const AudioPlayer = ({ currentSong }: { currentSong: Song | null }) => {
  console.log("Reproduciendo:", currentSong);

  return (
    <div className="text-center m-20">
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

// Componente de la lista de canciones con tabla
const Playlist = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(0);

  const playNextSong = () => {
    if (currentSongIndex !== null) {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
      console.log("Cambiando a la siguiente canción:", songs[nextIndex].title);
    }
  };

  const currentSong =
    currentSongIndex !== null ? songs[currentSongIndex] : null;

  return (
    <div
      className="flex justify-center items-center h-[70vh]"
    >
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
                onClick={() => {
                  console.log("Cambiando canción a:", song.title);
                  setCurrentSongIndex(index);
                }}
                className="cursor-pointer text-center"
              >
                <td className="border p-2">{song.title}</td>
                <td className="border p-2">{song.artist}</td>
                <td className="border p-2">
                  <button onClick={() => console.log(`Reproduciendo: ${song.title}`)}>Reproducir</button>
                  <button onClick={() => console.log(`Favorito: ${song.title}`)}>Favorito</button>
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