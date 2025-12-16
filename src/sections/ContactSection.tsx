import { LuFacebook, LuSend } from "react-icons/lu";
import SubTitle from "../components/SubTitle";
import type { IconType } from "react-icons";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTiktokLogo } from "react-icons/pi";
import Button from "../components/Button";

interface Contact {
  Icon: IconType;
  title: string;
  content: string[];
  addition: string;
}

const contacts: Contact[] = [
  {
    Icon: FiPhone,
    title: 'Phone',
    content: [
      '+62 828 1823 2619',
      '+62 123 3456 6543'
    ],
    addition: 'Call us for immediate response'
  },
  {
    Icon: MdOutlineEmail,
    title: 'Email',
    content: [
      'email@example.com',
      'dmail@example.com'
    ],
    addition: 'Send us your project details'
  },
  {
    Icon: GrLocation,
    title: 'Location',
    content: [
      'Gresik, Indonesia',
      'Available nationwide'
    ],
    addition: 'We serve across Indonesia'
  },
]

export default function ContactSection() {
  return (
    <div id="contact" className="flex flex-col items-center w-full gap-y-8 md:gap-y-12 pt-20 px-8 scroll-pt-20">
      <SubTitle
        Icon={LuSend}
        label="Get In Touch"
      />
      <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center">Ready to Capture Your <span className="text-yellow-400">Perfect Moments?</span></h1>
      <p className="text-xl md:text-lg font-semibold text-slate-500 text-center md:max-w-1/2">Mari diskusikan project Anda dengan tim profesional kami. Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan fotografi dan videografi Anda.</p>
      <div className="flex flex-col items-center gap-y-8 md:max-w-3/4 w-full">
        <p className="text-center text-2xl font-bold font-playfair">Contact Information</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-y-0 w-full">
          {contacts.map((contact, idx) => (
            <div key={idx} className="flex gap-x-4 p-4 rounded-md shadow-md">
              <div className="flex justify-center items-center bg-yellow-100 text-yellow-400 p-2 rounded-md h-fit">
                <contact.Icon className="size-6 md:size-8" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-lg md:text-xl font-bold">{contact.title}</p>
                <div className="flex flex-col">
                  {contact.content.map((content, id) => (
                    <p key={id} className="text-slate-500 text-sm md:text-base">{content}</p>
                  ))}
                </div>
                <p className="text-yellow-400 font-semibold text-xs md:text-sm">{contact.addition}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-8 md:gap-y-0 md:gap-x-12 w-full">
          <div className="flex-1 flex flex-col gap-y-2 p-4 rounded-md shadow-md">
            <p className="text-lg md:text-xl font-bold">Follow Us</p>
            <div className="flex gap-x-4 items-center">
              <div className="flex justify-center items-center bg-yellow-100 text-yellow-400 p-2 rounded-md h-fit">
                <IoLogoInstagram className="size-4 md:size-6" />
              </div>
              <div className="flex justify-center items-center bg-yellow-100 text-yellow-400 p-2 rounded-md h-fit">
                <LuFacebook className="size-4 md:size-6" />
              </div>
              <div className="flex justify-center items-center bg-yellow-100 text-yellow-400 p-2 rounded-md h-fit">
                <PiTiktokLogo className="size-4 md:size-6" />
              </div>
            </div>
            <p className="text-slate-500">Stay updated with our latest work and behind-the-scenes content</p>
          </div>

          <div className="flex-1 flex flex-col gap-y-2 p-4 rounded-md shadow-md bg-yellow-100 border border-yellow-400">
            <p className="text-lg md:text-xl font-bold">Need Immediate Response?</p>
            <p className="text-slate-500 text-sm md:text-base">For urgent bookings or last-minute requests, contact us directly:</p>
            <div className="flex gap-x-4 items-center">
              <Button className="py-2 px-4 flex-1 justify-center">
                <FiPhone className="size-4 md:size-6" />
                <p className="text-xs md:text-base font-bold">Call Now</p>
              </Button>
              <Button className="py-2 px-4 flex-1 justify-center">
                <MdOutlineEmail className="size-4 md:size-6" />
                <p className="text-xs md:text-base font-bold">Quick Email</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}