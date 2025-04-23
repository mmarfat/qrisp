// qrgen.js
import QRCodeStyling from "qr-code-styling";

// Function to generate QR code with customization options
export function generateQR({
  data = "https://example.com",
  width = 300,
  height = 300,
  image = "",
  imageMargin = 10,
  dotColor = "#000000",
  backgroundColor = "#ffffff",
  type = "canvas", // 'svg' or 'canvas'
  elementId = "qr", // DOM element ID to append QR to
}) {
  const qrCode = new QRCodeStyling({
    width,
    height,
    data,
    image,
    type,
    dotsOptions: {
      color: dotColor,
      type: "rounded"
    },
    backgroundOptions: {
      color: backgroundColor
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: imageMargin
    }
  });

  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  // Clear old content
  element.innerHTML = "";

  // Append new QR
  qrCode.append(element);

  return qrCode;
}
