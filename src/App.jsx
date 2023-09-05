import "./App.css";
import React, { useState, useEffect } from "react";

//https://javascript27g-default-rtdb.firebaseio.com/koders

function App() {
  const [songs, setSongs] = useState(null);
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(true);
  const [update, setUpdate] = useState(false);
  const [songData, setSongData] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  //useEffect(callback, dependencyArray)

  useEffect(() => {
    console.log("hola Koders");
  }, [test1]);

  useEffect(() => {
    const getSongs = async () => {
      const response = await fetch(
        "https://javascript27g-default-rtdb.firebaseio.com/playlist/.json"
      );
      const data = await response.json();
      console.log(data);
      setSongs(data);
    };
    getSongs();
  }, [update]);

  const updateHandler = () => setUpdate(!update);

  const inputHandler = (event) => {
    setSongData({ ...songData, [event.target.name]: event.target.value });
  };

  const saveSong = async () => {
    const response = await fetch(
      "https://javascript27g-default-rtdb.firebaseio.com/playlist/.json",
      {
        method: "POST",
        body: JSON.stringify(songData),
      }
    );
    const data = await response.json();
    setUpdate(!update);
  };

  const deleteHandler = async (key) => {
    const response = await fetch(
      `https://javascript27g-default-rtdb.firebaseio.com/playlist/${key}.json`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    setUpdate(!update);
  };
  const loginHandler = () => {
    if (!isLogged) {
      const token = "123456";
      localStorage.setItem("token", token);
      setIsLogged(!isLogged);
    } else if (isLogged) {
      localStorage.removeItem("token");
      setIsLogged(!isLogged);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token: ", token);
    token ? setIsLogged(true) : setIsLogged(false);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-end">
              <button className="btn btn-success" onClick={loginHandler}>
                {isLogged ? "Log out" : "Log in"}
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {isLogged && (
            <div className="col-12 col-md-6 pb-3">
              <h1>Registra una canción:</h1>

              <form action="" className="bg-dark text-white p-3 border rounded">
                <div className="form-group mb-3">
                  <label htmlFor="">Song Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={inputHandler}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="">Artist</label>
                  <input
                    type="text"
                    className="form-control"
                    name="artist"
                    onChange={inputHandler}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={saveSong}
                >
                  guardar
                </button>
              </form>
            </div>
          )}
          <div className="col-12 col-md-6 pb-3">
            <h1 className="d-flex justify-content-between align-items-center">
              Lista de canciones:{" "}
              <button className="btn btn-primary" onClick={updateHandler}>
                Actualizar lista
              </button>
            </h1>

            <ul className="list-group">
              {songs &&
                Object.keys(songs).map((key) => (
                  <li
                    key={key}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {songs[key].name}: {songs[key].artist}
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(key)}
                    >
                      Borrar
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
