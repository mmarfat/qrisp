// Custom components
import Logo from "@/components/theme/logo";
import ThemeToggle from "@/components/custom/ThemeToggle";
import LanguageToggle from '@/components/custom/LanguageToggle';

const Header = () => {

  return (
    <header>
      <div className="flex items-center justify-between">
        <button
          onClick={() => window.location.href = "/"}
          aria-label="Go to home page"
          className="flex items-center gap-2"
        >
          <Logo />
          <p className="font-black text-3xl text-primary dark:text-primaryDark sm:text-4xl leading-[unset]">
            qrisp.
          </p>
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