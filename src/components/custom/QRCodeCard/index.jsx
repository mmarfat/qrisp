import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// shadcn/ui
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import { QrCode } from "lucide-react";

// Utils
import DownloadButton from "@/components/custom/DownloadButton";

// qr-code-styling
import QRCodeStyling from "qr-code-styling";

const QRCodeCard = () => {
  const qrRef = useRef(null);
  const qrInstance = useRef(null);

  // Redux state
  const qrData = useSelector((state) => state?.qr?.qrData ?? {});
  const logo = useSelector((state) => state?.qr?.logo ?? null);

  // i18n
  const { t } = useTranslation();

  // Initialize QR instance
  useEffect(() => {
    qrInstance.current = new QRCodeStyling({
      width: 200,
      height: 200,
      type: "svg",
      image: logo || undefined,
      dotsOptions: {
        color: "#000000",
        type: "rounded"
      },
      backgroundOptions: {
        color: "transparent"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 4
      }
    });

    if (qrRef.current) {
      qrInstance.current.append(qrRef.current);
    }
  }, []);

  // Update QR on data/logo change
  useEffect(() => {
    if (qrInstance.current) {
      const value = typeof qrData.payload === "string"
        ? qrData.payload
        : JSON.stringify(qrData.payload);

      qrInstance.current.update({
        data: value || "",
        image: logo || undefined
      });
    }
  }, [qrData, logo]);

  return (
    <Card className="border-border text-card-foreground overflow-hidden backdrop-blur-sm bg-card/30 py-0 gap-2">
      <div className="flex items-center gap-2 border-b border-border p-4.75 font-medium text-sm tracking-tight">
        <QrCode className="h-4 w-4" />
        {t("qrpreview.qrcode")}
      </div>
      <CardContent className="p-4 pt-2 flex flex-col gap-4 mx-auto">
        <div className="flex items-center justify-center h-56 w-56 bg-background/30 rounded-md border border-border/40">
          <div ref={qrRef} className="scale-[1.3]" />
        </div>
        <DownloadButton qrRef={qrInstance} />
      </CardContent>
    </Card>
  );
};

export default QRCodeCard;
