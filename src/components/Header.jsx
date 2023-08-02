export default function header() {
  return (
    <div className='flex'>
      <div className="text-left align-middle pt-1 font-ultrabold text-xl col px-md-5">My Tinerary</div>
      <div className='flex justify-items-end'>
      <div className="align-middle pt-1 font-bold text-l col mx-2">Home</div>
      <div className="align-middle pt-1 font-bold text-l col mx-2">Cities</div>
      <div className="flex px-2 ms-1 items-center font-medium text-center text-white hover:text-black font-bold rounded-lg bg-indigo-600 hover:bg-indigo-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="me-1 w-3 h-3 hover:fill-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        Login
      </div>
    </div>
    </div>
)
}