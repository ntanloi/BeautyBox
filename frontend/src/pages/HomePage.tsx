import LuongVe from '../assets/images/luongve.png';
import DocQuyen99 from '../assets/images/docquyen99.png';
import RangRo7Nam from '../assets/images/rangro7nam.png';
import Clio from '../assets/images/bannerClio.jpg';
import SachSau from '../assets/images/sachsau.png';
import LungLinh from './../assets/images/lunglinh.png';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../components/ui/ProductCard';

const images = [LuongVe, DocQuyen99, RangRo7Nam, Clio, SachSau, LungLinh];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-4">
        <div className="relative h-59 w-2/3 overflow-hidden rounded-xl bg-gray-100">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="h-full w-full flex-shrink-0">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-fill"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 transition hover:bg-white"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 transition hover:bg-white"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition ${
                  current === index ? 'w-8 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex w-1/3 flex-col gap-4">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={DocQuyen99}
              alt="Độc quyền 99"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <img
              src={RangRo7Nam}
              alt="Rạng rỡ 7 năm"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <br />
      <h1>TOP SẢN PHẨM BÁN CHẠY</h1>
      <ProductCard />
    </div>
  );
}
