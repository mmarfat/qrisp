import {
	FileJson,
	FileText,
	FileType,
	FileImage,
} from "lucide-react";

export const DOWNLOAD_OPTIONS = [
    {
        label: "PNG",
        value: "png",
        icon: FileImage,
        desc: "Image"
    },
    {
        label: "SVG",
        value: "svg",
        icon: FileType,
        desc: "Vector"
    },
    {
        label: "JPG",
        value: "jpg",
        icon: FileImage,
        desc: "Image"
    },
    {
        label: "PDF",
        value: "pdf",
        icon: FileText,
        desc: "Document"
    },
    {
        label: "EPS",
        value: "eps",
        icon: FileJson,
        desc: "Vector"
    },
]