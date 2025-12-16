import { IoCameraOutline } from "react-icons/io5";
import SubTitle from "../components/SubTitle";
import type { IconType } from "react-icons";
import { CiCalendar, CiHeart } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import convertCurrency from "../helpers/convertCurrency";
import { BsCameraVideo } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";

interface Service {
  Icon: IconType;
  title: string;
  desc: string;
  content: string[];
  price: number;
}

interface OtherService {
  Icon: IconType;
  label: string;
}

const services: Service[] = [
  {
    Icon: CiHeart,
    title: 'Wedding Photography & Videography',
    desc: 'Mengabadikan momen bahagia pernikahan Anda dengan detail yang sempurna dan sentuhan romantis.',
    content: [
      'Pre-wedding photoshoot',
      'Wedding ceremony coverage',
      'Reception documentation',
      'Same-day highlight video'
    ],
    price: 3500000
  },
  {
    Icon: LuBuilding2,
    title: 'Corporate & Business Content',
    desc: 'Konten visual profesional untuk meningkatkan brand awareness dan kredibilitas bisnis Anda.',
    content: [
      'Product photography',
      'Corporate events',
      'Team portraits',
      'Marketing content creation'
    ],
    price: 1500000
  },
  {
    Icon: CiCalendar,
    title: 'Event Documentation',
    desc: 'Layanan dokumentasi komprehensif untuk berbagai jenis acara dan perayaan spesial.',
    content: [
      'Birthday celebrations',
      'Anniversary parties',
      'Cultural events',
      'Live streaming services'
    ],
    price: 2000000
  },
];

const otherServices: OtherService[] = [
  {
    Icon: BsCameraVideo,
    label: 'Drone Photography'
  },
  {
    Icon: IoCameraOutline,
    label: '360° Virtual Tours'
  },
  {
    Icon: RiGroupLine,
    label: 'Live Streaming'
  },
]

export default function ServiceSection() {
  return (
    <div id="service" className="flex flex-col items-center w-full gap-y-8 md:gap-y-12 pt-20 px-8 scroll-pt-20">
      <SubTitle
        Icon={IoCameraOutline}
        label="Our Services"
      />
      <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center">Professional Services <span className="text-yellow-400">Tailored for You</span></h1>
      <p className="text-xl md:text-lg font-semibold text-slate-500 text-center md:max-w-1/2">Dari momen intim hingga acara besar, kami menyediakan layanan fotografi dan videografi profesional yang disesuaikan dengan kebutuhan Anda.</p>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-12 w-full">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col gap-y-4 md:gap-y-8 flex-1 rounded-md shadow-md cursor-pointer px-6 py-4 hover:scale-105 duration-300 pb-auto h-auto group">
            <service.Icon className="size-8 md:size-12 text-yellow-400" />
            <h3 className="text-xl md:text-2xl font-bold font-playfair">{service.title}</h3>
            <p className="text-base md:text-lg text-slate-500">{service.desc}</p>
            <p className="text-base md:text-lg font-bold">What's Included</p>
            <div className="flex flex-col gap-y-2 md:gap-y-4">
              {service.content.map((content, id) => (
                <div key={id} className="flex gap-x-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" />
                  <p className="text-base md:text-lg text-slate-500">{content}</p>
                </div>
              ))}
            </div>
            <span className="w-full border border-slate-300"></span>
            <p className="text-lg md:text-xl font-bold text-yellow-400">Starting from IDR {convertCurrency(service.price)}</p>
            <button onClick={() => window.location.replace('#contact')} className="text-center cursor-pointer py-2 px-4 rounded-md duration-300 border border-slate-200 shadow-md hover:bg-yellow-400 group-hover:bg-yellow-400">Get Quote</button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-y-4 md:gap-y-8 md:max-w-1/2 pt-8">
        <p className="text-xl md:text-2xl font-bold">Need Something Different?</p>
        <p className="text-center text-base md:text-lg text-slate-500">Kami juga menyediakan layanan kustom untuk kebutuhan khusus Anda. Konsultasikan project Anda dengan tim kami untuk solusi terbaik.</p>
        <div className="flex flex-col md:flex-row items-center gap-y-4 md:gap-x-16">
          {otherServices.map((service, idx) => (
            <div key={idx} className="flex items-center gap-x-4">
              <service.Icon className="size-4 md:size-6 text-yellow-400" />
              <p className="text-sm md:text-base font-semibold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}