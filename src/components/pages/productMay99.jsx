import React from "react";
import {useProductMay99} from "../../apis";
import { useSlidesToShow } from "../hook/settingsSlide";
import Slider from "react-slick";
const ProductMay99List = () => {
  const { data, isLoading, error } = useProductMay99();
  const slidesToShow = useSlidesToShow();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow, // ✅ Dynamically set from the custom hook
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
<div className="w-full flex flex-col justify-center items-center">
      <div className="slider-container xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] sm:max-w-[640px] max-w-[400px] w-full">
        <Slider {...settings} className="cursor-grab">
          {data.flatMap((product) =>
            product.items.map((item, index) => (
              <div
                key={index}
                className="border items-center xl:!w-[265px] lg:!w-[245px] md:!w-[225px] w-full border-gray-200 bg-white p-4 !rounded-lg !flex gap-4 flex-col transition-all duration-300 hover:shadow-xl hover:border-red-400 md:justify-self-center "
              >
                <div className="relative flex transition-all duration-300 xl:w-[160px] xl:h-[160px] lg:w-[150px] lg:h-[150px] sm:w-[120px] sm:h-[120px] hover:scale-105">
                  <img
                    src={item.product.image.url}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                  <img
                  src="https://beta-api.bachlongmobile.com/media/catalog/tmp/category/2025-03-03_09-16-18-824_18.png"
                  alt="banner"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
                </div>

                <div className="lg:w-full text-black font-bold text-center text-[12px] bg-amber-400 rounded-lg p-2">
                  Máy cũ 99% Valentine Deals
                </div>

                <div className="flex flex-col gap-1">
                  <p className="font-bold xl:text-[17px] lg:text-[16px] md:text-[14px] line-clamp-2">
                    {item.product.name}
                  </p>
                  <p className="text-red-700 font-bold xl:text-[16px] text-[14px]">
                    {item.product.price_range.minimum_price.final_price.value.toLocaleString()} VND
                  </p>

                  <div className="flex items-center gap-2 xl:text-[14px] text-[12px]">
                    <p className="line-through">
                      {item.price_original.toLocaleString()} VND
                    </p>
                    <div className="px-2 text-red-700 font-bold border border-red-700 rounded-lg">
                      <p>
                        -{((1 - item.sale_price / item.price_original) * 100).toFixed(0)}%
                      </p>
                    </div>
                  </div>

                  <div className="w-full bg-pink-200 text-center text-red-600 text-[12px] font-semibold p-4 rounded-lg">
                    Giá thu bằng giá bán - Trợ giá lên đến 100%
                  </div>
                </div>
              </div>
            ))
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ProductMay99List;
