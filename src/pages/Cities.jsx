import { useState,useEffect,useRef } from 'react'
import axios, { AxiosError } from 'axios'
import apiUrl from '../apiUrl'
import CardCity from "../components/CardCity.jsx";

export default function Cities() {
  const [cities,setCities] = useState([])
  const [reEffect,setReEffect] = useState(true)
  const text = useRef()

  useEffect(
    ()=> {
      axios(apiUrl+'cities?city='+text.current.value)
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
    }
  )
  function handleFilter() {
    setReEffect(!reEffect) 
  }

  return (
    <>
    <div className="flex flex-col">
      <div className="h-80 bg-[url(public/img/park-in-lujiazui-financial-center-shanghai-china.jpg)] bg-cover bg-center w-full h-40 text-center pt-5 h-1">
        <h5 className="py-4 font-primary tracking-widest text-l sm:text-9xl text-black text-shadow shadow-[#525252]">Cities</h5>
        <p className="border border-black mt-3 text-black text-shadow shadow-[#9ca3af]">Collection of the most beautiful places and experiences</p>
      </div>
      </div>
      <div className='flex justify-content-center'>
          <input className="my-2 bg-white border h-14 w-50 self-center px-12 rounded-lg hover:cursor-pointer justify-center" ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} placeholder="Look up for your next MyTinerary.."/>
          </div>
    <div className='row'>
      {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}
    </div>
    </>

  );
}
