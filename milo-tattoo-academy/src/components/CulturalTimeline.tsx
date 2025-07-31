'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  culture: string;
  image: string;
  significance: string;
}

interface CulturalTimelineProps {
  events: TimelineEvent[];
}

const CulturalTimeline = ({ events }: CulturalTimelineProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  const nextEvent = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  const currentEvent = events[currentIndex];

  return (
    <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold gradient-text">Línea de Tiempo Cultural</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevEvent}
            className="touch-button p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
          <span className="text-sm text-gray-400 px-2">
            {currentIndex + 1} / {events.length}
          </span>
          <button
            onClick={nextEvent}
            className="touch-button p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Main Event Display */}
      <div className="mb-6">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${currentEvent.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-gradient-primary rounded-full text-xs font-medium text-white">
                  {currentEvent.culture}
                </span>
                <span className="text-white font-bold text-lg">
                  {currentEvent.year}
                </span>
              </div>
              <h4 className="text-white font-bold text-xl mb-1">
                {currentEvent.title}
              </h4>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-gray-300 leading-relaxed">
            {currentEvent.description}
          </p>
          <div className="p-4 bg-white/5 rounded-lg border-l-4 border-gradient-primary">
            <h5 className="text-white font-semibold mb-2">Significado Cultural</h5>
            <p className="text-gray-300 text-sm">
              {currentEvent.significance}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="space-y-4">
        <h5 className="text-white font-semibold">Explorar Períodos</h5>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-3 rounded-lg text-left transition-all duration-200 touch-button ${
                index === currentIndex
                  ? 'bg-gradient-primary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              <div className="text-xs font-medium mb-1">{event.culture}</div>
              <div className="text-sm font-bold">{event.year}</div>
              <div className="text-xs opacity-75 truncate">{event.title}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Learning Button */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <button 
          onClick={() => setSelectedEvent(currentEvent)}
          className="w-full bg-gradient-primary text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 touch-button"
        >
          Aprender Más Sobre Esta Época
        </button>
      </div>

      {/* Modal for detailed view */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-gray-900 rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold gradient-text">
                  {selectedEvent.title}
                </h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="touch-button p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedEvent.image})` }}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-gradient-primary rounded-full text-sm font-medium text-white">
                    {selectedEvent.culture}
                  </span>
                  <span className="text-white font-bold">
                    {selectedEvent.year}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {selectedEvent.description}
                </p>
                <div className="p-4 bg-white/5 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">Significado Cultural</h5>
                  <p className="text-gray-300 text-sm">
                    {selectedEvent.significance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CulturalTimeline;