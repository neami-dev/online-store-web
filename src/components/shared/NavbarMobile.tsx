import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { TableOfContents } from "lucide-react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function NavbarMobile({ iconWidth }: { iconWidth: number }) {
    return (
        <Sheet>
            <SheetTrigger className="custom-sheet-trigger">
                <TableOfContents
                    className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    width={iconWidth}
                />
            </SheetTrigger>
            <SheetContent className="">
                <SheetHeader>
                    <SheetTitle>
                        <Logo className="w-[85px] sm:w-[150px]"/>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                    <NavLinks />
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
