import { routePaths } from "@/constants";
import { Link } from "react-router-dom";

export default function NavLinks() {
    return (
        <ul className="flex flex-col lg:flex-row gap-8 p-6 lg:p-0 text-gray-600 lg:text-black lg:gap-12 font-medium">
            <li>
                <Link to={routePaths.HOME_ROUTE_PATH}>Home</Link>
            </li>
            <li>
                <Link to={"/"}>Shop</Link>
            </li>
            <li>
                <Link to={"/"}>About</Link>
            </li>
            <li>
                <Link to={"/"}>Blog</Link>
            </li>
            <li>
                <Link to={"/"}>Contact</Link>
            </li>
        </ul>
    );
}
