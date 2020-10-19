import React from 'react';
import { Link } from 'react-router-dom';

import { Container, CloseButton, CloseIcon } from './styles';

import { useDonationCampaigns } from '../../context/DonationCampaigns';

export default function CampaignCard({
  id,
  title,
  goal,
  current,
  description,
}) {
  const { campaigns, setCampaigns } = useDonationCampaigns();

  function handleCloseCampaign() {
    const newCampaigns = campaigns.filter((campaign) => {
      if (campaign.id !== Number(id)) {
        return campaign;
      }
    });

    setCampaigns(newCampaigns);
  }

  return (
    <Container>
      <span>
        <strong>{title}</strong>
        <p>{`R$${current} de R$${goal}`}</p>
      </span>

      <p>{description}</p>

      <CloseButton onClick={handleCloseCampaign}>
        <CloseIcon />
        Encerrar
      </CloseButton>
    </Container>
  );
}
