import { CiHeart } from "react-icons/ci";
import { IoCameraOutline, IoLogoInstagram } from "react-icons/io5";
import { navLinks } from "../components/Navbar";
import type { IconType } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { PiTiktokLogo } from "react-icons/pi";

interface Contact {
  Icon: IconType;
  desc: string;
}

const services = [
  'Wedding Photography',
  'Corporate Events',
  'Product Photography',
  'Video Production',
  'Event Documentation',
  'Content Creation',
];

const contacts: Contact[] = [
  {
    Icon: FiPhone,
    desc: '+62 123 4567 8901'
  },
  {
    Icon: MdOutlineEmail,
    desc: 'snapgo@example.com'
  },
  {
    Icon: GrLocation,
    desc: 'Gresik, Indonesia'
  },
]

export default function Footer() {
  return (
    <div className="flex flex-col gap-y-8 px-8 md:px-12 py-6 md:py-8 bg-slate-950 mt-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-6 md:gap-y-0">
        <div className="flex flex-col gap-y-6 md:max-w-1/4">
          <div className="flex gap-x-3 items-center">
            <IoCameraOutline className="size-6 md:size-8 text-yellow-400" />
            <p className="text-lg md:text-2xl text-white font-bold font-playfair">SnapGo</p>
          </div>
          <p className="text-base md:text-lg text-slate-300">Mengabadikan momen berharga Anda dengan sentuhan profesional dan artistik. Kepercayaan Anda adalah kehormatan bagi kami.</p>
          <div className="flex gap-x-3 items-center text-yellow-400">
            <CiHeart className="size-6" />
            <p className="text-xs md:text-sm">Made with passion in Indonesia</p>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-lg md:text-xl font-bold text-white">Quick Links</p>
          <div className="flex flex-col gap-y-2 text-slate-300">
            {navLinks.map((navLink, idx) => (
              <a key={idx} href={navLink.href} className="hover:text-slate-400 duration-300 text-sm md:text-base">{navLink.label}</a>
            ))}
            <a href="#contact" className="hover:text-slate-400 duration-300">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-lg md:text-xl font-bold text-white">Our Services</p>
          <div className="flex flex-col gap-y-2 text-slate-300">
            {services.map((service, idx) => (
              <p key={idx} className="text-slate-300 text-sm md:text-base">{service}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <p className="text-lg md:text-xl font-bold text-white">Get In Touch</p>
          <div className="flex flex-col gap-y-2">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex gap-x-2 items-center">
                <contact.Icon className="text-yellow-400 size-4" />
                <p className="text-slate-300 text-sm md:text-base">{contact.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl font-bold text-white">Follow Us</p>
          <div className="flex gap-x-2 items-center">
            <div className="flex justify-center items-center text-yellow-400 bg-yellow-400/15 rounded-md p-2">
              <IoLogoInstagram className="size-4" />
            </div>
            <div className="flex justify-center items-center text-yellow-400 bg-yellow-400/15 rounded-md p-2">
              <LuFacebook className="size-4" />
            </div>
            <div className="flex justify-center items-center text-yellow-400 bg-yellow-400/15 rounded-md p-2">
              <PiTiktokLogo className="size-4" />
            </div>
          </div>
        </div>
      </div>
      <span className="border-b border-slate-400 w-full"></span>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-slate-300 gap-y-6 md:gap-y-0 text-sm md:text-base">
        <p>© 2025 SnapGo. All rights reserved.</p>
        <div className="flex gap-x-6 items-center">
          <a className="hover:text-yellow-400 duration-300" href="#">Privacy Policy</a>
          <a className="hover:text-yellow-400 duration-300" href="#">Terms of Service</a>
          <a className="hover:text-yellow-400 duration-300" href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  )
}