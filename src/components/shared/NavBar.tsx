import Logo from "./Logo";
import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import NavLinks from "./NavLinks";

export default function NavBar() {
    const [iconWidth, setIconWidth] = useState(18);
    const handleResize = () => {
        if (window.innerWidth >= 640) {
            setIconWidth(21);
        } else if (window.innerWidth >= 1024) {
            setIconWidth(24);
        }
    };
    useEffect(() => {
        handleResize();
    }, []);

    return (
        <section className="w-[90%] bg-white  shadow-sm flex justify-between items-center rounded-lg py-3 px-2 sm:px-4">
            <Logo className="w-[85px]  sm:w-[150px]" />
            <div className="hidden lg:block">
                <NavLinks />
            </div>
            <ul className="flex text-gray-500">
                <li className="navbar-icon">
                    <Search width={iconWidth} />
                </li>
                <li className="navbar-icon">
                    <Heart width={iconWidth} />
                </li>
                <li className="navbar-icon">
                    <ShoppingCart width={iconWidth} />
                </li>
                <li className="navbar-icon ">
                    <User width={iconWidth} />
                </li>
                <li className="relative lg:hidden navbar-icon mx-1 ">
                    <NavbarMobile iconWidth={iconWidth} />
                </li>
            </ul>
        </section>
    );
}
