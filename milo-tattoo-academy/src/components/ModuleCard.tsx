'use client';

import { useState } from 'react';
import { ChevronRightIcon, PlayIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ProgressBar from './ProgressBar';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  type: 'video' | 'reading' | 'practice';
}

interface ModuleCardProps {
  title: string;
  description: string;
  icon: string;
  progress: number;
  lessons: Lesson[];
  onLessonClick: (lessonId: string) => void;
}

const ModuleCard = ({ 
  title, 
  description, 
  icon, 
  progress, 
  lessons, 
  onLessonClick 
}: ModuleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'reading':
        return '📚';
      case 'practice':
        return '✍️';
      default:
        return '📖';
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Module Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-2xl shadow-lg">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="touch-button p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
        >
          <ChevronRightIcon 
            className={`h-5 w-5 transition-transform duration-200 ${
              isExpanded ? 'rotate-90' : ''
            }`} 
          />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <ProgressBar progress={progress} size="md" />
      </div>

      {/* Lessons List */}
      {isExpanded && (
        <div className="space-y-2 animate-slide-up">
          <div className="border-t border-white/10 pt-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">
              Lecciones ({lessons.length})
            </h4>
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                onClick={() => onLessonClick(lesson.id)}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 touch-button group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                    {lesson.completed ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-400" />
                    ) : (
                      <span>{getTypeIcon(lesson.type)}</span>
                    )}
                  </div>
                  <div className="text-left">
                    <p className={`text-sm font-medium ${
                      lesson.completed ? 'text-green-400' : 'text-white'
                    }`}>
                      {lesson.title}
                    </p>
                    <p className="text-xs text-gray-400">{lesson.duration}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {lesson.type === 'video' && !lesson.completed && (
                    <PlayIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                  <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Action Button */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <button className="w-full bg-gradient-primary text-white font-semibold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 touch-button">
          {progress === 0 ? 'Comenzar Módulo' : progress === 100 ? 'Revisar' : 'Continuar'}
        </button>
      </div>
    </div>
  );
};

export default ModuleCard;