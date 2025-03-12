import { useProductPhuKien } from "../../apis";

const ProductPhuKien = ({ saleType, label }) => {
  const { data, isLoading, error } = useProductPhuKien(saleType);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div id={saleType} className="p-4 bg-white shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((category) =>
          category.items.map((product) => (
            <div key={product.product.url_key} className="border p-2 rounded-md shadow-sm">
              {product.product.image?.url && (
                <img
                  src={product.product.image.url}
                  alt={product.product.name}
                  className="w-full h-32 object-cover rounded-md"
                />
              )}
              <h4 className="text-sm font-medium mt-2">{product.product.name}</h4>
              <p className="text-red-500 font-bold">
                {product.sale_price || product.price_original}₫
              </p>
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
