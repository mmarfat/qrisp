// Logo component for the header

import { useTheme } from "next-themes";

const Logo = () => {
    const { resolvedTheme } = useTheme();

    return (
        <button
            onClick={() => window.location.href = "/"}
            aria-label="Go to home page"
            className="flex items-end gap-2"
        >
            <img src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"} alt="Logo" className="h-9 w-9" />
            <p className="font-black text-4xl text-primary line-height-1 dark:text-primaryDark ">
                qrisp.
            </p>
        </button>
    )
}

export default Logo;