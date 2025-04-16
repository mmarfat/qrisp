// React
import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"


// Icons
import {
  Check,
  Globe,
} from "lucide-react";


const LanguageToggle = () => {
  const [language, setLanguage] = useState("en")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 px-3 rounded-sm flex items-center gap-1.5 dark:border-border/40 dark:bg-background">
          <Globe className="h-4 w-4" />
          <span className="text-sm font-medium">{language === "en" ? "EN" : "HR"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")} className="flex items-center justify-between">
          <span>English</span>
          {language === "en" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hr")} className="flex items-center justify-between">
          <span>Croatian</span>
          {language === "hr" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LanguageToggle;