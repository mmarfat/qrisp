// shadcn
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"

// i18n
import { useTranslation } from "react-i18next";

// Icons
import {
  Check,
  Globe,
} from "lucide-react";

// Utils
import { LANGUAGES } from "@/components/custom/LanguageToggle/settings";

const LanguageToggle = () => {

  const { t, i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 px-3 rounded-sm flex items-center gap-1.5 dark:border-border/40 dark:bg-background">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{i18n.resolvedLanguage.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {(LANGUAGES || []).map((value) => (
          <DropdownMenuItem
            key={value}
            onClick={() => i18n.changeLanguage(value)}
            className="flex items-center justify-between"
          >
            <span>{t(`language.toggle.${value}`)}</span>
            {i18n.resolvedLanguage === value && <Check className="h-4 w-4 ml-2" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle;