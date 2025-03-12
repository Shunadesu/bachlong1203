const SearchBox = () => {
    return (
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Bạn cần tìm gì hôm nay?"
          className="w-full bg-white pl-4 pr-4 py-2 border border-gray-300 rounded-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 flex items-center bg-black p-2 rounded-sm m-1 text-gray-400 cursor-pointer">
          🔍
        </div>
      </div>
    );
  };
  
  export default SearchBox;
  