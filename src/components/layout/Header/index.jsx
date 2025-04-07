import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/custom/ThemeToggle";
import LanguageToggle from '@/components/custom/LanguageToggle';

import { HomeIcon  } from "lucide-react";

const Header = () => {

    // Handlers
    const handleHomeClick = () => {
        window.location.href = "/";
    };

    return (
        <header>
            <div className="flex items-center justify-between">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={handleHomeClick}
                    className="rounded-sm dark:border-border/40"
                    aria-label="Go to home page"
                >
                    <HomeIcon aria-label="Go to home page icon" />
                </Button>
                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header;