import { useProductPhuKien } from "../../apis";

const ProductPhuKien = ({ saleType, label }) => {
  const { data, isLoading, error } = useProductPhuKien(saleType);
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

  return (
    <div id={saleType} className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-2xl uppercase font-semibold mb-2">{label}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((category) =>
          category.items.map((product) => (
            <div key={product.product.url_key} className="border p-4 rounded-md shadow-sm">
              {product.product.image?.url && (
                <img
                  src={product.product.image.url}
                  alt={product.product.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              )}

              <div className="flex flex-col gap-1">
                  <p className="font-bold xl:text-[17px] lg:text-[16px] md:text-[14px] line-clamp-1">
                    {product.product.name}
                  </p>
                  <p className="text-red-700 font-bold xl:text-[16px] text-[14px]">
                    {product.product.price_range.minimum_price.final_price.value.toLocaleString()} VND
                  </p>

                  <div className="flex items-center gap-2 xl:text-[14px] text-[12px]">
                    <p className="line-through">
                      {product.price_original.toLocaleString()} VND
                    </p>
                    <div className="px-2 text-red-700 font-bold border border-red-700 rounded-lg">
                      <p>
                        -{((1 - product.sale_price / product.price_original) * 100).toFixed(0)}%
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
      </div>
    </div>
  );
};

const ProductPhuKienList = () => {
  const categories = [
    { key: "coc-cap-sac-valentine", label: "Cốc & Cáp Sạc" },
    { key: "pin-du-phong-valentine", label: "Pin Dự Phòng" },
    { key: "tai-nghe-valentine", label: "Tai Nghe" },
    { key: "khac-valentine", label: "Phụ Kiện Khác" },
  ];
  return (
    <div className="flex flex-wrap gap-6">
      {categories.map((category) => (
        <ProductPhuKien key={category.key} saleType={category.key} label={category.label} />
      ))}
    </div>
  );
};

export default ProductPhuKienList;
