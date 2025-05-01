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
    desc: "qrpreview.image"
  },
  {
    label: "SVG",
    value: "svg",
    icon: FileType,
    desc: "qrpreview.vector"
  },
  {
    label: "JPG",
    value: "jpg",
    icon: FileImage,
    desc: "qrpreview.image"
  },
  {
    label: "WEBP",
    value: "webp",
    icon: FileImage,
    desc: "qrpreview.image"
  },
]