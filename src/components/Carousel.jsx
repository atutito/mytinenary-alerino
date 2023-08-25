import Arrow from "../components/Arrow";
import Card from "./Card"
import { useState } from "react";

export default function Carousel({ data }) {
   return (
  <div className="hidden sm:flex w-4/6 p-3 m-3">
  <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="flex md:mt-5 justify-center tracking-wider lg:text-5xl text-red-500 md:text-xl font-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
          <h5>Popular Mytineraries</h5>
        </div>
      <div className="carousel-item active c-item">
      <div className='flex flex-wrap justify-center pt-3'>
        {data.slice(0,4).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
      </div>
      </div>
      <div className="carousel-item c-item">
      <div className='flex flex-wrap justify-center pt-3'>
        {data.slice(4,8).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
      </div>
      </div>
      <div className="carousel-item c-item">
      <div className='flex flex-wrap justify-center pt-3'>
        {data.slice(8,12).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
      </div>            
      </div>
    </div>
    <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon invert mt-5" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon invert mt-5" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>
  
  
  
  
  
  );
}