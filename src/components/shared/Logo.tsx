type logoProps = { className?: string };
export default function Logo({ className }: logoProps) {
    return (
        <img
            className={`${className} w-[150px]`}
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
        />
    );
}
