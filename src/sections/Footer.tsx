import { CiHeart } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";
import { navLinks } from "../components/Navbar";

const services = [
  'Wedding Photography',
  'Corporate Events',
  'Product Photography',
  'Video Production',
  'Event Documentation',
  'Content Creation',
]

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-8 px-12 py-8 bg-slate-950 mt-12">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-3 items-center">
            <IoCameraOutline className="size-8 text-yellow-400" />
            <p className="text-2xl text-white font-bold font-playfair">SnapGo</p>
          </div>
          <p className="text-lg text-slate-300">Mengabadikan momen berharga Anda dengan sentuhan profesional dan artistik. Kepercayaan Anda adalah kehormatan bagi kami.</p>
          <div className="flex gap-x-3 items-center text-yellow-400">
            <CiHeart className="size-6" />
            <p className="text-sm">Made with passion in Indonesia</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-xl font-bold text-white">Quick Links</p>
          <div className="flex flex-col gap-y-2 text-slate-300">
            {navLinks.map((navLink, idx) => (
              <a key={idx} href={navLink.href} className="hover:text-slate-400 duration-300">{navLink.label}</a>
            ))}
            <a href="#contact" className="hover:text-slate-400 duration-300">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-xl font-bold text-white">Our Services</p>
          <div className="flex flex-col gap-y-2 text-slate-300">
            {services.map((service, idx) => (
              <p key={idx} className="text-slate-300">{service}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}