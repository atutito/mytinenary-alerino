import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Display from "./Display";
import Label from "./Label";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import user_actions from "../store/actions/users";
const { signout } = user_actions;

export default function NavBar() {
  const navigate = useNavigate();
  let [show, setShow] = useState(false);
  let photo = useSelector((store) => store.users.user?.photo);
  let dispatch = useDispatch();
  let options = [
    { to: "/", title: "Home", show: true },
    { to: "/cities", title: "Cities", show: true },
    {
      to: "/auth/signin",
      title: "Log In",
      show: photo ? false : true,
    },
    {
      to: "/profile",
      title: "Profile",
      show: photo ? true : false,
    },
    {
      title: "Sign Out",
      show: photo ? true : false,
      onClick: () => {
        dispatch(signout())
        .then(() => {
            Swal.fire({
              icon: "success",
              title: "Logged out!",
              text: 'See you soon!',
            });
            navigate("/");
        });
        navigate("/");
      },
    },
  ];
  return (
    <header className="flex flex-col md:flex-row lg:flex md:justify-between border-b-2 pb-1 hidden md:flex rounded-xl">
<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[20px] h-[20px] bg-white rounded-xl cursor-pointer
        md:hidden"
        onClick={() => setShow(!show)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      {show && <Display options={options} />}
      <div className="w-full flex justify-between">
      <img src="./img/logo.png" className='mt-2 ms-2 w-6 h-6'alt="logo" />
      <div className="font-xl flex align-middle pt-1 font-ultrabold sm:text-xl col px-md-2">My Tinerary</div>
        <Label options={options} />
      </div>
    </header>
  );
}