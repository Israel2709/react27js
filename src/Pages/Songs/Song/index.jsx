import { useParams } from "react-router-dom";

const Song = () => {
  const { songId } = useParams();
  console.log(songId);
  return <h1>Esta es la página de la canción {songId}</h1>;
};

export default Song;
