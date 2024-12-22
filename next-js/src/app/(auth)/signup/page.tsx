"use client"

import axios from "axios";

const Signup = () => {

  const hadndleClick:()=>void =async ()=>{
    const res = await axios.post("/api/signup",{
      username:"a",
      password:"b"
    })
    console.log(res.data)
  }
  return (
    <div className="flex flex-col border-solid border-2 max-w-max m-auto rounded-2xl border-slate-500 p-4 justify-center items-center">
      <input type="text" className="px-1 py-2 rounded-lg my-2" placeholder="User Name" name="" id="" />
      <input type="text" className="px-1 py-2 rounded-lg my-2" name="" placeholder="Password" id="" />
      <button onClick={hadndleClick} className="px-2 py-2 text-xl font-semibold rounded-xl bg-slate-200 text-slate-800">Signup</button>
    </div>
  );
};

export default Signup;
