"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import YouTubeGrid from "./youtube-grid"; // Ensure you have this component or replace with a grid of iframes

const ACCENT = "#D4AF37"; // Gold

type ExamplesDialogProps = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  planName: string;
  price: string;
  videoIds: string[];
};

export function ExamplesDialog({
  open,
  onOpenChange,
  planName,
  price,
  videoIds,
}: ExamplesDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] xl:max-w-[1200px] border border-amber-500/20 bg-[#0a0a0a] p-0 text-white shadow-[0_0_50px_rgba(0,0,0,0.7)] sm:rounded-xl">
        {/* Header Section */}
        <div className="border-b border-neutral-800 bg-neutral-900/80 px-6 py-5 backdrop-blur-sm">
          <DialogHeader className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle
                  className="text-2xl font-serif font-medium tracking-wide"
                  style={{ color: ACCENT }}
                >
                  {planName}
                </DialogTitle>
                <DialogDescription className="text-sm text-neutral-400 mt-1">
                  Sample Cinematography & Highlights • Starting at{" "}
                  <span className="text-white">{price}</span>
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Video Grid Area */}
        <div className="max-h-[75vh] overflow-y-auto px-6 py-8 bg-[#050505]">
          {/* Note: Ensure your YouTubeGrid component handles the videoIds array correctly */}
          <YouTubeGrid videoIds={videoIds} />

          <div className="mt-8 text-center">
            <p className="text-xs text-neutral-500 uppercase tracking-widest">
              Real Weddings • Real Emotions
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
