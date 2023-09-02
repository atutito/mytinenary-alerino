import { useRef } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor } from "react-router-dom";

export default function Form() {
  const name = useRef("");
  const lastName = useRef("");
  const country = useRef("");
  const photo = useRef("");
  const mail = useRef("");
  const password = useRef("");
  async function handleSignUp() {
    try {
      let data = {
        name: name.current.value,
        lastName: lastName.current.value,
        country: country.current.value,
        photo: photo.current.value,
        mail: mail.current.value,
        password: password.current.value,
      };
      await axios.post(
        apiUrl + "users/signup", 
        data
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex place-content-center bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center p-5">
    <div className="flex flex-col self-center	w-50 bg-white border p-4 m-2 border gap-1">
      <div className="form-group">
        <label for="name">Name</label>
        <input
          ref={name}
          type="text"
          className="form-control"
          name="name"
          id="name"
          defaultValue=""
          placeholder="Type Name"
        />
      </div>
      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input
          ref={lastName}
          type="text"
          className="form-control"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Type Last Name"
        />
      </div>
      <div className="form-group">
        <label for="country">Country</label>
        <input
          ref={country}
          type="text"
          className="form-control"
          name="country"
          id="country"
          defaultValue=""
          placeholder="Type country"
        />
      </div>
      <div className="form-group">
        <label for="photo">Photo</label>
        <input
          ref={photo}
          type="text"
          className="form-control"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Type Photo"
        />
      </div>
      <div className="form-group">
        <label for="mail">Email</label>
        <input
          ref={mail}
          type="text"
          className="form-control"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          ref={password}
          type="password"
          className="form-control"
          name="password"
          id="password"
          defaultValue=""
          placeholder="Type Password"
        />
      </div>
      <input
        type="button"
        className="btn float-center border-black bg-red-500 text-black hover:text-white"
        value="Sign Up!"
        onClick={handleSignUp}
      />
      <p>
        Already have an account?{" "}
        <Anchor
          className="text-[20px] font-bold text-red-800 cursor-pointer"
          to="/auth/signin"
        >
          Sign in
        </Anchor>
      </p>
      </div>
      </div>
  );
}
