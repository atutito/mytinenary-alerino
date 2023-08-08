export default function Card({ src, alt, text }) {
  return (
    <div className="w-2/5 flex flex-col p-2">
      <img className="rounded opacity-90" src={src} alt={alt} />
      <p className="absolute flex w-25 bg-gradient-to-r from-gray-600 mt-2 p-1 justify-start tracking-wider hidden lg:flex text-xs font-thin bg-opacity-60 text-white ps-2 uppercase">{text}</p>
    </div>
  );
};