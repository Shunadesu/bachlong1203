import { Outlet } from "react-router-dom"
import { Header, Navbar, Footer } from "../../components"
import Sidebar from "../../components/Sidebar/Sidebar"
import { ProductIPhoneList, ProductAndroidList, ProductMay99List } from "../../components/pages";
const Public = () => {

  return (
    <main className="w-full flex flex-col items-center justify-center gap-4">
        <Header />
        <Navbar />
        <div className="max-w-[1440px] w-full px-8">
          <img src="https://beta-api.bachlongmobile.com/media/MageINIC/bannerslider/viber_image_2025-03-10_14-58-29-872.jpg" alt="banner"  className="w-full h-full object-contain"/>
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative">
          <h1 className="text-[28px]"> VALENTINE TRẮNG - ĐÁP QUÀ TẶNG - TRỌN YÊU THƯƠNG </h1>
          <Sidebar/>
          <Outlet/>
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
          <p className="w-full text-start">Sản phẩm Android</p>
          <ProductAndroidList />
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
          <p className="w-full text-start">Sản phẩm Iphone</p>
          <ProductIPhoneList />
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
          <p className="w-full text-start">Máy cũ nhưng xịn xịn</p>
          <ProductMay99List />
        </div>

        <Footer />
    </main>
  )
}

export default Public