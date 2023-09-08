import { Link, Outlet } from "react-router-dom";

const Users = () => {
  return (
    <div className="col-12">
      <h1>Users Dashboard</h1>
      <div className="row">
        <div className="col-12 col-md-3">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="create">Create User</Link>
            </li>
            <li className="list-group-item">
              <Link to="list-all">List all users</Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Users;
