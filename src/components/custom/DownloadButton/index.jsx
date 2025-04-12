// React
import { useState } from "react";

// shadcn
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icons
import { Download } from "lucide-react";

// Utils
import { DOWNLOAD_OPTIONS } from "@/components/custom/DownloadButton/settings";

const DownloadButton = ({ disabled = false }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleDownload = (format) => {
		setIsOpen(false)

		console.log(`Downloading in ${format} format`)
	}

	return (
		<DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
			<DropdownMenuTrigger asChild className="max-w-56">
				<Button variant="default" size="sm" disabled={disabled}>
					<Download className="h-4 w-4" />
					Download
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-(--radix-dropdown-menu-trigger-width)">
				{DOWNLOAD_OPTIONS.map(({ value, label, icon: Icon, desc }) => (
					<DropdownMenuItem key={value} onClick={() => handleDownload(value)}>
						{Icon && <Icon className="h-4 w-4" />}
						{label}
						<span className="ml-auto text-muted-foreground text-xs">{desc}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
};

export default DownloadButton;
