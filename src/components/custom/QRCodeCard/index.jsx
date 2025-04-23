// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";

// import { useTranslation } from "react-i18next";
// import { QrCode } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import QRCodeStyling from "qr-code-styling";
// import DownloadButton from "@/components/custom/DownloadButton";

// // Define QR code instance outside component to avoid multiple re-instantiations
// const qrCodeInstance = new QRCodeStyling({
//   width: 220,
//   height: 220,
//   type: "svg",
//   data: "https://example.com", // Replace dynamically later
//   dotsOptions: {
//     color: "#000000",
//     type: "rounded",
//   },
//   backgroundOptions: {
//     color: "transparent",
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     margin: 10,
//   },
// });

// const QRCodeCard = () => {
//   const { t } = useTranslation();
//   const qrContainerRef = useRef(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     if (mounted && qrContainerRef.current) {
//       // Clear existing children (if any) before appending QR again
//       qrContainerRef.current.innerHTML = "";
//       qrCodeInstance.append(qrContainerRef.current);
//       qrCodeInstance.update({
//         data: "https://example.com", // You can make this dynamic
//       });
//     }
//   }, [mounted]);

//   const handleDownload = () => {
//     qrCodeInstance.download({ extension: "png" });
//   };

//   return (
//     <Card className="border-border text-card-foreground overflow-hidden backdrop-blur-sm bg-card/30 py-0 gap-2">
//       <div className="flex items-center gap-2 border-b border-border p-4.75 font-medium text-sm tracking-tight">
//         <QrCode className="h-4 w-4" />
//         {t("qrpreview.qrcode")}
//       </div>
//       <CardContent className="p-4 pt-2 flex flex-col gap-4 mx-auto">
//         <div
//           ref={qrContainerRef}
//           className="flex items-center justify-center h-56 w-56 bg-background/30 rounded-md border border-border/40"
//         />
//         <DownloadButton onClick={handleDownload} />
//       </CardContent>
//     </Card>
//   );
// };

// export default QRCodeCard;
import React, { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

// Create QR code instance
const qrCodeInstance = new QRCodeStyling({
  width: 220,
  height: 220,
  type: "svg",
  data: "https://example.com", // Will be replaced dynamically
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  backgroundOptions: {
    color: "transparent",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
});

const QRCodeCard = () => {
  const [qrData, setQrData] = useState("https://example.com");
  const qrContainerRef = useRef(null);

  useEffect(() => {
    if (qrContainerRef.current) {
      // Clear existing content before appending QR again
      qrContainerRef.current.innerHTML = "";
      qrCodeInstance.append(qrContainerRef.current);
      qrCodeInstance.update({ data: qrData });
    }
  }, [qrData]);

  const handleDownload = () => {
    qrCodeInstance.download({ extension: "png" });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded bg-white shadow-md max-w-md mx-auto">
      <input
        type="text"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
        placeholder="Enter URL or text"
        className="border border-gray-300 px-3 py-2 rounded w-full"
      />
      <div
        ref={qrContainerRef}
        className="h-56 w-56 bg-white rounded border flex items-center justify-center"
      />
      <button
        onClick={handleDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Download QR
      </button>
    </div>
  );
};

export default QRCodeCard;
