import { Link } from "react-router-dom";

const Songs = () => {
  return (
    <div className="col-12">
      <h1>Esta es la lista de canciones</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="1">Song 01 !!</Link>
        </li>
        <li className="list-group-item">
          <Link to="2">Song 02 !!</Link>
        </li>
        <li className="list-group-item">
          <Link to="3">Song 03 !!</Link>
        </li>
      </ul>
    </div>
  );
};

export default Songs;
