export default function NotFound() {
  return (
    <div className="flex flex-col gap-5">
      <div className="self-center pt-5 tracking-widest text-l sm:text-5xl text-red-500 font-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.3)]">
        <h5>PAGE NOT FOUND</h5>
      </div>
      <figure className="self-center">
        <img src="/public/img/404.png" alt="not found"/>
      </figure>
    </div>
  )
}
