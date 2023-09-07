import UserItem from "../../Components/UserItem";

const UsersList = ({ usersList }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>Lista de usuarios</h1>
        <ul className="list-group">
          {usersList.map((user) => {
            return <UserItem userData={user} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
