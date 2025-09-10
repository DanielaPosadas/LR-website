export interface sectionProps {
  sections: string[];
  marca: string | null;
}

export interface dataProps {
  title: string;
  model: string;
  technicalData: string[];
  image: string;
  description: string;
  price: string;
  marca: string;
  benefits: { title: string; image: string }[];
  id: string;
}

export interface ImagesProps {
  images: string[];
  slides: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  alt: string | string[];
}
