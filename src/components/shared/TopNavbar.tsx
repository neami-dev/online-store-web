import { Link } from "react-router-dom";
import CurrencySelect from "./CurrencySelect";
import EnglishSelect from "./EnglishSelect";
import { routePaths } from "@/constants";

export default function TopNavbar() {
    return (
        <section className="w-[90%] flex flex-col sm:flex-row justify-between items-center rounded-lg pb-1">
            <div className="flex">
                <EnglishSelect />
                <CurrencySelect />
            </div>
            <ul className="flex text-sm  gap-9 opacity-60">
                <li className="hover:text-[#0d6efd] cursor-pointer">
                    <Link to={"/"}>Help</Link>
                </li>
                <li className="hover:text-[#0d6efd] cursor-pointer">
                    <Link to={routePaths.REGISTER_ROUTE_PATH}>Join Us</Link>
                </li>
                <li className="hover:text-[#0d6efd] cursor-pointer">
                    <Link to={routePaths.LOGIN_ROUTE_PATH}>Sign In</Link>
                </li>
            </ul>
        </section>
    );
}
