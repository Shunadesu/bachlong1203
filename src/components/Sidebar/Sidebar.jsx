import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        { name: "Android", path: "/android" },
        { name: "iPhone", path: "/iphone" },
        { name: "Máy 99%", path: "/may99" },
        { name: "Non-Phone", path: "/nonphone" },
        { name: "Samsung", path: "/samsung" },
        { name: "Accessories", path: "/accessories" },
    ];

    return (
        <div className="h-full w-full text-black p-4">
            <nav>
                <ul className="lg:flex grid grid-cols-3 w-full gap-4 justify-center items-center">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `block p-3 text-[12px] lg:text-[16px] text-center rounded-md bg-white transition-colors border duration-200 ${isActive ? "bg-yellow-500 text-white border border-yellow-700" : "hover:bg-yellow-500 hover:text-white border border-yellow-700"}`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;