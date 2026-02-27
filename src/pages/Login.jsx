import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AppContext, baseUrl } from "../context/AuthContext";
import Loading from "../components/loading";

const Login = () => {
  const { login, loading } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log({ email, password, baseUrl });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(`${baseUrl}/api/login`, {
        email,
        password,
      });
      console.log(data.data.email);
      const tok = data.data.token;
      if (tok) {
        localStorage.setItem("token", tok);
        login(tok);
        toast.success("Logged in successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-primary">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-3">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md py-2 px-3 border border-gray-300 outline-none"
              type="email"
              placeholder="your@gmail.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md py-2 px-3 border border-gray-300 outline-none"
              type="password"
              placeholder="Inter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-secondary hover:bg-secondary-dull duration-300 px-4 py-2 text-white mt-2 w-full rounded-md"
          >
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
