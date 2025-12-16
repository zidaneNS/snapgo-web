import { CiHeart } from "react-icons/ci";
import SubTitle from "../components/SubTitle";
import type { IconType } from "react-icons";
import { IoCameraOutline, IoFlashOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";

interface Advantage {
  Icon: IconType;
  title: string;
  desc: string;
}

interface Value {
  title: string;
  desc: string;
}

const advantages: Advantage[] = [
  {
    Icon: IoCameraOutline,
    title: 'Professional Equipment',
    desc: 'Menggunakan peralatan terdepan untuk hasil maksimal'
  },
  {
    Icon: RiGroupLine,
    title: 'Expert Team',
    desc: 'Tim berpengalaman dengan keahlian terspesialisasi'
  },
  {
    Icon: IoFlashOutline,
    title: 'Fast Delivery',
    desc: 'Hasil berkualitas tinggi dengan waktu pengerjaan optimal'
  },
  {
    Icon: CiHeart,
    title: 'Personal Touch',
    desc: 'Pendekatan personal untuk setiap klien'
  },
];

const values: Value[] = [
  {
    title: 'Quality First',
    desc: 'Kualitas adalah prioritas utama dalam setiap karya yang kami hasilkan'
  },
  {
    title: 'Trust & Reliability',
    desc: 'Membangun kepercayaan melalui konsistensi dan kehandalan layanan'
  },
  {
    title: 'Creative Innovation',
    desc: 'Selalu menghadirkan inovasi kreatif untuk hasil yang memukau'
  },
]

export default function AboutSection() {
  return (
    <div id="about" className="flex flex-col items-center w-full gap-y-8 md:gap-y-12 pt-20 px-6 scroll-pt-20">
      <SubTitle
        Icon={CiHeart}
        label="About SnapGo"
      />
      <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center">Passion Meets <span className="text-yellow-400">Professionalism</span></h1>
      <p className="text-xl md:text-lg font-semibold text-slate-500 text-center md:max-w-1/2">Kami adalah tim profesional yang berdedikasi mengabadikan momen-momen berharga dalam hidup Anda dengan kualitas terbaik dan sentuhan artistik yang memukau.</p>
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:max-w-2/3">
        <div className="flex flex-col gap-y-4 md:gap-y-8 md:max-w-1/2">
          <h2 className="text-xl md:text-3xl font-playfair">Our Story</h2>
          <p className="text-base md:text-lg font-semibold text-slate-500">Bermula dari passion terhadap seni visual, PictureOnCam hadir untuk memberikan layanan fotografi dan videografi profesional. Kami percaya bahwa setiap momen memiliki cerita unik yang layak diabadikan dengan sempurna.</p>
          <div className="text-base md:text-lg font-semibold text-slate-500">Dengan pengalaman lebih dari 5 tahun dan portofolio yang beragam, kami telah membantu ratusan klien mengabadikan momen spesial mereka, dari pernikahan romantis hingga konten bisnis yang professional.</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="flex flex-col gap-y-4 pb-auto p-4 rounded-md shadow-md">
              <advantage.Icon className="text-yellow-400 size-6 md:size-8" />
              <p className="text-lg md:text-xl font-bold">{advantage.title}</p>
              <p className="text-slate-500 font-semibold">{advantage.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center md:max-w-2/3 gap-y-8">
          <h2 className="font-playfair text-2xl font-bold">Our Values</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex flex-col gap-y-2 md:gap-y-4 items-center">
                <p className="text-lg font-bold">{value.title}</p>
                <p className="text-slate-500 text-center">{value.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}