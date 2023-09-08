import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import CreateUser from "./Pages/Users/CreateUser";
import ListAll from "./Pages/Users/ListAll";
import Detail from "./Pages/Products/Detail";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="users/list-all">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Productos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/users" element={<Users />}>
              <Route path="create" element={<CreateUser />} />
              <Route path="list-all" element={<ListAll />} />
            </Route>
            <Route path="/products" element={<Products />} />
            <Route path="/products/detail/:productId" element={<Detail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

{
  /*<Routes>
        <Route path="/home" element={<Home />}>
          <Route path="messages" element={<h1>Messages</h1>} />
          <Route path="tasks" element={<h1>Tasks</h1>} />
        </Route>
        <Route path="about" element={<h2 className="text-danger">About</h2>} />
  </Routes>*/
}
