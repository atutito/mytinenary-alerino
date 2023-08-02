import Carousel from './Carousel'

export default function main() {
  return (
    <div className="flex h-screen items-center">
          <div className="text-left mr-auto lg:col-span-7">
            <h1 className="max-w-xl mb-4 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white ">Find the perfect destination</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white hover:text-black border border-gray-300 rounded-lg hover:bg-indigo-300 bg-indigo-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">View More</a>
          </div>
          <Carousel />
    </div>   

)
}
