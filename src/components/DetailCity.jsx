import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
const { read_itineraries_from_city } = itinerary_actions;

// eslint-disable-next-line react/prop-types
export default function DetailCity({ src, alt, text, id, sm }) {
  const [show, setShow] = useState(false);
  const itineraries = useSelector(
    (store) => store.itineraries.itineraries_from_city
  );
  console.log(itineraries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(read_itineraries_from_city({ city_id: id }));
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="h-80 bg-cover bg-center w-full h-40 text-center pt-5 h-1"
          style={{ backgroundImage: `url(${src})` }}
        >
          <h5 className="py-4 font-primary tracking-widest text-l sm:text-9xl text-black text-shadow shadow-[#525252]">
            {text}
          </h5>
          <div className="btn-holder">
            <Anchor
              to={"/Cities"}
              className="btn mt-2 text-white border-white position-relative float-center"
            >
              Back to Cities
            </Anchor>
          </div>
        </div>
        <p className="text-center m-3 font-bold text-l italic">{sm}</p>
        <div className="px-5 py-4 w-75">
          <Anchor
            to={"/city/" + id}
            className="flex flex-col items-center p-2 m-2 bg-white"
          >
            <button
              onClick={() => setShow(!show)}
              className="shadow bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
            >
              {show ? (
                <div>
                  Hide Itineraries
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </div>
              ) : (
                <p>
                  Itineraries
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </p>
              )}
            </button>
            {show &&
              itineraries.map((each, index) => (
                <p key={index}>
                  {
                    <div className="block m-3 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                      <div
                        class="relative overflow-hidden bg-cover bg-no-repeat"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <img class="rounded-t-lg" src={each.photo} alt="" />
                        <a href="#!">
                          <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                        </a>
                      </div>
                      <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          {each.name}
                        </h5>
                        <p class="flex justify-between mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-2">
                          <div>
                            <h4 className="font-bold">Price</h4>
                            {each.price}
                          </div>
                          <div>
                            <h4 className="font-bold">Duration</h4>
                            {each.duration}
                          </div>
                        </p>
                      </div>
                    </div>
                  }
                </p>
              ))}
          </Anchor>
        </div>
      </div>
    </>
  );
}
