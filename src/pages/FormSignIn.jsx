import { useRef } from "react";
import axios from "axios";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const mail = useRef();
  const lastName = useRef();
  async function handleSignUp() {
    try {
      let data = {
        mail: mail.current.value, // this?
        lastName: lastName.current.value,
      };
    } catch (error) {
      console.error(error);
    }
    await axios.post(upiUrl + "users/signup", data);
  }
  return (
    <div className="flex flex-col items-end h-80 bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center pt-5 h-1">
      <div className="bg-white border p-4 gap-2 m-2">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="btn float-center border-black bg-red-500 text-black hover:text-white"
          onClick={handleSignUp}
        >
          Submit
        </button>
        <p>
        New to MyTinerary?{" "}
        <Anchor
          className="text-[20px] font-bold cursor-pointer"
          to="/auth/signup"
        >
          Sign up!
        </Anchor>
      </p>
      </div>
    </div>
  );
}
