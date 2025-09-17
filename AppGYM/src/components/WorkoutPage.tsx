import React from 'react';
import type { UserProfile } from '../App';
import './ContentPage.css'; 

interface WorkoutPageProps {
  profile: UserProfile | null;
}

const WorkoutPage: React.FC<WorkoutPageProps> = ({ profile }) => {
  const renderContent = () => {
    if (!profile) return <p>Por favor, completa tu registro para ver un plan de ejercicios.</p>;

    switch (profile.skillLevel) {
      case 'principiante':
        return (
          <div>
            <h3>Plan de Ejercicio: Principiante</h3>
            <p>Enfoque en aprender la técnica correcta y construir una base sólida</p>
            <ul>
              <li><strong>Día 1 (Full Body):</strong> Sentadillas (3x8), Press de Banca (3x8), Remo con Barra (3x8).</li>
              <li><strong>Día 2 (Full Body):</strong> Peso Muerto (3x5), Press Militar (3x8), Dominadas Asistidas (3 al fallo).</li>
              <li><strong>Día 3 (Full Body):</strong> Prensa de Piernas (3x10), Fondos en máquina (3x10), Curl de Bíceps (3x12).</li>
            </ul>
          </div>
        );
      case 'intermedio':
        return (
          <div>
            <h3>Plan de Ejercicio: Intermedio</h3>
            <p>Aumento de la intensidad y el volumen con una rutina dividida para seguir progresando.</p>
            <ul>
              <li><strong>Día 1 (Torso):</strong> Press de Banca, Remo con Barra, Press Militar, Dominadas.</li>
              <li><strong>Día 2 (Pierna):</strong> Sentadillas, Peso Muerto Rumano, Zancadas, Elevación de talones.</li>
              <li><strong>Día 3 (Torso):</strong> Press Inclinado, Remo en T, Elevaciones Laterales, Fondos.</li>
              <li><strong>Día 4 (Pierna):</strong> Prensa, Curl Femoral, Extensiones de Cuádriceps.</li>
            </ul>
          </div>
        );
      case 'avanzado':
        return (
          <div>
            <h3>Plan de Ejercicio: Avanzado</h3>
            <p>Rutina dividida de alta frecuencia para maximizar el estímulo en cada grupo muscular.</p>
            <ul>
              <li><strong>Día 1:</strong> Pecho (Enfoque en volumen e intensidad)</li>
              <li><strong>Día 2:</strong> Espalda (Enfoque en grosor y amplitud)</li>
              <li><strong>Día 3:</strong> Pierna (Enfoque en cuádriceps y femorales)</li>
              <li><strong>Día 4:</strong> Hombros (Las tres cabezas del deltoides)</li>
              <li><strong>Día 5:</strong> Brazos (Bíceps y Tríceps con superseries)</li>
            </ul>
          </div>
        );
      default:
        return <p>No se ha seleccionado un nivel de experiencia en el registro.</p>;
    }
  };

  return <div className="content-page">{renderContent()}</div>;
};

export default WorkoutPage;