import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type Currency = {
    label: string;
    value: string;
};
export default function CurrencySelect() {
    const allCurrencies: Currency[] = [
        { label: "US Dollar", value: "USD" },
        { label: "Euro", value: "EUR" },
        { label: "Moroccan Dirham", value: "MAD" },
    ];
    const [currency, setCurrency] = useState<Currency>({
        label: "Moroccan Dirham",
        value: "MAD",
    });
    return (
        <Select>
            <SelectTrigger className="custom-sheet-trigger max-w-28 text-[#777]">
                <SelectValue placeholder={`${currency?.label}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {allCurrencies.map((Currency) => {
                        return (
                            <SelectItem
                                className="hover:bg-[#ff497c] hover:text-white"
                                onClick={() => setCurrency(Currency)}
                                key={Currency.value}
                                value={Currency.value}
                            >
                                {Currency.label}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
