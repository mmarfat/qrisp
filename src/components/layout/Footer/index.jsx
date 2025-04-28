import { Button } from "@/components/ui/button";
import GithubIcon from "@/components/layout/Footer/GithubIcon";

// i18n
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer>
      <div className="flex items-center justify-between">
        <p className="text-xs text-primary">&copy; theqrisp.com</p>
        <a 
          href="https://github.com/mmarfat/qrisp" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={t("arialabels.visitgithub")}
        >
          <Button size="icon" variant="ghost" className="hover:bg-transparent" aria-label={t("arialabels.ghbutton")}>
            <GithubIcon />
          </Button>
        </a>
      </div>
    </footer>
  )
}

export default Footer;