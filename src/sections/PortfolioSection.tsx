import { IoEyeOutline } from "react-icons/io5";
import SubTitle from "../components/SubTitle";
import { useEffect, useState } from "react";
import { portfolios } from "../mockup/portfolio";
import type { PortfolioCard } from "../mockup/portfolio";
import Button from "../components/Button";

type CategoryType = 'all' | 'wedding' | 'corporate' | 'events';

interface Category {
  id: number;
  label: string;
  type: CategoryType;
}

const categories: Category[] = [
  {
    id: 0,
    label: 'All Work',
    type: 'all'
  },
  {
    id: 1,
    label: 'Wedding',
    type: 'wedding'
  },
  {
    id: 2,
    label: 'Corporate',
    type: 'corporate'
  },
  {
    id: 3,
    label: 'Events',
    type: 'events'
  },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [displayPortfolio, setDisplayPortfolio] = useState<PortfolioCard[]>(portfolios);

  useEffect(() => {
    if (selectedCategory.id === 0) {
      setDisplayPortfolio(portfolios);
    } else {
      setDisplayPortfolio(portfolios.filter(portfolio => portfolio.categoryId === selectedCategory.id));
    }
  }, [selectedCategory]);

  return (
    <div id="portfolio" className="flex flex-col items-center w-full gap-y-8 md:gap-y-12 pt-20 px-8 scroll-pt-20">
      <SubTitle
        Icon={IoEyeOutline}
        label="Our Portfolio"
      />
      <h1 className="text-3xl md:text-5xl font-bold font-playfair text-center">Showcase of Our <span className="text-yellow-400">Best Work</span></h1>
      <p className="text-xl md:text-lg font-semibold text-slate-500 text-center md:max-w-1/2">Lihat koleksi karya terbaik kami yang menggambarkan dedikasi dan keahlian dalam mengabadikan momen-momen berharga.</p>
      <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
        {categories.map((category, idx) => (
          <button key={idx} onClick={() => setSelectedCategory(category)} className={`font-bold text-center w-fit hover:bg-yellow-400 duration-300 cursor-pointer ${selectedCategory.id === category.id ? 'bg-yellow-400' : 'bg-transparent'} border border-slate-200 shadow-md rounded-md px-3 py-2 text-sm md:text-base`}>{category.label}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {displayPortfolio.map((portfolio, idx) => (
          <div key={idx} className=" group relative flex flex-col justify-between p-6 rounded-md cursor-pointer w-full overflow-hidden hover:bg-linear-to-t from-black/70 to-transparent duration-300 aspect-square">
            <img src={portfolio.img} alt="wedding" className="absolute left-0 top-0 group-hover:scale-105 -z-10 duration-300 h-full object-cover w-full" />
            <div className="flex justify-center items-center p-2 rounded-md bg-yellow-400 opacity-0 group-hover:opacity-100 w-fit duration-300">
              <IoEyeOutline />
            </div>
            <div className="group-hover:-translate-y-1.5 flex flex-col gap-y-2 text-white duration-300">
              <div className="flex gap-x-3 items-center text-sm">
                {portfolio.type.length > 1 ? (
                  <>
                    {portfolio.type.map((item, id) => {
                      const Icon = item.Icon
                      return <Icon key={id} className="size-6" />
                    })}
                    <p>
                      {portfolio.type.map(t => t.label).join(' & ')}
                    </p>
                  </>
                ) : (
                  (() => {
                    const Icon = portfolio.type[0].Icon
                    return (
                      <>
                        <Icon className="size-6" />
                        <p>{portfolio.type[0].label}</p>
                      </>
                    )
                  })()
                )}
              </div>
              <p className="text-lg font-playfair">{portfolio.title}</p>
              <p className="text-sm">{portfolio.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-4 items-center">
        <p className="text-base md:text-lg text-slate-500 text-center">Ingin melihat lebih banyak karya kami? Hubungi kami untuk portofolio lengkap.</p>
        <Button className="py-2 px-4">View Complete Portfolio</Button>
      </div>
    </div>
  )
}