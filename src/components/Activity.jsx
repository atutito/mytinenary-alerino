import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import activity_actions from "../store/actions/activities";
const { read_activities_from_itinerary } = activity_actions;
import { useState } from "react";

export default function Activity(id) {
  const dispatch = useDispatch();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    dispatch(read_activities_from_itinerary({ name: id.id }))
      .then((response) =>
        setActivity(response.payload.activities_from_itinerary)
      )
      .catch((err) => console.log(err));
  }, []);

  return( 
  <>
    {activity.length != 0 ?
  (activity.map((each, index) => (
    <div key={index} className="flex justify-center">
      <div className="card card-compact shadow-xl col-span-1 w-32 md:w-72 lg:w-96 h-32 md:h-72 lg:h-96 m-3">
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
          <p className="flex justify-between mb-4 text-base text-neutral-600 dark:text-neutral-200 mt-2"></p>
        </div>
      </div>
    </div>
  ))):                <div className="py-4 tracking-widest text-l sm:text-xl text-black text-shadow shadow-[#525252]">No activities yet, let us know what you want to experience here.</div>

}
</>
)}