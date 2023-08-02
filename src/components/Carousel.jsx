let data = [
    {id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg"},
    {id: 'america2', city: "New York", photo: "/img/america/newyork.jpg"},
    {id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg"},
    {id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg"},
    {id: 'asia1' , city: "Bangkok", photo: "/img/asia/bangkok.jpg"},
    {id: 'asia2' , city: "Pekin", photo: "/img/asia/pekin.jpg"},
    {id: 'asia3' , city: "Singapur", photo: "/img/asia/singapur.jpg"},
    {id: 'asia4' , city: "Tokyo", photo: "/img/asia/tokio.jpg"},
    {id: 'europe1' , city: "Ibiza", photo: "/img/europe/ibiza.jpg"},
    {id: 'europe2' , city: "London", photo: "/img/europe/london.jpg"},
    {id: 'europe3' , city: "Paris", photo: "/img/europe/paris.jpg"},
    {id: 'europe4' , city: "Roma", photo: "/img/europe/roma.jpg"},
    {id: 'oceania1' , city: "Majuro", photo: "/img/oceania/majuro.jpg"},
    {id: 'oceania2' , city: "Sidney", photo: "/img/oceania/sidney.jpg"},
    {id: 'oceania3' , city: "Suva", photo: "/img/oceania/suva.jpg"},
    {id: 'oceania4' , city: "Wellington", photo: "/img/oceania/wellington.jpg"}
]
export default function Carousel() {
  return (
            <div className="w-2/5 flex flex-col p-2 m-2">
                <img className='rounded' src={data[0].photo} alt={data[0].city} />
                <div className="absolute text-2xl px-2 text-white font-bold">{data[0].city}</div>
                <div className="absolute flex content-center text-xs font-thin text-center pt-8 ps-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className=" w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>Mexico</div>
                    <div className="absolute text-2xl mt-8 pt-4 ps-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.0} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="absolute text-2xl mt-8 pt-4 ps-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
            </div>
        )
}

