import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./Card";

let data = [
  { id: "america1", city: "Cancun", photo: "/img/america/cancun.jpg" },
  { id: "america2", city: "New York", photo: "/img/america/newyork.jpg" },
  { id: "america3", city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
  { id: "america4", city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
  { id: "asia1", city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
  { id: "asia2", city: "Pekin", photo: "/img/asia/pekin.jpg" },
  { id: "asia3", city: "Singapur", photo: "/img/asia/singapur.jpg" },
  { id: "asia4", city: "Tokyo", photo: "/img/asia/tokio.jpg" },
  { id: "europe1", city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
  { id: "europe2", city: "London", photo: "/img/europe/london.jpg" },
  { id: "europe3", city: "Paris", photo: "/img/europe/paris.jpg" },
  { id: "europe4", city: "Roma", photo: "/img/europe/roma.jpg" },
  { id: "oceania1", city: "Majuro", photo: "/img/oceania/majuro.jpg" },
  { id: "oceania2", city: "Sidney", photo: "/img/oceania/sidney.jpg" },
  { id: "oceania3", city: "Suva", photo: "/img/oceania/suva.jpg" },
  { id: "oceania4", city: "Wellington", photo: "/img/oceania/wellington.jpg" },
];


export default function Carousel() {
  return (
    <div className="w-4/5 flex flex-col p-2 m-2 d-none d-md-block">
      <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
          <div className='flex flex-wrap justify-center mt-5'>
            {data.slice(0,4).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
          </div>
          <div className="carousel-caption font-bold tracking-tight text-2xl text-gray-700 pt-2 mb-6 md:text-l">
              <h5>Popular Mytineraries</h5>
            </div> 
          </div>
          <div className="carousel-item c-item">
          <div className='flex flex-wrap justify-center mt-5'>
            {data.slice(4,8).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
          </div>
          <div className="carousel-caption d-none d-md-block font-bold tracking-tight text-2xl pt-2 text-gray-700 mb-6 md:text-l">
              <h5>Popular Mytineraries</h5>
            </div>
          </div>
          <div className="carousel-item c-item">
          <div className='flex flex-wrap justify-center mt-5'>
            {data.slice(8,12).map(each=> <Card key={each.id} src={each.photo} alt={each.id} text={each.city}/>)}
          </div>            
          <div className="carousel-caption d-none d-md-block font-bold tracking-tight text-2xl pt-2 text-gray-700 mb-6 md:text-l">
              <h5>Popular Mytineraries</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
  );
}
