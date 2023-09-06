import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?inc=name,picture,login&results=20"
      );
      const data = await response.json();
      setUsersList(data.results);
    };
    getUsers();
  }, []);

  const createUserList = () => {
    return <h1>usersList</h1>;
  };

  const createUserDetail = () => {
    return <h1>User detail</h1>;
  };

  const chooseContent = (path) => {
    switch (path) {
      case "list":
        return createUserList();

      case "detail":
        return createUserDetail();

      default:
        return <h1>Not found u.u </h1>;
    }
  };
  return (
    <div className="container">
      <div className="row">
        {chooseContent("list")}
        {chooseContent("detail")}
        {chooseContent("shop")}

        {/*
<div className="col-12">
          <h1>Lista de usuarios</h1>
          <ul className="list-group">
            {usersList.map((user) => {
              const { name, login, picture } = user;
              return (
                <li
                  key={login.uuid}
                  className="list-group-item d-flex justify-content-around align-items-center"
                >
                  <div style={{ width: "50px", height: "50px" }}>
                    <img
                      src={picture.thumbnail}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>

                  <span className="fs-1">
                    {name.first} {name.last}
                  </span>
                  <button className="btn btn-primary">Detalle</button>
                </li>
              );
            })}
          </ul>
        </div>
          */}
      </div>
    </div>
  );
}

export default App;
