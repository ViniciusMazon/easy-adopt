import React, { createContext, useState, useContext } from 'react';

const ProceduresContext = createContext();

const tempData = [
  {
    id: 1,
    date: '09/10/2020',
    name: 'Castração',
    comments: 'Peso do animal 8 kg',
    animal_id: 2,
    animal_name: 'Mikka',
    user_id: 1,
    user_name: 'Vera Luna Rosa',
  },
  {
    id: 1,
    date: '09/10/2020',
    name: 'Vacina contra Raiva',
    comments: 'Peso do animal 9 kg',
    animal_id: 2,
    animal_name: 'Laika',
    user_id: 1,
    user_name: 'Vinicius',
  },
  {
    id: 2,
    date: '09/10/2020',
    name: 'Castração',
    comments: 'Peso do animal 8 kg',
    animal_id: 1,
    animal_name: 'Mikka',
    user_id: 1,
    user_name: 'Vera Luna Rosa',
  },
  {
    id: 2,
    date: '09/10/2020',
    name: 'Vacina contra Raiva',
    comments: 'Peso do animal 9 kg',
    animal_id: 1,
    animal_name: 'Laika',
    user_id: 1,
    user_name: 'Vinicius',
  },
];

export default function ProceduresProvider({ children }) {
  const [procedures, setProcedures] = useState(tempData);

  return (
    <ProceduresContext.Provider value={{ procedures, setProcedures }}>
      {children}
    </ProceduresContext.Provider>
  );
}

export function useProcedures() {
  const context = useContext(ProceduresContext);

  if (!context)
    throw new Error('useProcedures must be used within a ProceduresProvider');
  const { procedures, setProcedures } = context;

  return { procedures, setProcedures };
}
