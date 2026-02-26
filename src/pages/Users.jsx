import { useAppContext } from "../context/AuthContext";
import UserCard from "../components/UserCard";

const Users = () => {
  const { users } = useAppContext();
  console.log(users);

  return !users ? (
    <h1>loading..</h1>
  ) : (
    <div className=" lg:w-1/2 mt-3 lg:ml-3 ">
      <div className=" space-y-1 ">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
