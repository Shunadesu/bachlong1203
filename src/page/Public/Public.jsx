import { Outlet } from "react-router-dom"
import { Header, Navbar, Footer } from "../../components"
import Sidebar from "../../components/Sidebar/Sidebar"
import BlurText from "../../components/reactbits/BlurText";
import { ProductIPhoneList, ProductAndroidList, ProductMay99List } from "../../components/pages";
const Public = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
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
          <BlurText
            text="Sản Phẩm Android"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[28px] mb-8 uppercase"
          />
          <ProductAndroidList />
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
          <BlurText
            text="Sản Phẩm Iphone"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[28px] mb-8 uppercase"
          />
          <ProductIPhoneList />
        </div>

        <div className="max-w-[1440px] flex flex-col justify-center items-center px-8 w-full py-2 relative gap-4">
          <BlurText
            text="Máy cũ nhưng xịn xịn"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-[28px] mb-8 uppercase"
          />
          <ProductMay99List />
        </div>

        <Footer />
    </main>
  )
}

export default Public