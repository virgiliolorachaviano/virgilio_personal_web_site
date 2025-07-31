'use client';

import { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid';

interface VideoPlayerProps {
  title: string;
  thumbnail: string;
  duration: string;
  onComplete?: () => void;
}

const VideoPlayer = ({ title, thumbnail, duration, onComplete }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      
      if (currentProgress >= 95 && onComplete) {
        onComplete();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl overflow-hidden shadow-lg border border-white/10">
      {/* Video Header */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">Duración: {duration}</p>
      </div>

      {/* Video Container */}
      <div className="relative aspect-video bg-black">
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-cover bg-center flex items-center justify-center cursor-pointer group"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={togglePlay}
          >
            <div className="absolute inset-0 bg-black/40" />
            <button className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 touch-button">
              <PlayIcon className="h-8 w-8 text-white ml-1" />
            </button>
          </div>
        )}
        
        <video
          ref={videoRef}
          className={`w-full h-full ${isPlaying ? 'block' : 'hidden'}`}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          playsInline
          webkit-playsinline="true"
        >
          <source src="/api/placeholder-video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Video Controls Overlay */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div 
              className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer touch-button"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-gradient-primary rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={togglePlay}
                  className="touch-button p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  {isPlaying ? (
                    <PauseIcon className="h-5 w-5 text-white" />
                  ) : (
                    <PlayIcon className="h-5 w-5 text-white" />
                  )}
                </button>
                
                <button
                  onClick={toggleMute}
                  className="touch-button p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                >
                  {isMuted ? (
                    <SpeakerXMarkIcon className="h-5 w-5 text-white" />
                  ) : (
                    <SpeakerWaveIcon className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>

              <div className="text-white text-sm">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;