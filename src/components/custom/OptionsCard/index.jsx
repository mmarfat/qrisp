// React
import { useState } from "react";

// shadcn
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import {
  Upload,
  Palette,
  Settings,
  ImageIcon,
} from "lucide-react"


const OptionsCard = () => {

  // Local states
  const [carouselStates, setCarouselStates] = useState({
    selectedDotStyle: 0,
    selectedBorderStyle: 0,
    selectedCenterStyle: 0,
  });

  const { t } = useTranslation();

  // Handlers
  const handleCarouselChange = (type, index) => {
    setCarouselStates((prevState) => ({
      ...prevState,
      [type]: index,
    }));
  };

  return (
    <Card className="border-border text-card-foreground backdrop-blur-sm bg-card/30 py-0 gap-2">
      <div className="flex items-center gap-2 border-b border-border p-4 font-medium text-sm tracking-tight">
        <Settings className="h-4 w-4" />
        {t("options.options")}
      </div>
      <CardContent className="p-4 pt-2 space-y-6">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex-1 flex flex-col gap-4">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">{t("options.dotstyle")}</Label>
                <Button variant="ghost" size="icon" className="size-6" aria-label="Change dot color">
                  <Palette className="text-muted-foreground" />
                </Button>
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
                            <span className="text-2xl font-semibold">{index + 1}</span>
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
                <Button variant="ghost" size="icon" className="size-6" aria-label="Change border color">
                  <Palette className="text-muted-foreground" />
                </Button>
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
                            <span className="text-2xl font-semibold">{index + 1}</span>
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
                <Button variant="ghost" size="icon" className="size-6" aria-label="Change center color">
                  <Palette className="text-muted-foreground" />
                </Button>
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
                            <span className="text-2xl font-semibold">{index + 1}</span>
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

          <div className="space-y-3 flex flex-col">
            <Label htmlFor="logo" className="text-sm font-medium">
              {t("options.logo")}
            </Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{t("options.dragndrop")}</p>
                  <p className="text-xs text-muted-foreground">{t("options.logofiletypes")}</p>
                </div>
                <Button variant="outline" size="sm" className="mt-2">
                  <Upload className="h-4 w-4 mr-2" />
                  {t("options.uploadlogo")}
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">{t("options.recommendedlogosize")}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OptionsCard;