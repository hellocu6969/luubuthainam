import { React, useEffect, useState } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, ExternalLink } from "lucide-react";

const Nhac = "/nhac.mp3";
const trackUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Placeholder

const useAudio = url => {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio(url) : null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => { setPlaying(!playing); };

  const replay = () => {
    if (audio) {
      audio.currentTime = 0;
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (audio) {
      audio.volume = 0.7;
      playing ? audio.play() : audio.pause();
    }
  }, [playing, audio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }
  }, [audio]);

  return [playing, toggle, replay];
};

const MusicPlayer = () => {
  const [playing, toggle, replay] = useAudio(Nhac);

  return (
    <Card className="mb-6 overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 bg-muted">
          <img
            src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png"
            alt="Music Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <Button
              size="icon"
              variant="secondary"
              className="h-8 w-8 rounded-full bg-white/90 hover:bg-white text-black shadow-sm"
              onClick={toggle}
            >
              {playing ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4 ml-0.5" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold truncate pr-2">Lưu bút ngày xanh</h3>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" className="h-8 w-8" onClick={replay}>
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => window.open(trackUrl, "_blank")}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-muted-foreground truncate">Unknown Artist</p>
        </div>
      </div>
    </Card>
  );
};

export default MusicPlayer;

