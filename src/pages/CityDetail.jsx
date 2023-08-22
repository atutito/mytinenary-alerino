import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link as Anchor} from "react-router-dom"
import axios from 'axios'
import apiUrl from '../apiUrl'

export default function CityDetail() {
  const { city_id } = useParams()
  const [city, setCity] = useState([])
  
  useEffect(
    ()=> {
      axios(apiUrl+'cities/'+city_id)
        .then(res=>setCity(res.data.response))
        .catch(err=>console.log(err))
    },[]
  )

  return (
    <div className="flex flex-col">
      <div className="h-80 bg-cover bg-center w-full h-40 text-center pt-5 h-1" style={{backgroundImage: `url(${city?.photo})`}}>
        <h5 className="py-4 font-primary tracking-widest text-l sm:text-9xl text-black text-shadow shadow-[#525252]">{city.city}</h5>
        <p className="border border-black mt-3 text-black font-bold text-shadow shadow-[#9ca3af]">Details of "{city.city}" are under construction</p>
        <div class="btn-holder">
            <Anchor to={'/Cities'} className="btn mt-2 text-white bg-red-500 position-relative float-center">Back to Cities</Anchor>
        </div>
      </div>
      </div>
  )
}
