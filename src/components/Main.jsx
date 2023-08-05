import Carousel from './Carousel'

export default function main() {
  return (
    <div className="flex pt-20 items-center gap-3">
          <div className="text-left mr-auto lg:col-span-7">
            <h1 className="max-w-xl mb-4 text-xl font-bold tracking-tight leading-none md:text-2xl xl:text-3xl dark:text-white ">Find the perfect destination</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-[#5a4b03] hover:invert cursor-pointer hover:translate-y-1 duration-100">View More</a>
          </div>
          <Carousel />
    </div>   
)
}
