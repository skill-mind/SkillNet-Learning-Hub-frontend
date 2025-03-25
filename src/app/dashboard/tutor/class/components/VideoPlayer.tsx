import { Play, SkipBack, SkipForward } from "lucide-react";

interface VideoPlayerProps {
  thumbnailUrl?: string;
}

export const VideoPlayer = ({ thumbnailUrl }: VideoPlayerProps) => {
  return (
    <div className="relative aspect-video bg-black">
      {thumbnailUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
        />
      )}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-gray-200 transition">
            <SkipBack size={32} />
          </button>
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition">
            <Play size={32} className="text-black ml-1" />
          </button>
          <button className="text-white hover:text-gray-200 transition">
            <SkipForward size={32} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
        <div className="h-full w-1/3 bg-white" />
      </div>
    </div>
  );
};
