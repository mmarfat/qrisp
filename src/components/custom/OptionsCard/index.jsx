// React
import { 
  useState, 
  useEffect 
} from "react";

// shadcn
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Components
import LogoUpload from "@/components/custom/LogoUpload";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import {
  Palette,
  Settings,
} from "lucide-react"

// Utils
import { HexColorPicker } from "react-colorful";
import { DOT_OPTIONS,  } from "./settings";


const OptionsCard = () => {

  // Theme
  const { resolvedTheme } = useTheme();

  // Local states
  const [carouselStates, setCarouselStates] = useState({
    selectedDotStyle: 0,
    selectedBorderStyle: 0,
    selectedCenterStyle: 0,
  });

  const initialColor = resolvedTheme === "dark" ? "#ffffff" : "#000000";

  const [colors, setColors] = useState({
    dotColor: initialColor,
    borderColor: initialColor,
    centerColor: initialColor,
  });

  const [inputValues, setInputValues] = useState({
    dotColor: initialColor,
    borderColor: initialColor,
    centerColor: initialColor,
  });

  const [inputErrors, setInputErrors] = useState({
    dotColor: false,
    borderColor: false,
    centerColor: false,
  });

  // i18n
  const { t } = useTranslation();

  // Effects
  useEffect(() => {
    setColors({
      dotColor: initialColor,
      borderColor: initialColor,
      centerColor: initialColor,
    });
  }, [initialColor])

  // Handlers
  const handleCarouselChange = (type, index) => {
    setCarouselStates((prevState) => ({
      ...prevState,
      [type]: index,
    }));
  };

  const handleColorChange = (colorType, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [colorType]: color,
    }));
    
    setInputValues((prevValues) => ({
      ...prevValues,
      [colorType]: color,
    }));

    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [colorType]: false,
    }));
  };

  const handleColorInputChange = (colorType, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [colorType]: value,
    }));
    
    const hexColorRegex = /^#[0-9A-Fa-f]{6}$/i;
    if (hexColorRegex.test(value)) {
      setColors((prevColors) => ({
        ...prevColors,
        [colorType]: value,
      }));
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [colorType]: false,
      }));
    } else {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        [colorType]: true,
      }));
    }
  };

  return (
    <Card className="border-border text-card-foreground backdrop-blur-sm bg-card/30 py-0 gap-2">
      <div className="flex items-center gap-2 border-b border-border p-4 font-medium text-sm tracking-tight">
        <Settings className="h-4 w-4" />
        {t("options.options")}
      </div>
      <CardContent className="p-4 pt-2 space-y-6">
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="flex-2 flex flex-col gap-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">{t("options.dotstyle")}</Label>
                <Popover>
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <Palette className="size-6 text-muted-foreground p-1 hover:bg-accent hover:text-accent-foreground rounded-md" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-full">
                    <HexColorPicker color={colors.dotColor} onChange={(color) => handleColorChange("dotColor", color)} className="w-full!" />
                    <div className="flex flex-col gap-2 mt-4">
                      <Input
                        value={inputValues.dotColor}
                        onChange={(e) => handleColorInputChange("dotColor", e.target.value)}
                        className={inputErrors.dotColor ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {inputErrors.dotColor && (
                        <p className="text-red-500 text-xs">
                          {t("colorpicker.invalidformat")}
                        </p>
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                      onClick={() => handleCarouselChange("selectedDotStyle", index)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedDotStyle === index ? "border-2 border-primary" : ""} cursor-pointer`}>
                          <CardContent className="flex items-center justify-center h-8 w-8">
                            <span 
                              className="text-2xl font-semibold"
                              style={{ color: colors?.dotColor ?? 'inherit' }}
                            >
                              {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="disabled:pointer-events-auto left-4" />
                <CarouselNext className="disabled:pointer-events-auto right-4" />
              </Carousel>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">{t("options.borderstyle")}</Label>
                <Popover>
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <Palette className="size-6 text-muted-foreground p-1 hover:bg-accent hover:text-accent-foreground rounded-md" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-full">
                    <HexColorPicker color={colors.borderColor} onChange={(color) => handleColorChange("borderColor", color)} className="w-full!" />
                    <div className="flex flex-col gap-2 mt-4">
                      <Input
                        value={inputValues.borderColor}
                        onChange={(e) => handleColorInputChange("borderColor", e.target.value)}
                        className={inputErrors.borderColor ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {inputErrors.borderColor && (
                        <p className="text-red-500 text-xs">
                          {t("colorpicker.invalidformat")}
                        </p>
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                      onClick={() => handleCarouselChange("selectedBorderStyle", index)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedBorderStyle === index ? "border-2 border-primary" : ""} cursor-pointer`}>
                          <CardContent className="flex items-center justify-center h-8 w-8">
                          <span 
                            className="text-2xl font-semibold"
                            style={{ color: colors?.borderColor ?? 'inherit' }}
                          >
                            {index + 1}
                          </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="disabled:pointer-events-auto left-4" />
                <CarouselNext className="disabled:pointer-events-auto right-4" />
              </Carousel>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">{t("options.centerstyle")}</Label>
                <Popover>
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <Palette className="size-6 text-muted-foreground p-1 hover:bg-accent hover:text-accent-foreground rounded-md" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-full">
                    <HexColorPicker color={colors.centerColor} onChange={(color) => handleColorChange("centerColor", color)} className="w-full!" />
                    <div className="flex flex-col gap-2 mt-4">
                      <Input
                        value={inputValues.centerColor}
                        onChange={(e) => handleColorInputChange("centerColor", e.target.value)}
                        className={inputErrors.centerColor ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {inputErrors.centerColor && (
                        <p className="text-red-500 text-xs">
                          {t("colorpicker.invalidformat")}
                        </p>
                      )}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                      onClick={() => handleCarouselChange("selectedCenterStyle", index)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedCenterStyle === index ? "border-2 border-primary" : ""} cursor-pointer`}>
                          <CardContent className="flex items-center justify-center h-8 w-8">
                          <span 
                            className="text-2xl font-semibold"
                            style={{ color: colors?.centerColor ?? 'inherit' }}
                          >
                            {index + 1}
                          </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="disabled:pointer-events-auto left-4" />
                <CarouselNext className="disabled:pointer-events-auto right-4" />
              </Carousel>
            </div>
          </div>

          <div className="space-y-3 flex flex-col flex-1">
            <Label htmlFor="logo" className="text-sm font-medium mb-[.5rem]">
              {t("options.logo")}
            </Label>
            <LogoUpload />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptionsCard;