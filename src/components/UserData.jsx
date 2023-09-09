export default function Users({ user, show, setShow }) {
    return (
      <div className="w-[360px] h-[400px] flex flex-col justify-center items-center bg-tertiary sm:bg-white p-[20px] mt-[20px] md:mt-0">
        <p className="my-2 text-center">{user.name}</p>
        <p className="my-2 text-center">{user.lastName}</p>
        <p className="my-2 text-center">{user.country}</p>
        <img className="my-2 h-full object-cover" src={user.photo} />
        {show ? (
          <input
            type="button"
            className="w-full shadow bg-indigo-600 hover:bg-[#5a4b03] hover:translate-y-1 duration-100 focus:shadow-outline text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Hide!"
            onClick={() => setShow(!show)}
          />
        ) : (
          <input
            type="button"
            className="w-full shadow bg-indigo-600 hover:bg-[#5a4b03] hover:translate-y-1 duration-100 focus:shadow-outline text-white font-bold py-2 px-4 rounded cursor-pointer"
            value="Update!"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    );
  }