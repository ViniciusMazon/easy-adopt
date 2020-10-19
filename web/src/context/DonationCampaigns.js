import React, { createContext, useState, useContext } from 'react';

const tempData = [
  {
    id: 1,
    title: 'Campanha para compra de ração',
    goal: 2000.0,
    current: 300.0,
    description: 'Temos mais de 200 animais, com consumo diário de 80 kilos.',
    date: '19/10/2020',
    collaborator_id: 1,
  },
  {
    id: 2,
    title: 'Campanha para compra de produtos de limpeza',
    goal: 500.0,
    current: 300.0,
    description: 'Temos mais de 200 animais, com consumo diário de 80 kilos.',
    date: '18/10/2020',
    collaborator_id: 1,
  },
];

const DonationCampaignsContext = createContext();

export default function DonationCampaignsProvider({ children }) {
  const [campaigns, setCampaigns] = useState(tempData);

  return (
    <DonationCampaignsContext.Provider value={{ campaigns, setCampaigns }}>
      {children}
    </DonationCampaignsContext.Provider>
  );
}

export function useDonationCampaigns() {
  const context = useContext(DonationCampaignsContext);

  if (!context)
    throw new Error(
      'useContext must be used within a DonationCampaignsProvider'
    );
  const { campaigns, setCampaigns } = context;

  return { campaigns, setCampaigns };
}
