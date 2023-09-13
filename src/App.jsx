import "./App.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [playList, setPlayList] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatePlaylist, setUpdatePlaylist] = useState(false);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "Aire",
      artist: "Mecano",
    },
  });

  const editHandler = (songKey) => {
    setIsEditing(true);
    console.log(songKey);
    const selectedSong = playList.find((song) => song.songKey === songKey);
    console.log(selectedSong);
    reset(selectedSong);
  };

  const saveChanges = async (data) => {
    const { name, artist, songKey } = data;
    const response = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/playlist/${songKey}.json`,
      {
        method: "PUT",
        body: JSON.stringify({ name, artist }),
      }
    );
    const dbData = await response.json();
    reset({ name: "", artist: "" });
    setIsEditing(false);
    setUpdatePlaylist(!updatePlaylist);
    console.log(dbData);
  };

  const deleteHandler = async (songKey) => {
    const response = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/playlist/${songKey}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    setUpdatePlaylist(!updatePlaylist);
  };
  useEffect(() => {
    const getPlayList = async () => {
      const response = await fetch(
        "https://javascript27g-default-rtdb.firebaseio.com/playlist/.json"
      );
      const data = await response.json();
      const songsArray = Object.keys(data).map((key) => ({
        ...data[key],
        songKey: key,
      }));
      setPlayList(songsArray);
    };
    getPlayList();
  }, [updatePlaylist]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          <h1>Amazing playlist:</h1>
          <ul className="list-group">
            {playList &&
              playList.map((song) => {
                const { name, artist, songKey } = song;
                return (
                  <li
                    key={songKey}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <p>
                      Song:{name} by: {artist}
                    </p>
                    <div className="d-flex gap-3">
                      <button
                        className="btn btn-dark"
                        onClick={() => editHandler(songKey)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteHandler(songKey)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="col-12 col-md-6">
          {isEditing && (
            <form
              onSubmit={handleSubmit(saveChanges)}
              className="bg-dark text-white border rounded p-3"
            >
              <div className="form-group mb-3">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Artist</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("artist")}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Gudardar cambios
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
