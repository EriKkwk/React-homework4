import User from "./User";

export default function UsersList({users}) {
  return (
    <div className="usersList-container">
      {users.map((user) => (
        <User id={user.id} login={user.login} avatar_url={user.avatar_url} key = {user.id}/>
      ))}
    </div>
  );
}
