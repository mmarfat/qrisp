// React
import { useState } from "react";

// shadcn
import { 
    Card, 
    CardContent, 
} from "@/components/ui/card";

import { 
    Tabs,
    TabsList, 
    TabsContent, 
    TabsTrigger, 
} from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// Icons
import {
  Link,
  FileText,
  Mail,
  Wifi,
  Wallet,
  Smartphone,
  QrCode,
  ArrowRight,
  Ellipsis,
} from "lucide-react"

// Utils
const tabOptions = [
    { value: "url", label: "URL", icon: Link },
    { value: "text", label: "Text", icon: FileText },
    { value: "email", label: "Email", icon: Mail },
    { value: "crypto", label: "Crypto", icon: Wallet },
    { value: "more", label: "More", icon: Ellipsis },
];

const UserInputCard = () => {

    // Local states
    const [activeTab, setActiveTab] = useState("url")

    return (
        <Card className="border-border text-card-foreground overflow-hidden backdrop-blur-sm bg-card/30 py-0">
          <Tabs 
            defaultValue="url" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-border p-4">
            <TabsList className="grid grid-cols-5 w-full h-auto p-1 bg-muted/50">
                {tabOptions.map(({ value, label, icon: Icon }) => (
                    <TabsTrigger
                        key={value}
                        value={value}
                        className="flex items-center gap-2 py-2.5 dark:data-[state=active]:bg-background dark:data-[state=active]:border-none"
                    >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span className="hidden sm:inline">{label}</span>
                    </TabsTrigger>
                ))}
            </TabsList>
            </div>

            <CardContent className="p-8">
              <TabsContent value="url" className="mt-0">
                <div className="space-y-3">
                  <Label htmlFor="url" className="text-sm font-medium">
                    Website URL
                  </Label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                    <Input
                      id="url"
                      placeholder="https://example.com"
                      className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Enter the full URL including https://</p>
                </div>
              </TabsContent>

              <TabsContent value="text" className="mt-0">
                <div className="space-y-3">
                  <Label htmlFor="text" className="text-sm font-medium">
                    Text Content
                  </Label>
                  <Textarea
                    id="text"
                    placeholder="Enter your text here"
                    className="min-h-[140px] resize-none transition-all focus-visible:ring-offset-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">Any text you want to encode in the QR code</p>
                </div>
              </TabsContent>

              <TabsContent value="email" className="mt-0">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject (Optional)
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Email subject"
                      className="h-11 transition-all focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="body" className="text-sm font-medium">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="body"
                      placeholder="Email body"
                      className="min-h-[100px] resize-none transition-all focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="mt-0 flex-1 flex flex-col">
                  <div className="space-y-5 flex-1">
                    <div className="space-y-3">
                      <Label htmlFor="crypto-amount" className="text-sm font-medium">
                        Amount
                      </Label>
                      <div className="relative">
                        <Wallet className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                        <Input
                          id="crypto-amount"
                          placeholder="0.001"
                          className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="crypto-address" className="text-sm font-medium">
                        Address
                      </Label>
                      <Input
                        id="crypto-address"
                        placeholder="Wallet address"
                        className="h-11 transition-all focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="crypto-message" className="text-sm font-medium">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="crypto-message"
                        placeholder="Transaction message"
                        className="min-h-[100px] resize-none transition-all focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                </TabsContent>

              <TabsContent value="sms" className="mt-0">
                <div className="space-y-5">
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                      <Input
                        id="phone"
                        placeholder="+1234567890"
                        className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your SMS message"
                      className="min-h-[120px] resize-none transition-all focus-visible:ring-offset-2"
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">
                      The message that will be pre-filled when scanning
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="more" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <Wifi className="h-5 w-5" />
                    <span className="text-sm font-medium">WiFi</span>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("sms")}
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <Wallet className="h-5 w-5" />
                    <span className="text-sm font-medium">SMS</span>
                  </Button>
                </div>

                
              </TabsContent>
              {
              activeTab !== "more" ? 
                (
                    <div className="mt-10 flex justify-end">
                        <Button className="relative group overflow-hidden h-12 px-6 rounded-md bg-zinc-900 hover:bg-zinc-800">
                        <span className="relative flex items-center gap-2 text-zinc-50 font-medium">
                            <QrCode className="h-5 w-5" />
                            <span>Generate QR Code</span>
                            <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                        </span>
                        </Button>
                    </div>
                ) : (
                    <div className="mt-10 text-center text-muted-foreground text-sm">Select a QR code type to continue</div>
                )
              }
            </CardContent>
          </Tabs>
        </Card>
    );
};

export default UserInputCard;