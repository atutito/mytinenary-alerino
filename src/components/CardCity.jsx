import { Link as Anchor } from "react-router-dom"

export default function CardCity({ src, alt, text, id }) {
  if (id) {
    return (
      <div className="group col-6">
        <Anchor to={'/city/'+id} className="flex p-2 m-2">
          <img className='rounded opacity-90'src={src} alt={alt} />
          <p className="absolute flex bg-gradient-to-r from-gray-600 mt-2 p-1 justify-start tracking-wider hidden lg:flex text-xs font-bold bg-opacity-60 text-white ps-2 uppercase">{text}</p>
          <div className="absolute text-9xl text-white font-bold mt-5 ms-5 ps-5 opacity-80 hidden group-hover:flex">+Info</div>
        </Anchor>
      </div>
    );  
  } else {
    return(
      <h1>NOT FOUND</h1>
  )}
  
}