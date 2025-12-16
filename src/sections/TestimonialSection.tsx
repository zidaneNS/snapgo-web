import { LuQuote } from "react-icons/lu";
import SubTitle from "../components/SubTitle";
import { FaStar } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <div id="testimonials" className="flex flex-col items-center w-full gap-y-8 md:gap-y-12 pt-20 px-8 scroll-pt-20">
      <SubTitle
        Icon={LuQuote}
        label="Client Testimonials"
      />
      <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center">What Our Clients <span className="text-yellow-400">Say About Us</span></h1>
      <p className="text-xl md:text-lg font-semibold text-slate-500 text-center md:max-w-1/2">Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa testimoni dari klien yang telah mempercayakan momen berharga mereka kepada kami.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, id) => (
          <div key={id} className="flex flex-col gap-y-6 py-4 px-6 rounded-md shadow-md hover:scale-105 duration-300 h-auto pb-auto">
            <div className="flex flex-col gap-y-4">
              <LuQuote className="text-yellow-400 size-8 md:size-12" />
              <div className="flex gap-x-2 items-center">
                {Array.from({ length: 5 }).map((_, idx) => <FaStar key={idx} className="text-yellow-400 size-4" />)}
              </div>
            </div>
            <p className="text-slate-500 text-base md:text-lg">"SnapGo berhasil mengabadikan hari pernikahan kami dengan sempurna! Setiap foto dan video menggambarkan emosi dan kebahagiaan yang kami rasakan. Tim yang sangat profesional dan hasilnya melampaui ekspektasi."</p>
            <span className="w-full border-b border-slate-200"></span>
            <div className="flex items-center gap-x-4">
              <div className="flex justify-center items-center rounded-full bg-yellow-100 text-yellow-400 font-semibold text-lg md:text-xl py-2 px-4">S</div>
              <div className="flex flex-col">
                <p className="text-lg md:text-xl font-bold">Sarah & David Chen</p>
                <p className="text-base md:text-lg text-slate-500">Wedding Couple</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center md:justify-between items-start w-full gap-6 md:px-12">
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-400">500+</p>
          <p className="text-slate-500 text-base md:text-lg">Happy Clients</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-400">1000+</p>
          <p className="text-slate-500 text-base md:text-lg">Projects Completed</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-400">5+</p>
          <p className="text-slate-500 text-base md:text-lg">Years Experience</p>
        </div>
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-3xl md:text-4xl font-bold text-yellow-400">99%</p>
          <p className="text-slate-500 text-base md:text-lg">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  )
}