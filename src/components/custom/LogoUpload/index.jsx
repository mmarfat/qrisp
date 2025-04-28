// React
import React, { 
  useRef,
  useState,
} from "react";

// Redux
import { useDispatch } from "react-redux";
import { setLogoRedux, removeLogo } from "@/store/slices/qrSlice";

// shadcn
import { Button } from "@/components/ui/button"

// i18n
import { useTranslation } from "react-i18next";

// Icons
import {
  X,
  Upload,
  ImageIcon,
} from "lucide-react"

// Utils

const LogoUpload = () => {

  // Redux
  const dispatch = useDispatch();

  // Local states
  const fileInputRef = useRef(null);
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // i18n
  const { t } = useTranslation();

  // Handlers
  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      validateAndProcessFile(file);
    };
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    };
  };

  const handleRemoveLogo = () => {
    setLogo(null);
    dispatch(removeLogo());
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    };
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Utils
  const validateAndProcessFile = (file) => {
    setError(null);

    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      setError(t("options.validlogotype"));
      return;
    };

    if (file.size > 2 * 1024 * 1024) {
      setError(t("options.filetoobig"));
      return;
    };

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result;
      setLogo(result);
      dispatch(setLogoRedux(result));
    }
    reader.readAsDataURL(file);
  }

  return logo ? (
    <>
      <div className="border rounded-lg p-4 text-center relative h-full flex items-center justify-center">
        <div className="absolute top-2 right-2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="h-6 w-6 rounded-full bg-background/80 backdrop-blur-sm"
            aria-label={t("options.removelogo")}
            onClick={handleRemoveLogo}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-2 flex items-center justify-center">
            <img src={logo} alt={t("options.uploadedlogo")} />
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground text-center">{t("options.logowillbecentered")}</p>
    </>
  ) : (
    <>
      <div 
        className={`
          border-2 border-dashed border-border rounded-lg p-6 text-center flex items-center justify-center
          transition-colors flex-1 ${isDragging ? "border-primary bg-primary/5" : "border-border"}`
        }
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">{t("options.dragndrop")}</p>
            <p className="text-xs text-muted-foreground">{t("options.logofiletypes")}</p>
          </div>
          <Button variant="outline" size="sm" className="mt-2" onClick={handleButtonClick}>
            <Upload className="h-4 w-4 mr-2" />
            {t("options.uploadlogo")}
          </Button>
          {error && <p className="text-xs text-destructive mt-2">{error}</p>}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mb-0 text-center">{t("options.recommendedlogosize")}</p>
      <input
        ref={fileInputRef}
        type="file"
        id="logo"
        accept="image/png,image/jpeg,image/svg+xml"
        className="sr-only"
        onChange={handleFileChange}
      />
    </>
  )
}

export default LogoUpload;