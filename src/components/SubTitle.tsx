import type { IconType } from "react-icons"

interface SubTitleProps {
  Icon: IconType;
  label: string;
}

export default function SubTitle({
  Icon,
  label
}: SubTitleProps) {
  return (
    <div className="flex gap-x-3 items-center bg-yellow-300/20 text-yellow-400 font-semibold w-fit px-4 py-1.5 rounded-full text-xs md:text-sm">
      <Icon className='size-4' />
      <p>{label}</p>
    </div>
  )
}