import icons from "../ulities/icons"

const {
    GiGearHammer, 
    CiLocationOn,
    GoCodeOfConduct,
    SlNote,
    LuShoppingCart,
    LuPackageCheck,
    MdOutlineAccountCircle
} = icons


const navdata = [
    // {
    //     id: 1,
    //     title: 'Sửa chữa',
    //     link: '/#',
    //     icon: <GiGearHammer className="text-[20px]"/>
    // },
    // {
    //     id: 2,
    //     title: 'Cửa hàng',
    //     link: '/#',
    //     icon: <CiLocationOn className="text-[20px]"/>
    // },
    // {
    //     id: 3,
    //     title: 'Tuyển dụng',
    //     link: '/#',
    //     icon: <GoCodeOfConduct className="text-[20px]"/>
    // },
    // {
    //     id: 4,
    //     title: 'Góp Ý',
    //     link: '/#',
    //     icon: <SlNote className="text-[20px]"/>
    // },
    {
        id: 5,
        title: 'Tra cứu đơn',
        link: '/#',
        icon: <LuPackageCheck className="text-[20px]"/> 
    },
    {
        id: 6,
        title: 'Giỏ hàng',
        link: '/#',
        icon: <LuShoppingCart className="text-[20px]"/>
    },
    {
        id: 7,
        title: 'Đăng nhập',
        link: '/#',
        icon: <MdOutlineAccountCircle className="text-[20px]"/>
    },
]

export default navdata