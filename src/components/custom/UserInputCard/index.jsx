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

import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

// i18n
import { useTranslation } from "react-i18next";

// Icons
import {
  Link,
  Mail,
  Wifi,
  Wallet,
  Smartphone,
} from "lucide-react"

// Utils
import { TAB_OPTIONS } from "@/components/custom/UserInputCard/settings";

const UserInputCard = () => {

  // Local states
  const [activeTab, setActiveTab] = useState("url")

  const { t } = useTranslation();

  return (
    <Card className="border-border text-card-foreground overflow-hidden backdrop-blur-sm bg-card/30 py-0 flex-1">
      <Tabs
        defaultValue="url" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b border-border">
          <TabsList className="grid grid-cols-5 w-full h-auto p-2 bg-background">
            {TAB_OPTIONS.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center gap-2 py-2.5 dark:data-[state=active]:bg-background dark:data-[state=active]:border-border"
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span className="hidden md:inline">{t(label)}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <CardContent className="p-4 pt-2">
          <TabsContent value="url" className="mt-0">
            <div className="space-y-3">
              <Label htmlFor="url" className="text-sm font-medium">
                {t("userinput.url.websiteurl")}
              </Label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                <Input
                  id="url"
                  placeholder={t("userinput.url.exampleurl")}
                  className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">{t("userinput.url.helpertext")}</p>
            </div>
          </TabsContent>

          <TabsContent value="text" className="mt-0">
            <div className="space-y-3">
              <Label htmlFor="text" className="text-sm font-medium">
                {t("userinput.text.textcontent")}
              </Label>
              <Textarea
                id="text"
                placeholder={t("userinput.text.exampletext")}
                className="min-h-[140px] resize-none transition-all focus-visible:ring-offset-2"
              />
              <p className="text-xs text-muted-foreground mt-1.5">{t("userinput.text.helpertext")}</p>
            </div>
          </TabsContent>

          <TabsContent value="email" className="mt-0">
            <div className="space-y-5">
              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-medium">
                  {t("userinput.email.emailaddress")}
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("userinput.email.exampleemail")}
                    className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-sm font-medium">
                  {t("userinput.email.subject")}
                </Label>
                <Input
                  id="subject"
                  placeholder={t("userinput.email.examplesubject")}
                  className="h-11 transition-all focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="body" className="text-sm font-medium">
                  {t("userinput.email.message")}
                </Label>
                <Textarea
                  id="body"
                  placeholder={t("userinput.email.examplemessage")}
                  className="min-h-[100px] resize-none transition-all focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crypto" className="mt-0 flex-1 flex flex-col">
            <div className="space-y-5 flex-1">
              <div className="space-y-3">
                <Label htmlFor="crypto-amount" className="text-sm font-medium">
                  {t("userinput.crypto.amount")}
                </Label>
                <div className="relative">
                  <Wallet className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                  <Input
                    id="crypto-amount"
                    placeholder={t("userinput.crypto.exampleamount")}
                    className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="crypto-address" className="text-sm font-medium">
                  {t("userinput.crypto.address")}
                </Label>
                <Input
                  id="crypto-address"
                  placeholder={t("userinput.crypto.exampleaddress")}
                  className="h-11 transition-all focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="crypto-message" className="text-sm font-medium">
                  {t("userinput.crypto.message")}
                </Label>
                <Textarea
                  id="crypto-message"
                  placeholder={t("userinput.crypto.examplemessage")}
                  className="min-h-[100px] resize-none transition-all focus-visible:ring-offset-2"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="wifi" className="mt-0 flex-1 flex flex-col">
            <div className="space-y-5 flex-1">
              <div className="space-y-3">
                <Label htmlFor="wifi-ssid" className="text-sm font-medium">
                  {t("userinput.wifi.networkname")}
                </Label>
                <Input
                  id="wifi-ssid"
                  placeholder={t("userinput.wifi.networkplaceholder")}
                  className="h-11 transition-all focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="wifi-password" className="text-sm font-medium">
                  {t("userinput.wifi.password")}
                </Label>
                <Input
                  id="wifi-password"
                  type="password"
                  placeholder={t("userinput.wifi.passwordplaceholder")}
                  className="h-11 transition-all focus-visible:ring-offset-2"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  {t("userinput.wifi.encryption")}
                </Label>
                <Select defaultValue="WPA">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue value="WPA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="WPA">{t("userinput.wifi.wpa")}</SelectItem>
                    <SelectItem value="WEP">{t("userinput.wifi.wep")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  id="wifi-hidden"
                  className="h-4 w-4 rounded border-gray-300 text-primary accent-primary"
                />
                <Label htmlFor="wifi-hidden" className="text-sm font-medium">
                  {t("userinput.wifi.hidden")}
                </Label>
              </div>
              </div>
          </TabsContent>

          <TabsContent value="sms" className="mt-0">
            <div className="space-y-5">
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-sm font-medium">
                  {t("userinput.sms.phonenumber")}
                </Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground -translate-y-1/2" />
                  <Input
                    id="phone"
                    placeholder={t("userinput.sms.examplephone")}
                    className="pl-9 h-11 transition-all focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-medium">
                  {t("userinput.sms.message")}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t("userinput.sms.examplemessage")}
                  className="min-h-[120px] resize-none transition-all focus-visible:ring-offset-2"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  {t("userinput.sms.messagehelper")}
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="more" className="mt-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Button
                variant="outline"
                onClick={() => setActiveTab("wifi")}
                className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
              >
                <Wifi className="h-5 w-5" />
                <span className="text-sm font-medium">{t("tabs.taboptions.wifi")}</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveTab("sms")}
                className="h-auto flex-col py-7 px-2 gap-3 justify-center items-center border-border hover:bg-accent/40 hover:border-border transition-all"
              >
                <Wallet className="h-5 w-5" />
                <span className="text-sm font-medium">{t("tabs.taboptions.sms")}</span>
              </Button>
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default UserInputCard;