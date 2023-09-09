import { useRef } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";
const { signin } = user_actions;

export default function SignIn() {
  const navigate = useNavigate();
  const mail_signin = useRef("");
  const password_signin = useRef("");
  const dispatch = useDispatch();
  function handleSignIn() {
    let data = {
      mail: mail_signin.current.value,
      password: password_signin.current.value,
    };
    dispatch(signin({ data }))
      .then((res) => {
        //console.log(res);
        if (res.payload.token) {
          Swal.fire({
            icon: "success",
            title: "Logged in!",
            text: "Welcome back ;)"
          });
          navigate("/");
        } else if (res.payload.messages.length > 0) {
            let html = res.payload.messages
            .map((each) => `<p>${each}</p>`)
            .join("");
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
            html,
          });
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="flex flex-col items-end bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center pt-5">
      <div className="flex flex-col bg-white border p-4 m-3">
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            ref={mail_signin}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted text-xs">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            ref={password_signin}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="btn float-center border-black bg-red-500 text-black hover:text-white"
          onClick={handleSignIn}
          >
          Submit
        </button>
        <p>
        New to MyTinerary?{" "}
        <Anchor
          className="text-[20px] font-bold cursor-pointer"
          to="/auth/register"
        >
          Sign up!
        </Anchor>
      </p>
      </div>
    </div>
  );
}