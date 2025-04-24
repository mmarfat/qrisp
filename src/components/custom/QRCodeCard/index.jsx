// shadcn
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { QrCode } from "lucide-react"

// Utils
import DownloadButton from "@/components/custom/DownloadButton";

const QRCodeCard = () => {

  const { t } = useTranslation();

  return (
    <Card className="border-border text-card-foreground overflow-hidden backdrop-blur-sm bg-card/30 py-0 gap-2">
      <div className="flex items-center gap-2 border-b border-border p-4.75 font-medium text-sm tracking-tight">
        <QrCode className="h-4 w-4" />
        {t("qrpreview.qrcode")}
      </div>
      <CardContent className="p-4 pt-2 flex flex-col gap-4 mx-auto">
        {/* QR Code preview (placeholder) */}
        <div className="flex items-center justify-center h-56 w-56 bg-background/30 rounded-md border border-border/40">
          <p className="text-muted-foreground">{t("qrpreview.qrcode")}</p>
        </div>
        <DownloadButton />
      </CardContent>
    </Card>
  );
};

export default QRCodeCard;