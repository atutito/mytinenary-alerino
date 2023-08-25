import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import city_actions from '../store/actions/cities'
const { read_city } = city_actions
import { Link as Anchor } from 'react-router-dom'

export default function CityDetail() {
  const { city_id } = useParams()
  const dispatch = useDispatch()
  const city = useSelector(store=>store.cities.city)
  
  useEffect(
    ()=> {
      dispatch (read_city({ id: city_id}))
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
