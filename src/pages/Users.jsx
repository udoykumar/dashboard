import { useAppContext } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import { motion } from "motion/react";
const Users = () => {
  const { users } = useAppContext();
  console.log(users);

  return !users ? (
    <h1>loading..</h1>
  ) : (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className=" lg:w-1/2 mt-3 lg:ml-3 "
    >
      <div className=" space-y-1 ">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </motion.div>
  );
};

export default Users;
