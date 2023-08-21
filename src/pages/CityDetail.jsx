import { useParams } from 'react-router-dom'
import {Link as Anchor} from "react-router-dom"

export default function CityDetail() {
  const { city_id } = useParams()
  return (
    <div className="flex flex-col">
      <div className="h-80 bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center w-full h-40 text-center pt-5 h-1">
        <h5 className="py-4 font-primary tracking-widest text-l sm:text-9xl text-black text-shadow shadow-[#525252]">Under Construction</h5>
        <p className="border border-black mt-3 text-black text-shadow shadow-[#9ca3af]">Details of city ID:{city_id} are under construction</p>
        <div class="btn-holder">
            <Anchor to={'/Cities'} className="btn mt-2 text-white bg-red-500 position-relative float-center">Back to Cities</Anchor>
        </div>
      </div>
      </div>
  )
}
