import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import CampaignCard from '../../components/CampaignCard';
import LoadingCampaignCard from '../../components/Shimmer/LoadingCampaignCard';

import { Container, Header, PlusIcon, CampaignsCards } from './styles';

export default function DonationCampaigns() {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    api.get('/donation-campaigns').then((response) => {
      setCampaigns(response.data);
    });
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Header>
        <Link to="/donation/create-campaign">
          <PlusIcon />
          <p>Criar campanha</p>
        </Link>
      </Header>

      <CampaignsCards>
        {isLoading && <LoadingCampaignCard />}
        {!isLoading &&
          campaigns.map((campaign) => {
            return (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                title={campaign.title}
                goal={campaign.goal}
                current={campaign.current}
                description={campaign.description}
              />
            );
          })}
      </CampaignsCards>
    </Container>
  );
}
