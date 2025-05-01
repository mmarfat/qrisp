import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { Download } from "lucide-react";

// Utils
import { DOWNLOAD_OPTIONS } from "@/components/custom/DownloadButton/settings";

import QRCodeStyling from "qr-code-styling";

const DownloadButton = ({ disabled = false, qrCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleDownload = (format) => {
    setIsOpen(false);

    if (!qrCode) {
      return;
    }

    const qrDownload = new QRCodeStyling({
      ...qrCode._options,
      ...(format !== "svg" && {
        width: 2048,
        height: 2048,
      }),
    })

    qrDownload.download({
      extension: format,
    });
  };
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="sm" disabled={disabled}>
          <Download className="h-4 w-4" />
          {t("qrpreview.download")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-(--radix-dropdown-menu-trigger-width)">
        {DOWNLOAD_OPTIONS.map(({ value, label, icon: Icon, desc }) => (
          <DropdownMenuItem key={value} onClick={() => handleDownload(value)} className="cursor-pointer">
            {Icon && <Icon className="h-4 w-4" />}
            {label}
            <span className="ml-auto text-muted-foreground text-xs">{t(desc)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadButton;