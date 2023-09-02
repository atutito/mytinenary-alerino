import { useState,useEffect,useRef } from 'react'
import CardCity from '../components/CardCity'
import { useSelector,useDispatch } from 'react-redux'
import city_actions from '../store/actions/cities'

const { read_cities } = city_actions

export default function Cities() {
  const cities = useSelector(store=> store.cities.cities)
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()
  const dispatch = useDispatch()

  useEffect(
    ()=> {
      dispatch(read_cities({text:text.current?.value}))
        },[reEffect]
  )
  function handleFilter() {
    setReEffect(!reEffect) 
  }

  return (
    <>
    <div className="flex">
      <div className="h-80 bg-[url(/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center w-full h-40 text-center pt-5 h-1">
        <h5 className="py-4 font-primary tracking-widest text-6xl sm:text-9xl text-black text-shadow shadow-[#525252]">Cities</h5>
        <p className="border border-black mt-3 text-black text-shadow shadow-[#9ca3af]">Collection of the most beautiful places and experiences</p>
      </div>
      </div>
      <div className='flex justify-content-center'>
          <input className="my-2 bg-white border h-14 w-50 self-center px-12 rounded-lg hover:cursor-pointer justify-center placeholder:text-xs lg:placeholder:text-lg" ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} placeholder="Look up for your next MyTinerary.."/>
      </div>
    <div className='row'>
    {cities.length != 0 ?
                (cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />))
                :
                <div className="py-4 tracking-widest text-l sm:text-xl text-black text-shadow shadow-[#525252]">No cities found, please refine your search and try again</div>
            }
    </div>
    </>

  );
}
