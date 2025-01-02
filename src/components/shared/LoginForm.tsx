import { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { routePaths } from "@/constants";

export default function LoginForm() {
    useEffect(() => {
        const disableScroll = () => {
            document.body.style.overflow = "hidden";
        };

        const enableScroll = () => {
            document.body.style.overflow = "auto";
        };

        const handleResize = () => {
            if (window.innerWidth > 600) {
                disableScroll();
            } else {
                enableScroll();
            }
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            enableScroll(); // Cleanup when unmounting
        };
    }, []);
    return (
        <section className="flex  w-full justify-center items-center">
            {/* <div className="hidden lg:block  lg:w-[40%]">
                <img
                    className="w-full "
                    src="https://new.axilthemes.com/demo/template/etrade/assets/images/bg/bg-image-9.jpg"
                    alt=""
                />
            </div> */}
            <div className="flex  w-full lg:w-[60%] justify-center items-center flex-col">
                <div className="flex  w-full flex-col sm:flex-row sm:m-6  justify-around items-center gap-8 py-5">
                    <img
                        className="w-[150px] lg:absolute lg:left-32"
                        src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
                    />
                    <div className="flex gap-4 flex-col sm:flex-row lg:absolute right-32  justify-between items-center">
                        <span className="text-sm">Not a member?</span>
                        <Link
                            className="text-sm"
                            to={routePaths.REGISTER_ROUTE_PATH}
                        >
                            <Button
                                type="submit"
                                className="bg-[#ff497c] hover:bg-[#dc2e60] w-36 py-6 font-bold"
                            >
                                Sign Up Now
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex  w-full items-center flex-col">
                    <h1 className="text-2xl font-semibold p-3">
                        Sign in to eTrade.
                    </h1>
                    <span className="text-sm  text-gray-400">
                        Enter your detail below
                    </span>
                </div>
                <form className="flex flex-col w-[300px] sm:w-[390px] gap-10 py-14 px-3 text-[#828793]">
                    <div className="relative w-full">
                        <label className="absolute text-sm sm:text-base left-5 bottom-11 sm:bottom-10  py-1 px-2 bg-white ">
                            Email
                        </label>
                        <Input className="w-full" type="email" />
                    </div>
                    <div className="relative">
                        <label className="absolute text-sm sm:text-base left-5 bottom-11 sm:bottom-10  py-1 px-2 bg-white">
                            Password
                        </label>
                        <Input className="w-full" type="password" />
                    </div>
                    <div className="flex justify-between items-center">
                        <Button
                            type="submit"
                            className="bg-[#3577f0] hover:bg-[#2659b8] w-28 py-6 font-bold"
                        >
                            Sign In
                        </Button>
                        <a href="#" className="text-[#0d6efd] text-sm">
                            Forgot your password?
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}
