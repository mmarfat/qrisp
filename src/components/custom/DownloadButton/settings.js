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
    label: "PDF",
    value: "pdf",
    icon: FileText,
    desc: "qrpreview.document"
  },
  {
    label: "EPS",
    value: "eps",
    icon: FileJson,
    desc: "qrpreview.vector"
  },
]