import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
type Language = {
    label: string;
    value: string;
};
export default function EnglishSelect() {
    const allLanguages: Language[] = [
        { label: "English", value: "en" },
        { label: "Spanish", value: "es" },
        { label: "French", value: "fr" },
        { label: "Arabic", value: "ar" },
    ];
    const [language, setLanguage] = useState<Language>({
        label: "English",
        value: "en",
    });
    return (
        <Select>
            <SelectTrigger className="custom-sheet-trigger w-24 text-[#777]">
                <SelectValue placeholder={`${language?.label}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {allLanguages.map((language) => {
                        return (
                            <SelectItem
                                className="hover:bg-[#ff497c] hover:text-white"
                                onClick={() => setLanguage(language)}
                                key={language.value}
                                value={language.value}
                            >
                                {language.label}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
