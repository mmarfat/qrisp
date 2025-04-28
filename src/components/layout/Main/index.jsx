// Custom components
import QRCodeCard from "@/components/custom/QRCodeCard";
import OptionsCard from "@/components/custom/OptionsCard";
import UserInputCard from "@/components/custom/UserInputCard";

const Main = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex flex-col flex-col-reverse gap-4 md:flex-row">
          <UserInputCard />
          <QRCodeCard />
        </div>
        <OptionsCard />
      </div>
    </div>
  )
}

export default Main;