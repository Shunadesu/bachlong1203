import { Outlet } from "react-router-dom"
import { Header, Navbar, Footer } from "../../components"
import Sidebar from "../../components/Sidebar/Sidebar"
import { ProductIPhoneList, ProductAndroidList, ProductMay99List } from "../../components/pages";
import icons from "../../ulities/icons";
import {motion} from "framer-motion";
import whitevalentine from '../../assets/whitevalentine.png'
const Public = () => {
  const {IoMdHeart, FiGift} = icons
  return (
    <main className="w-full flex flex-col items-center justify-center">
        <Header />
        <Navbar />
        <div className="w-full flex flex-col items-center justify-center gap-4 my-4">
          <div className="max-w-[1440px] w-full max-h-[300px] rounded-2xl overflow-hidden bg-amber-100">
            <img src={whitevalentine} 
            alt="banner"  
            className="w-full h-full object-contain"/>
          </div>

          <div className="max-w-[1440px] flex flex-col gap-4 justify-center items-center px-8 w-full py-4 relative bg-amber-100 rounded-2xl">
            <div className="xl:grid grid-cols-3 md:flex md:flex-col items-center w-[85%] justify-around px-8 py-2 border rounded-full bg-red-600 shadow-xl"> 
              <div className="col-span-2 xl:text-[56px] lg:text-[40px] md:text-[30px] sm:[text-28px] text-white font-bold uppercase flex items-center justify-center gap-2">
                <motion.div 
                  animate={{ rotate: [-10, 10, -10] }} 
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <IoMdHeart className="text-white"/>
                </motion.div>
                  Valentine Trắng
                <motion.div 
                  animate={{ rotate: [10, -10, 10] }} 
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <IoMdHeart className="text-white"/>
                </motion.div>
              </div>
              <div className="flex text-white col-span-1 w-full xl:flex-col md:flex-row-reverse md:gap-4 xl:gap-1 gap-4 justify-center">
                <div className="xl:text-[36px] lg:text-[28px] md:text-[22px] sm:text-[16px] text-[14px] flex gap-2 items-center font-bold uppercase text-yellow-400">
                  Đáp quà tặng
                  <FiGift />
                </div>
                <div className="xl:text-[32px] lg:text-[28px] md:text-[22px] sm:text-[16px] text-[14px]  font-bold uppercase">
                  Trọn yêu thương
                </div>        
              </div>
            </div>
            <Sidebar/>
            <Outlet/>
          </div>

          <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-4  relative gap-4 bg-pink-200 rounded-2xl">
            <img src="https://bachlongmobile.com/_next/image/?url=https%3A%2F%2Fbeta-api.bachlongmobile.com%2Fmedia%2Fdailysalebanner%2F2025-03-11_15-57-13-534.png&w=3840&q=75" alt="banner" />
            <ProductMay99List />
          </div>

          <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-4 relative gap-4 bg-amber-100 rounded-2xl">
            <p className="w-full text-start text-[24px] uppercase">Sản phẩm Android dành cho nửa kia</p>
            <ProductAndroidList />
          </div>

          <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-4 relative gap-4 bg-amber-100 rounded-2xl">
            <p className="w-full text-start text-[24px] uppercase">Sản phẩm Iphone đáp quà tặng</p>
            <ProductIPhoneList />
          </div>

          <div className="max-w-[1440px] w-full rounded-2xl overflow-hidden">
            <img src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/viber_image_2025-03-10_14-58-29-872.jpg" alt="banner"  className="w-full h-full object-contain"/>
          </div>
        </div>
        <Footer />
    </main>
  )
}

export default Public