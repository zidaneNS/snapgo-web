import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Services',
    href: '#service'
  },
  {
    label: 'Portfolio',
    href: '#portfolio'
  },
  {
    label: 'Testmonials',
    href: '#testimonials'
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(false);
  const navBarRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!navBarRef.current) return;

      if (!navBarRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  });

  return (
    <>
      <div className={`fixed top-0 w-screen flex justify-between items-center p-4 md:px-12 md:py-4 ${!isTop ? 'bg-linear-to-b from-black/80 to-transparent backdrop-blur-md' : 'bg-transparent backdrop-blur-none'} z-50`}>
        <h1 className={`text-xl md:text-2xl font-bold font-playfair text-white`}>Snap<span className="text-yellow-400">Go</span></h1>
        <div className="hidden md:flex gap-x-6 items-center">
          {navLinks.map((navLink, idx) => (
            <a href={navLink.href} key={idx} className="hover:text-yellow-400 text-white font-bold text-lg duration-300">{navLink.label}</a>
          ))}
          <Button onClick={() => window.location.replace('#contact')} className="px-4 py-2">Book Now</Button>
        </div>

        <GiHamburgerMenu onClick={(e) => {
          e.stopPropagation();
          setIsOpen(prev => !prev)
        }} className="block md:hidden text-white size-6" />

      </div>
      <div ref={navBarRef} className={`flex flex-col z-30 md:hidden fixed ${isOpen ? 'top-0' : '-top-full'} p-6 pt-12 gap-y-4 duration-300 bg-black/60 backdrop-blur-md w-full rounded-b-3xl`}>
        {navLinks.map((navLink, idx) => (
          <a href={navLink.href} key={idx} onClick={() => setIsOpen(false)} className="hover:text-yellow-400 text-white font-bold duration-300 py-2 border-b border-white text-center">{navLink.label}</a>
        ))}
        <Button onClick={() => {
          setIsOpen(false);
          window.location.replace('#contact');
        }} className="px-4 py-2 justify-center">Book Now</Button>
      </div>
    </>
  )
}