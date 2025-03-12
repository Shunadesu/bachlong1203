import Reac from "react";
import { useProductAndroidValentine } from "../../apis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSlidesToShow } from "../hook/settingsSlide";

const ProductAndroidList = () => {
  const { data, isLoading, error } = useProductAndroidValentine();
  const slidesToShow = useSlidesToShow();

  if (isLoading) return <div className="min-h-[380px] h-full flex justify-center items-center w-full">
    <div role="status">
      <svg aria-hidden="true" class="inline w-18 h-18 text-white animate-spin dark:text-gray-600 fill-yellow-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  </div>;
  if (error) return <p>Error loading data</p>;
  if (!data || data.length === 0) return <div className="min-h-[380px] h-full flex justify-center items-center w-full">Có lỗi gì rồi... đợi xíu nhen</div>;

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
                  Android Valentine Deals
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

export default ProductAndroidList;
