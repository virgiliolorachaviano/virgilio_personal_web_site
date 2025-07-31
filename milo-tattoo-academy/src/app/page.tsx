'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import ModuleCard from '@/components/ModuleCard';
import VideoPlayer from '@/components/VideoPlayer';
import CulturalTimeline from '@/components/CulturalTimeline';
import ProgressBar from '@/components/ProgressBar';

// Sample data
const sampleLessons = {
  bitacora: [
    { id: '1', title: 'Configuración de tu bitácora', duration: '5 min', completed: true, type: 'video' as const },
    { id: '2', title: 'Primeros trazos y bocetos', duration: '15 min', completed: true, type: 'practice' as const },
    { id: '3', title: 'Documentar tu progreso', duration: '10 min', completed: false, type: 'reading' as const },
    { id: '4', title: 'Reflexión y autoevaluación', duration: '8 min', completed: false, type: 'practice' as const },
  ],
  historia: [
    { id: '1', title: 'Orígenes ancestrales del tatuaje', duration: '12 min', completed: true, type: 'video' as const },
    { id: '2', title: 'Tatuajes en culturas antiguas', duration: '18 min', completed: false, type: 'reading' as const },
    { id: '3', title: 'Evolución moderna del arte', duration: '20 min', completed: false, type: 'video' as const },
    { id: '4', title: 'Significados culturales', duration: '15 min', completed: false, type: 'reading' as const },
  ],
  tecnicas: [
    { id: '1', title: 'Fundamentos del sombreado', duration: '25 min', completed: false, type: 'video' as const },
    { id: '2', title: 'Técnicas de línea', duration: '20 min', completed: false, type: 'practice' as const },
    { id: '3', title: 'Uso del color', duration: '30 min', completed: false, type: 'video' as const },
    { id: '4', title: 'Práctica supervisada', duration: '45 min', completed: false, type: 'practice' as const },
  ],
  diseno: [
    { id: '1', title: 'Principios de composición', duration: '22 min', completed: false, type: 'video' as const },
    { id: '2', title: 'Creando bocetos efectivos', duration: '18 min', completed: false, type: 'practice' as const },
    { id: '3', title: 'Adaptación al cuerpo', duration: '25 min', completed: false, type: 'video' as const },
    { id: '4', title: 'Portfolio de diseños', duration: '35 min', completed: false, type: 'practice' as const },
  ],
  comunidad: [
    { id: '1', title: 'Ética profesional', duration: '15 min', completed: false, type: 'reading' as const },
    { id: '2', title: 'Construyendo tu red', duration: '12 min', completed: false, type: 'video' as const },
    { id: '3', title: 'Compartir tu trabajo', duration: '10 min', completed: false, type: 'practice' as const },
    { id: '4', title: 'Mentoría y crecimiento', duration: '20 min', completed: false, type: 'reading' as const },
  ],
};

const timelineEvents = [
  {
    id: '1',
    year: '3300 a.C.',
    title: 'Ötzi el Hombre de Hielo',
    description: 'El tatuaje más antiguo conocido, encontrado en una momia natural en los Alpes.',
    culture: 'Europa Antigua',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    significance: 'Representa el uso terapéutico y ritual más temprano del tatuaje en la humanidad.',
  },
  {
    id: '2',
    year: '2000 a.C.',
    title: 'Tatuajes Egipcios',
    description: 'Mujeres egipcias usaban tatuajes con propósitos rituales y de protección.',
    culture: 'Antiguo Egipto',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73d0e?w=800&h=600&fit=crop',
    significance: 'Los tatuajes estaban asociados con la fertilidad y la protección divina.',
  },
  {
    id: '3',
    year: '1000 a.C.',
    title: 'Arte Corporal Polinesio',
    description: 'Desarrollo de complejos sistemas de tatuajes tribales con significados profundos.',
    culture: 'Polinesia',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    significance: 'Cada diseño cuenta una historia personal y conecta con los ancestros.',
  },
  {
    id: '4',
    year: '1891',
    title: 'Primera Máquina Eléctrica',
    description: 'Samuel O\'Reilly patenta la primera máquina de tatuar eléctrica.',
    culture: 'Estados Unidos',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
    significance: 'Revoluciona la industria y hace los tatuajes más accesibles y precisos.',
  },
  {
    id: '5',
    year: '1970-presente',
    title: 'Renacimiento Moderno',
    description: 'El tatuaje se convierte en una forma de arte reconocida mundialmente.',
    culture: 'Global',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop',
    significance: 'Transformación de subcultura a expresión artística mainstream.',
  },
];

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handleLessonClick = (lessonId: string) => {
    setSelectedLesson(lessonId);
    setShowVideo(true);
  };

  const calculateProgress = (lessons: any[]) => {
    const completed = lessons.filter(lesson => lesson.completed).length;
    return (completed / lessons.length) * 100;
  };

  const overallProgress = () => {
    const allLessons = Object.values(sampleLessons).flat();
    return calculateProgress(allLessons);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Bienvenido a{' '}
              <span className="gradient-text">Milo Tattoo Academy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Descubre el arte milenario del tatuaje a través de un viaje educativo 
              que combina técnica, historia y expresión personal.
            </p>
          </div>
          
          {/* Overall Progress */}
          <div className="max-w-md mx-auto mb-8">
            <ProgressBar 
              progress={overallProgress()} 
              label="Progreso General" 
              size="lg"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-primary text-white font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity duration-200 touch-button">
              Continuar Aprendiendo
            </button>
            <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors duration-200 touch-button">
              Ver Mi Progreso
            </button>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section id="modules" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Módulos de Aprendizaje
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bitácora Personal */}
            <div id="bitacora">
              <ModuleCard
                title="Bitácora Personal"
                description="Documenta tu viaje de aprendizaje y desarrollo artístico"
                icon="📖"
                progress={calculateProgress(sampleLessons.bitacora)}
                lessons={sampleLessons.bitacora}
                onLessonClick={handleLessonClick}
              />
            </div>

            {/* Historia & Cultura */}
            <div id="historia">
              <ModuleCard
                title="Historia & Cultura"
                description="Explora los orígenes y significados culturales del tatuaje"
                icon="🏛️"
                progress={calculateProgress(sampleLessons.historia)}
                lessons={sampleLessons.historia}
                onLessonClick={handleLessonClick}
              />
            </div>

            {/* Técnicas */}
            <div id="tecnicas">
              <ModuleCard
                title="Técnicas"
                description="Domina las técnicas fundamentales del arte del tatuaje"
                icon="🎨"
                progress={calculateProgress(sampleLessons.tecnicas)}
                lessons={sampleLessons.tecnicas}
                onLessonClick={handleLessonClick}
              />
            </div>

            {/* Diseño */}
            <div id="diseno">
              <ModuleCard
                title="Diseño"
                description="Desarrolla tu estilo único y habilidades de composición"
                icon="✏️"
                progress={calculateProgress(sampleLessons.diseno)}
                lessons={sampleLessons.diseno}
                onLessonClick={handleLessonClick}
              />
            </div>

            {/* Comunidad */}
            <div id="comunidad" className="lg:col-span-2">
              <ModuleCard
                title="Comunidad"
                description="Conecta con otros artistas y construye tu red profesional"
                icon="👥"
                progress={calculateProgress(sampleLessons.comunidad)}
                lessons={sampleLessons.comunidad}
                onLessonClick={handleLessonClick}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Timeline Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <CulturalTimeline events={timelineEvents} />
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Video Destacado
          </h2>
          <VideoPlayer
            title="Introducción al Arte del Tatuaje"
            thumbnail="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop"
            duration="15:30"
            onComplete={() => console.log('Video completed!')}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-gray-300">Lecciones</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-gray-300">Módulos</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-gray-300">Estudiantes</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">4.9★</div>
              <div className="text-gray-300">Valoración</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="max-w-4xl w-full">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => {
                  setShowVideo(false);
                  setSelectedLesson(null);
                }}
                className="touch-button p-3 rounded-lg text-white hover:bg-white/10 transition-colors duration-200 text-2xl"
              >
                ✕
              </button>
            </div>
            <VideoPlayer
              title="Lección en Progreso"
              thumbnail="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop"
              duration="12:45"
              onComplete={() => {
                setShowVideo(false);
                setSelectedLesson(null);
              }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold gradient-text">Milo Tattoo Academy</span>
          </div>
          <p className="text-gray-400">
            © 2024 Milo Tattoo Academy. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
