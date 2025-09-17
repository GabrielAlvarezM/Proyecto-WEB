import React from 'react';
import type { UserProfile } from '../App';
import './ContentPage.css';

interface DietPageProps {
  profile: UserProfile | null;
}

const DietPage: React.FC<DietPageProps> = ({ profile }) => {
  const renderContent = () => {
    if (!profile) return <p>Por favor, completa tu registro para ver una dieta sugerida.</p>;

    switch (profile.skillLevel) {
      case 'principiante':
        return (
          <div>
            <h3>Dieta Sugerida: Principiante</h3>
            <p>Una dieta balanceada y fácil de seguir, enfocada en crear hábitos saludables sin contar calorías de forma estricta.</p>
            <ul>
              <li><strong>Proteínas:</strong> Asegura una fuente en cada comida (Pollo, pescado, huevos, legumbres).</li>
              <li><strong>Carbohidratos:</strong> Prioriza los complejos (Arroz integral, avena, patatas).</li>
              <li><strong>Grasas:</strong> No temas a las grasas saludables (Aguacate, nueces, aceite de oliva).</li>
            </ul>
          </div>
        );
      case 'intermedio':
        return (
          <div>
            <h3>Dieta Sugerida: Intermedio</h3>
            <p>Mayor control sobre las calorías y macronutrientes para optimizar la composición corporal. Considera usar una app para contar macros.</p>
            <ul>
              <li><strong>Pre-entreno:</strong> Carbohidratos de rápida absorción como una fruta o un poco de miel.</li>
              <li><strong>Post-entreno:</strong> Un batido de proteína es ideal para una rápida recuperación.</li>
              <li><strong>Hidratación:</strong> Es clave. Bebe suficiente agua durante todo el día.</li>
            </ul>
          </div>
        );
      case 'avanzado':
        return (
          <div>
            <h3>Dieta Sugerida: Avanzado</h3>
            <p>Planificación estricta, posible ciclado de carbohidratos y timing de nutrientes para maximizar el rendimiento.</p>
            <ul>
              <li><strong>Timing de Nutrientes:</strong> Consumir la mayoría de los carbohidratos alrededor de tu ventana de entrenamiento.</li>
              <li><strong>Ciclado de Carbs:</strong> Días altos en carbohidratos en tus entrenamientos más duros, y días bajos en los de descanso.</li>
              <li><strong>Comida Trampa (Cheat Meal):</strong> Una a la semana puede ayudar a la adherencia y a recargar glucógeno.</li>
            </ul>
          </div>
        );
      default:
        return <p>No se ha seleccionado un nivel de experiencia en el registro.</p>;
    }
  };

  return <div className="content-page">{renderContent()}</div>;
};

export default DietPage;