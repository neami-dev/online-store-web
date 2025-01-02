import NavBar from "./NavBar";
import TopNavbar from "./topNavbar";

export default function Header() {
    return (
        <section className="flex flex-col items-center w-full pt-1">
            <TopNavbar />
            <NavBar />
        </section>
    );
}
