import React, { createContext, useState, useContext } from 'react';

const AnimalsContext = createContext();

export default function AnimalsProvider({ children }) {
  const [animals, setAnimals] = useState([]);

  return (
    <AnimalsContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalsContext.Provider>
  );
}

export function useAnimals() {
  const context = useContext(AnimalsContext);

  if (!context)
    throw new Error('useAnimals must be used within a AnimalsProvider');
  const { animals, setAnimals } = context;

  return { animals, setAnimals };
}
