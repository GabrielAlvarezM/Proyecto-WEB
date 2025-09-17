// src/components/SupplementPage.tsx
import React from 'react';
import type { UserProfile } from '../App';
import './ContentPage.css';

interface SupplementPageProps {
  profile: UserProfile | null;
}

const SupplementPage: React.FC<SupplementPageProps> = ({ profile }) => {
  const renderContent = () => {
    if (!profile) return <p>Por favor, completa tu registro para ver los suplementos recomendados.</p>;

    switch (profile.skillLevel) {
      case 'principiante':
        return (
          <div>
            <h3>Suplementos Recomendados: Principiante</h3>
            <p>Lo básico y con más evidencia científica para asegurar una buena recuperación y progreso inicial.</p>
            <ul>
              <li><strong>Proteína en Polvo (Whey o Vegana):</strong> Ayuda a llegar a tus requerimientos diarios de proteína.</li>
              <li><strong>Creatina Monohidratada:</strong> El suplemento más estudiado para aumentar la fuerza y el rendimiento.</li>
            </ul>
          </div>
        );
      case 'intermedio':
        return (
          <div>
            <h3>Suplementos Recomendados: Intermedio</h3>
            <p>Añadimos soporte general para una mayor demanda física y optimizar la salud.</p>
            <ul>
              <li>Proteína en Polvo y Creatina.</li>
              <li><strong>Multivitamínico:</strong> Un seguro contra posibles carencias de micronutrientes por dietas restrictivas.</li>
              <li><strong>Complejo de Magnesio:</strong> Ayuda a la función muscular, la relajación y la calidad del sueño.</li>
            </ul>
          </div>
        );
      case 'avanzado':
        return (
          <div>
            <h3>Suplementos Recomendados: Avanzado</h3>
            <p>Suplementos para optimizar al máximo el rendimiento, la recuperación y la salud general.</p>
            <ul>
              <li>Todos los anteriores.</li>
              <li><strong>Aceite de Pescado (Omega-3):</strong> Potentes propiedades antiinflamatorias y soporte para la salud articular y cardiovascular.</li>
              <li><strong>MK-677 (Ibutamoren):</strong> (Placeholder - Nota: Este es un secretagogo de la hormona del crecimiento y debe ser investigado a fondo y consultado con un profesional de la salud antes de su uso).</li>
            </ul>
          </div>
        );
      default:
        return <p>No se ha seleccionado un nivel de experiencia en el registro.</p>;
    }
  };

  return <div className="content-page">{renderContent()}</div>;
};

export default SupplementPage;