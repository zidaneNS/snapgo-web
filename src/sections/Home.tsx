import { IoCameraOutline } from 'react-icons/io5';
import { FaArrowRight } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import Button from '../components/Button';
import SubTitle from '../components/SubTitle';

export default function Home() {
  return (
    <div id='home' className={`h-screen bg-[url(./assets/images/img-photographer.jpg)] justify-center`}>
      <div className='flex flex-col px-4 pt-8 pb-4 md:px-8 md:py-6 justify-center gap-y-8 md:gap-y-12 md:max-w-1/2 h-full bg-linear-to-r from-black/60 to-transparent'>
        <SubTitle
          Icon={IoCameraOutline}
          label='Professioanal Photography & Videography'
        />
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-7xl font-bold font-playfair text-white">Capturing Your</h1>
          <h1 className="text-4xl md:text-7xl font-bold font-playfair text-yellow-400">Perfect Moments</h1>
        </div>
        <p className="text-base md:text-2xl font-bold text-white">Mengabadikan momen spesial Anda dengan sentuhan profesional. Dari pernikahan romantis hingga konten bisnis yang memukau.</p>
        <div className="flex flex-col md:flex-row gap-8 items-center w-full md:w-fit">
          <Button className='px-6 py-4 w-full md:w-fit justify-center'>
            <p className="text-md font-bold">Book Your Session</p>
            <FaArrowRight className='size-4' />
          </Button>
          <button className="bg-white/15 w-full md:w-fit justify-center text-white py-4 px-6 rounded-md cursor-pointer hover:scale-105 duration-300 hover:bg-white/20 hover:text-black border border-white gap-x-4 flex items-center shadow-md">
            <BsCameraVideo className='size-4' />
            <p className="text-md font-bold">View Our Work</p>
          </button>
        </div>
        <div className="flex gap-x-6 md:gap-x-12 items-center justify-center md:justify-start md:ml-6">
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-2xl md:text-4xl font-bold text-yellow-400">500+</p>
            <p className="text-base md:text-xl text-white text-center">Happy Clients</p>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-2xl md:text-4xl font-bold text-yellow-400">1000+</p>
            <p className="text-base md:text-xl text-white text-center">Projects Done</p>
          </div>
          <div className="flex flex-col items-center gap-y-2">
            <p className="text-2xl md:text-4xl font-bold text-yellow-400">5+</p>
            <p className="text-base md:text-xl text-white text-center">Year Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}