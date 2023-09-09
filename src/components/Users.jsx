import { useSelector } from "react-redux";

export default function Users() {
  const user_state = useSelector((store) => store.users.users);
  return <div className="w-[360px] hidden md:flex md:flex-wrap">
    {user_state?.map((each) => <img src={each.photo} key={each._id} className="bg-white w-1/2 h-1/3 object-cover"/>)}
    </div>;
}