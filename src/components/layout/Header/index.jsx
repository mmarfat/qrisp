import Logo from "@/components/theme/logo";
import ThemeToggle from "@/components/custom/ThemeToggle";
import LanguageToggle from '@/components/custom/LanguageToggle';

const Header = () => {

    return (
        <header>
            <div className="flex items-center justify-between">
                <Logo />
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header;