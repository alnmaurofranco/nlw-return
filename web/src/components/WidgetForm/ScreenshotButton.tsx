import { Camera, Trash } from "phosphor-react";

import html2canvas from 'html2canvas'
import { useState } from "react";
import { Loading } from '../Loading';

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null
}

export function ScreenshotButton({ onScreenshotTook, screenshot }: ScreenshotButtonProps) {
  const [isTakeScreenshot, setIsTakeScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakeScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTook(base64Image)
    setIsTakeScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTook(null)}
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: "right bottom",
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  }

  return (
    <button
      onClick={handleTakeScreenshot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-200"
    >
      {isTakeScreenshot ? <Loading /> : <Camera className="w-6 h-6 text-zinc-100" />}
    </button>
  )
}
