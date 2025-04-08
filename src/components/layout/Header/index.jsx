import ThemeToggle from "@/components/custom/ThemeToggle";
import LanguageToggle from '@/components/custom/LanguageToggle';

const Header = () => {

    // Handlers
    const handleHomeClick = () => {
        window.location.href = "/";
    };

    return (
        <header>
            <div className="flex items-center justify-between">
                <button
                    onClick={handleHomeClick}
                    aria-label="Go to home page"
                >
                    <img src="logo.png" alt="Logo" className="h-8 w-8" />
                </button>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header;