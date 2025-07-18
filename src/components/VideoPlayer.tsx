"use client";

import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
  poster?: string;
}

const VideoPlayer = ({ src, title, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video">
      <video
        className="w-full h-full rounded-lg"
        controls
        title={title}
        autoPlay
        muted
        loop
        poster={poster}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={e => {
          const video = e.currentTarget;
          video.volume = 0.5;
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer; 