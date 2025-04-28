// Custom components
import QRCodeCard from "@/components/custom/QRCodeCard";
import OptionsCard from "@/components/custom/OptionsCard";
import UserInputCard from "@/components/custom/UserInputCard";

// i18n
import { useTranslation } from "react-i18next";

const Main = () => {

  const { t } = useTranslation();

  return (
    <main className="flex flex-col items-center justify-center gap-4 md:gap-10">
      <div className="flex flex-col items-center justify-center text-center gap-4 hidden md:flex">
        <h1 className="text-4xl font-bold">{t("banner.header")}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">{t("banner.subheader")}</p>
      </div>
      <div className="w-full">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col flex-col-reverse gap-4 md:flex-row">
            <UserInputCard />
            <QRCodeCard />
          </div>
          <OptionsCard />
        </div>
      </div>
    </main>
  )
}

export default Main;