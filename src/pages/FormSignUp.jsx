import { useRef,useEffect,useState } from "react";
import axios from "axios";
import apiUrl from "../apiUrl";
import { Link as Anchor,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_actions from "../store/actions/users"
import Swal from "sweetalert2";
const { read_6_users } = user_actions

export default function SignUp() {
    const navigate = useNavigate()
    const name = useRef("");
    const lastName = useRef("");
    const country = useRef("");
    const photo = useRef("");
    const mail = useRef("");
    const password = useRef("");
    const [reload,setReload] = useState(false)
    const dispatch = useDispatch()
    useEffect(
      ()=>{dispatch(read_6_users())},
      [reload]
    )
    async function handleSignUp() {
      try {
        let data = {
          name: name.current.value,
          lastName: lastName.current.value,
          country: country.current.value,
          mail: mail.current.value,
          password: password.current.value,
        };
        if (photo.current.value) {
          data.photo = photo.current.value
        }
        await axios.post(
          apiUrl + "auth/register",
          data
        );
        setReload(!reload)
        Swal.fire({
          icon: "success",
          title: "User registered!",
          text: "Now log in ;)"
        });
        navigate("/auth/signin")
      } catch (error) {
        let errorcito = error.response.data.messages 
        Swal.fire({
          icon: "error",
          title: "User NOT registered!",
          html: errorcito.join('<br>')
      })
    }}
  return (
    <div className="flex place-content-center bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center p-5">
    <div className="flex flex-col self-center	w-50 bg-white border p-4 m-2 border gap-1">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          ref={name}
          type="text"
          className="form-control rounded-lg border border-black"
          name="name"
          id="name"
          defaultValue=""
          placeholder="Type Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          ref={lastName}
          type="text"
          className="form-control rounded-lg border border-black"
          name="lastName"
          id="lastName"
          defaultValue=""
          placeholder="Type Last Name"
        />
      </div>
      <div className="form-group">
        
        
<label htmlFor="country">Country</label>
<select ref={country} id="country" className="border border-black rounded-lg block w-full p-2.5">
  <option selected>Choose a country</option>
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Canada">Canada</option>
  <option value="France">France</option>
  <option value="Germany">Germany</option>
  <option value="Italy">Italy</option>
  <option value="Japan">Japan</option>
  <option value="Mexico">Mexico</option>
  <option value="United States">United States</option>
</select>

      </div>
      <div className="form-group">
        <label htmlFor="photo">Photo</label>
        <input
          ref={photo}
          type="text"
          className="form-control rounded-lg border border-black"
          name="photo"
          id="photo"
          defaultValue=""
          placeholder="Type Photo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="mail">Email</label>
        <input
          ref={mail}
          type="text"
          className="form-control rounded-lg border border-black"
          name="mail"
          id="mail"
          defaultValue=""
          placeholder="Type Mail"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={password}
          type="password"
          className="form-control rounded-lg border border-black"
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
  )}