import { Link as Anchor } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries";
import {FaMoneyBillWave} from 'react-icons/fa'
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
      <div className="flex flex-col content-center w-full">
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
        <div className="flex py-4 w-full items-center">
          <Anchor
            to={"/city/" + id}
            className="flex flex-col bg-white w-full"
          >
            <button
              onClick={() => setShow(!show)}
              className=""
            >
              {show ? (
                <div className="flex border-y-4 py-2 justify-between px-3 italic">
                Hide Itineraries
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>

                </div>
              ) : (
                <div className="flex border-y-4 py-2 justify-between px-3 italic">
                  Itineraries
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

                </div>
              )}
            </button>
            </Anchor>
        </div>
      </div>
            {show &&
              itineraries.map((each, index) => (
                <p key={index}>
                  {
                    <div className="block m-3 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                      <div
                        className="relative overflow-hidden bg-cover bg-no-repeat"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <img className="rounded-t-lg" src={each.photo} alt="" />
                      </div>
                      <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                          {each.name}
                        </h5>
                        <p className="flex justify-between mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-2">
                          <div>
                            <h4 className="font-bold">Price</h4>
                            ${each.price}
                            <div className="flex gap-1">
                            { (each.price < 50) ? <FaMoneyBillWave/> 
                            : ((each.price >= 50 && each.price < 100 )) ? (<><FaMoneyBillWave/><FaMoneyBillWave/></>) 
                            : ((each.price >= 100 && each.price < 150 )) ? (<><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/></>)
                            : ((each.price >= 150 && each.price < 200 )) ? (<><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/></>)
                            : ((each.price <= 200 )) ? <><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/><FaMoneyBillWave/></> : "" } 
                          </div>
                          </div>
                          <div>
                            <h4 className="font-bold">Duration</h4>
                            {each.duration} min.
                          </div>
                        </p>
                      </div>
                    </div>
                  }
                </p>
              ))}
          
    </>
  );
}
