import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
function Admin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [token, setToken] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCTk6RhR2tDmhMOKfDwBOWLFoHm5wbH-C8",
        data
      )
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.localId);

        setError("");
        setToken(res.data.idToken);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="mx-auto w-6/12 h-screen ">
      <form className="flex flex-col justify-cetner">
        <label className="mt-4 "> Email </label>
        <input
          type="text"
          className="border border-black p-2 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-4 "> Password </label>
        <input
          type="password"
          className="border border-black p-2  "
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="py-2 px-6 bg-red-400 bg-opacity-10 text-red-400 font-semibold mt-10">
            {error}
          </div>
        )}
        {token &&  <Redirect to ='/adminPanel'/>}
        <input
          type="submit"
          value="Нэвтрэх"
          className=" my-4 bg-primary-blue text-white  py-3 cursor-pointer"
          onClick={submitHandler}
        />
      </form>
    </div>
  );
}

export default Admin;
