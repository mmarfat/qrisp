// React
import { 
  useState, 
  useEffect 
} from "react";

// Redux
import { useDispatch } from "react-redux";
import { setQrCustomization } from "@/store/slices/qrSlice";

// shadcn
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
import { DOT_OPTIONS, CORNER_OPTIONS, CENTER_OPTIONS } from "@/components/custom/OptionsCard/settings";

const OptionsCard = () => {

  // Redux
  const dispatch = useDispatch();

  // Local states
  const [carouselStates, setCarouselStates] = useState({
    selectedDotStyle: DOT_OPTIONS[0]?.type,
    selectedCornerStyle: CORNER_OPTIONS[0]?.type,
    selectedCenterStyle: CENTER_OPTIONS[0]?.type,
  });

  const initialColor = "#000000";

  const [colors, setColors] = useState({
    dotColor: initialColor,
    cornerColor: initialColor,
    centerColor: initialColor,
  });

  const [inputValues, setInputValues] = useState({
    dotColor: initialColor,
    cornerColor: initialColor,
    centerColor: initialColor,
  });

  const [inputErrors, setInputErrors] = useState({
    dotColor: false,
    cornerColor: false,
    centerColor: false,
  });

  // i18n
  const { t } = useTranslation();

  // Effects
  useEffect(() => {
    setColors({
      dotColor: initialColor,
      cornerColor: initialColor,
      centerColor: initialColor,
    });
  }, [initialColor])

  useEffect(() => {
    const customization = {
      dotOptions: {
        type: carouselStates.selectedDotStyle,
        color: colors.dotColor,
      },
      cornerOptions: {
        type: carouselStates.selectedCornerStyle,
        color: colors.cornerColor,
      },
      centerOptions: {
        type: carouselStates.selectedCenterStyle,
        color: colors.centerColor,
      },
    };
    dispatch(setQrCustomization(customization));
  }, [carouselStates, colors, dispatch]);

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
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {(DOT_OPTIONS || []).map((value) => (
                    <CarouselItem
                      key={value?.type}
                      className="basis-1/3 lg:basis-1/4 xl:basis-1/5"
                      onClick={() => handleCarouselChange("selectedDotStyle", value?.type)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedDotStyle === value?.type ? "border-2 border-primary" : ""} cursor-pointer dark:bg-zinc-900`}>
                          <CardContent className="flex items-center justify-center p-0">
                            {value?.display && <value.display />}
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
                <Label className="text-sm font-medium">{t("options.cornerstyle")}</Label>
                <Popover>
                  <PopoverTrigger>
                    <div className="cursor-pointer">
                      <Palette className="size-6 text-muted-foreground p-1 hover:bg-accent hover:text-accent-foreground rounded-md" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent side="right" className="w-full">
                    <HexColorPicker color={colors.cornerColor} onChange={(color) => handleColorChange("cornerColor", color)} className="w-full!" />
                    <div className="flex flex-col gap-2 mt-4">
                      <Input
                        value={inputValues.cornerColor}
                        onChange={(e) => handleColorInputChange("cornerColor", e.target.value)}
                        className={inputErrors.cornerColor ? "border-red-500 focus-visible:ring-red-500" : ""}
                      />
                      {inputErrors.cornerColor && (
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
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {(CORNER_OPTIONS || []).map((value) => (
                    <CarouselItem
                      key={value?.type}
                      className="basis-1/3 lg:basis-1/4 xl:basis-1/5"
                      onClick={() => handleCarouselChange("selectedCornerStyle", value?.type)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedCornerStyle === value?.type ? "border-2 border-primary" : ""} cursor-pointer dark:bg-zinc-900`}>
                          <CardContent className="flex items-center justify-center p-0">
                            {value?.display && <value.display color={colors.cornerColor} />}
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
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="pl-px pr-px">
                  {(CENTER_OPTIONS || []).map((value) => (
                    <CarouselItem
                      key={value?.type}
                      className="basis-1/3 lg:basis-1/4 xl:basis-1/5"
                      onClick={() => handleCarouselChange("selectedCenterStyle", value?.type)}
                    >
                      <div>
                        <Card className={`flex items-center ${carouselStates.selectedCenterStyle === value?.type ? "border-2 border-primary" : ""} cursor-pointer  dark:bg-zinc-900`}>
                          <CardContent className="flex items-center justify-center p-0">
                            {value?.display && <value.display color={colors.centerColor} />}
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