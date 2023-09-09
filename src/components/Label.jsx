/* eslint-disable react/prop-types */
import { Link as Anchor } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Label({ options }) {
  let photo = useSelector((store) => store.users.user?.photo);
  return (
    <div className="hidden md:flex gap-2 p-2 rounded-xl">
      {options.map((each) =>
        each.to
          ? each.show &&
            (each.to === "/signin" ? (
              <Anchor
                key={each.to}
                to={each.to}
                className="flex px-2 align-middle font-medium text-center text-black font-bold cursor-pointer"
              >
                {each.title}
              </Anchor>
            ) : (
              <Anchor
                key={each.to}
                to={each.to}
                className="flex px-2 align-middle font-medium text-center text-black font-bold cursor-pointer"
              >
                {each.title}
              </Anchor>
            ))
          : each.show && (
              <span
                key={each.title}
                onClick={each.onClick}
                className="flex px-2 py-0.5 align-middle font-medium text-center text-white hover:text-black font-bold rounded-lg bg-indigo-600 hover:bg-[#5a4b03] hover:invert cursor-pointer hover:translate-y-1 duration-100"
              >
                {each.title}
              </span>
            )
      )}
      {photo && (
        <img
          src={photo}
          className="h-[30px] w-[30px] object-cover bg-white rounded-xl mx-1 hidden lg:flex"
        />
      )}
    </div>
  );
}