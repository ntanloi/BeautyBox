import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import anhProduct1 from '../../assets/images/anhProduct1.png';
import anhProduct2 from '../../assets/images/anhProduct2.png';

const ProductCard = ({
  images = [anhProduct1, anhProduct2],
  freeShip = true,
  brand = 'AMUSE',
  category = 'Bảng Phấn Mắt 9 Ô Thuần Chay',
  name = 'Amuse Eye Color Palette 11g',
  price = '639.000đ',
  oldPrice = '659.000đ',
  discount = '-3%',
  rating = 5,
  reviewCount = 5,
  colors = ['#E8B4B8', '#C9A5A0', '#F5D5D5'],
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-80 overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div
        className="relative aspect-square cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={images[0]}
          alt={name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={images[1]}
          alt={name}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <button
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-gray-100"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            size={20}
            className={
              isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'
            }
          />
        </button>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <button className="rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 px-8 py-3 font-semibold text-white transition-shadow hover:shadow-lg">
            Xem nhanh
          </button>
        </div>

        {freeShip && (
          <div className="absolute bottom-3 left-3">
            <div className="rounded bg-gradient-to-r from-pink-400 to-pink-300 px-4 py-1 text-sm font-bold text-white">
              FREESHIP
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="mb-1 text-center font-bold text-gray-900">{brand}</div>

        <div className="mb-1 text-center text-sm text-gray-600">{category}</div>

        <div className="mb-3 text-center text-gray-800">{name}</div>

        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
          <span className="rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
            {discount}
          </span>
        </div>

        <div className="flex items-center justify-center gap-1">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? 'text-black' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
          <span className="ml-1 text-sm text-gray-600">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
