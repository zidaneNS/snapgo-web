import type { IconType } from "react-icons"
import { BsCameraVideo } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import wedding from "../assets/images/img-wedding.jpg";
import wedding2 from "../assets/images/img-wedding2.jpg";
import corporate from "../assets/images/img-corporate-event.jpg";
import event from "../assets/images/img-event.jpg";
import event2 from "../assets/images/img-event2.jpg";
import corporate2 from "../assets/images/img-corporate.jpg";

export type PortfolioType = 'photo' | 'video'

export interface PortfolioTypeItem {
  Icon: IconType;
  label: string;
}

export type Portfolio = Record<PortfolioType, PortfolioTypeItem>;

const portfolioType: Portfolio = {
  photo: {
    Icon: IoCameraOutline,
    label: 'Photography'
  },
  video: {
    Icon: BsCameraVideo,
    label: 'Videography'
  }
}

export interface PortfolioCard {
  img: string;
  title: string;
  type: PortfolioTypeItem[];
  desc: string;
  categoryId: 0 | 1 | 2 | 3;
}

export const portfolios: PortfolioCard[] = [
  {
    categoryId: 1,
    img: wedding,
    title: 'Romantic Wedding Ceremony',
    type: [portfolioType.photo],
    desc: 'Beautiful outdoor wedding with golden hour lighting'
  },
  {
    categoryId: 2,
    img: corporate,
    title: 'Corporate Team Building',
    type: [portfolioType.photo, portfolioType.video],
    desc: 'Corporate Team Building'
  },
  {
    categoryId: 3,
    img: event,
    title: 'Grand Anniversary Celebration',
    type: [portfolioType.video],
    desc: 'Elegant anniversary party with stunning venue'
  },
  {
    categoryId: 1,
    img: wedding2,
    title: 'Pre-Wedding Session',
    type: [portfolioType.photo],
    desc: 'Beautiful outdoor wedding with golden hour lighting'
  },
  {
    categoryId: 2,
    img: corporate2,
    title: 'Product Launch Event',
    type: [portfolioType.photo, portfolioType.video],
    desc: 'High-end product launch with celebrity guests'
  },
  {
    categoryId: 3,
    img: event2,
    title: 'Birthday Celebration',
    type: [portfolioType.photo],
    desc: 'Joyful birthday party with family and friends'
  },
]