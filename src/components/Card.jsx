export default function Card({ src, alt, text }) {
  return (
    <div className="w-2/5 flex flex-col items-center p-2 bg-white">
      <img className="rounded" src={src} alt={alt} />
      <p className="text-s">{text}</p>
    </div>
  );
}