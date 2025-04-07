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
  MessageSquare,
  Wifi,
  Wallet,
  FileIcon,
  Music,
  AppWindow,
  ImageIcon,
  Smartphone,
  QrCode,
  ArrowRight,
} from "lucide-react"

const UserInputCard = () => {

    // Local states
    const [activeTab, setActiveTab] = useState("url")

    return (
        <Card className="border-border overflow-hidden backdrop-blur-sm bg-card/30 py-0">
          <Tabs 
            defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-border p-4">
              <TabsList className="grid grid-cols-5 w-full h-auto p-1 bg-muted/50">
                <TabsTrigger value="url" className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background">
                  <Link className="h-4 w-4" />
                  <span className="hidden sm:inline">URL</span>
                </TabsTrigger>
                <TabsTrigger value="text" className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background">
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Text</span>
                </TabsTrigger>
                <TabsTrigger value="email" className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background">
                  <Mail className="h-4 w-4" />
                  <span className="hidden sm:inline">Email</span>
                </TabsTrigger>
                <TabsTrigger value="sms" className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background">
                  <MessageSquare className="h-4 w-4" />
                  <span className="hidden sm:inline">SMS</span>
                </TabsTrigger>
                <TabsTrigger value="more" className="flex items-center gap-2 py-2.5 data-[state=active]:bg-background">
                  <span className="hidden sm:inline">More</span>
                  <span className="sm:hidden">+</span>
                </TabsTrigger>
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

                <div className="mt-10 flex justify-end">
                  <Button className="relative group overflow-hidden h-12 px-6 rounded-md bg-zinc-900 hover:bg-zinc-800">
                    <span className="relative flex items-center gap-2 text-zinc-50 font-medium">
                      <QrCode className="h-5 w-5" />
                      <span>Generate QR Code</span>
                      <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </span>
                  </Button>
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

                <div className="mt-10 flex justify-end">
                  <Button className="relative group overflow-hidden h-12 px-6 rounded-md bg-zinc-900 hover:bg-zinc-800">
                    <span className="relative flex items-center gap-2 text-zinc-50 font-medium">
                      <QrCode className="h-5 w-5" />
                      <span>Generate QR Code</span>
                      <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </span>
                  </Button>
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

                <div className="mt-10 flex justify-end">
                  <Button className="relative group overflow-hidden h-12 px-6 rounded-md bg-zinc-900 hover:bg-zinc-800">
                    <span className="relative flex items-center gap-2 text-zinc-50 font-medium">
                      <QrCode className="h-5 w-5" />
                      <span>Generate QR Code</span>
                      <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </span>
                  </Button>
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

                <div className="mt-10 flex justify-end">
                  <Button className="relative group overflow-hidden h-12 px-6 rounded-md bg-zinc-900 hover:bg-zinc-800">
                    <span className="relative flex items-center gap-2 text-zinc-50 font-medium">
                      <QrCode className="h-5 w-5" />
                      <span>Generate QR Code</span>
                      <ArrowRight className="h-5 w-5 ml-1 transition-transform duration-300 transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="more" className="mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <Wifi className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">WiFi</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <Wallet className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">Crypto</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <FileIcon className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">PDF</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <Music className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">MP3</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <AppWindow className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">App Store</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
                  >
                    <ImageIcon className="h-5 w-5 text-zinc-200" />
                    <span className="text-sm font-medium">Image</span>
                  </Button>
                </div>

                <div className="mt-10 text-center text-muted-foreground text-sm">Select a QR code type to continue</div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
    );
};

export default UserInputCard;