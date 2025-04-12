import QRCodeCard from "@/components/custom/QRCodeCard";
import OptionsCard from "@/components/custom/OptionsCard";
import UserInputCard from "@/components/custom/UserInputCard";

const Main = () => {

    return (
        <main className="flex flex-col items-center justify-center gap-4 md:gap-10">
            {/* Google ad spot */}
            <div className="w-full flex items-center justify-center border border-border/40 bg-card/30 backdrop-blur-sm p-8 rounded-md">
                <p>Google advertisement</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4 hidden md:block">
                <h1 className="text-4xl font-bold">Generate QR Codes in Seconds</h1>
                <p className="text-lg text-muted-foreground max-w-2xl">Create custom QR codes for URLs, text, emails, WiFi networks, and more with our modern, easy-to-use generator.</p>
            </div>
            <div className="w-full">
                <div className="flex flex-col justify-center gap-4">
                    <div className="flex flex-col flex-col-reverse gap-4 md:flex-row md:flex-row">
                        <UserInputCard />
                        <QRCodeCard />
                    </div>
                    <OptionsCard />
                </div>
            </div>
            {/* Google ad spot */}
            <div className="w-full flex items-center justify-center border border-border/40 bg-card/30 backdrop-blur-sm p-8 rounded-md">
                <p>Google advertisement</p>
            </div>
        </main>
    )
}

export default Main;