import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrthographicCamera, MapControls } from '@react-three/drei';

interface StarData {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  magnitude: number;
  distance: number;
  name: string;
}

interface StarProps {
  x: number;
  y: number;
  size: number;
  brightness: number;
  isSelected: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ x, y, size, brightness, isSelected, onClick }) => {
  const color = isSelected ? '#ffff00' : '#ffffff';
  const actualSize = isSelected ? size * 1.5 : size;
  const clickBrightness = isSelected ? 100 : brightness

  return (
    <group position={[x, y, 0]} onClick={onClick}>
      {/* Single glow layer */}
      {isSelected && (
        <mesh>
          <circleGeometry args={[actualSize * 8, 48]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.15}
          />
        </mesh>
      )}

      {/* Main star */}
      <mesh>
        <circleGeometry args={[actualSize, 32]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={clickBrightness}
        />
      </mesh>
    </group>
  );
};

const StarField: React.FC = () => {
  const generateStar = (id: number): StarData => ({
    id,
    x: (Math.random() - 0.5) * 200,
    y: (Math.random() - 0.5) * 100,
    size: Math.random() * 0.4,
    brightness: Math.random() * 0.5 + 0.5,
    magnitude: Number((Math.random() * 6).toFixed(1)),
    distance: Number((Math.random() * 100).toFixed(1)),
    name: `Star ${id + 1}`
  });

  const [stars, setStars] = useState<StarData[]>(() => 
    Array.from({ length: 1000 }, (_, i) => generateStar(i))
  );
  
  const [selectedStar, setSelectedStar] = useState<StarData | null>(null);

  const addStar = () => {
    const newStar = generateStar(stars.length);
    setStars(prev => [...prev, newStar]);
  };
  
  const handleStarClick = (star: StarData) => {
    console.log(star)
    if (selectedStar == star) {
      setSelectedStar(null)
    } else {
      setSelectedStar(star)
    }
  };

  return (
    <div 
      className="star-field-container bg-dark position-relative h-100 w-100" 
      style={{borderRadius: '4.75rem'}}
    >
      <div className="floating-controls">
        <button className="btn btn-primary" onClick={addStar}>
          Add Star
        </button>
      </div>

      <Canvas style={{ borderRadius: '4.75rem' }}>
        <OrthographicCamera
          makeDefault
          position={[0, 0, 100]}
          zoom={10}
        />

      <MapControls
          enableRotate={false}
          enableDamping={true}
          dampingFactor={0.25}
          minZoom={5}
          maxZoom={50}
          panSpeed={0.5}
          zoomSpeed={0.5}
          screenSpacePanning={true}  // This ensures proper 2D panning
        />
        
        <group>
          {stars.map((star) => (
            <Star
              key={star.id}
              x={star.x}
              y={star.y}
              size={star.size}
              brightness={star.brightness}
              isSelected={selectedStar?.id === star.id}
              onClick={() => handleStarClick(star)}
            />
          ))}
        </group>
      </Canvas>

      {selectedStar && (
        <div 
          className="info-panel card border border-2 border-light rounded-5 mx-5 mb-5"
        >
          <div className="card-body">
            <h5 className="card-title">{selectedStar.name}</h5>
            <div className="star-info">
              <p>Magnitude: {selectedStar.magnitude}</p>
              <p>Distance: {selectedStar.distance} light years</p>
              <p>Brightness: {Math.round(selectedStar.brightness * 100)}%</p>
            </div>
            <button 
              className="btn btn-secondary"
              onClick={() => setSelectedStar(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarField;
