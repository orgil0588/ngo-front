import React, {useState} from "react";

function Admin() {
const [email, setEmail] = useState()
const [password, setPassword] = useState()


  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password)
  };
  return (
    <div className="mx-auto w-6/12 h-screen ">
      <form className="flex flex-col justify-cetner">
        <label className="mt-4 "> Email </label>
        <input type="text" className="border border-black p-2 " onChange={e => setEmail(e.target.value)} />
        <label className="mt-4 "> Password </label>
        <input type="password" className="border border-black p-2  " onChange={e => setPassword(e.target.value)} />
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
