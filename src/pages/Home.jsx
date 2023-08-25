import Carousel from '../components/Carousel'
import {Link as Anchor} from "react-router-dom"

import { useState,useEffect } from "react";
import axios from "axios";
import apiUrl from '../apiUrl.js'
import { useSelector,useDispatch } from "react-redux";
import city_actions from '../store/actions/cities'


const { read_carousel } = city_actions



export default function main() {
  const carousel = useSelector(store=>store.cities.carousel)
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      if (carousel.length===0) {
        dispatch(read_carousel())
      }
    },[]
  )

  return (
    <div className="flex-col-reverse mt-5 pt-5 mb-5 pb-5 sm:flex md:flex lg:flex-row items-center gap-3">
          <div className="text-center">
            <h1 className="mb-4 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white ">Find the perfect destination</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <p className='italic font-bold font-bold tracking-wider'>Find your perfect trip, designed by insiders who know and love their cities!</p>
            <Anchor to={'/Cities'} className="inline-flex px-5 py-3 mt-4 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-[#5a4b03] hover:invert cursor-pointer hover:translate-y-1 duration-100">View More</Anchor>
          </div>
          <Carousel data={carousel} />
    </div>
)
}