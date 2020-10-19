import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container, Header, PlusIcon, CampaignsCards } from './styles';
import CampaignCard from '../../components/CampaignCard';
import { useAlert } from '../../context/Alert';
import { useDonationCampaigns } from '../../context/DonationCampaigns';

export default function DonationCampaigns() {
  const { alert, setAlert } = useAlert();
  const { campaigns } = useDonationCampaigns();

  useEffect(() => {
    if (alert === '') {
      return;
    }

    toast.success(alert);
    setAlert('');
  }, [alert, setAlert]);

  return (
    <Container>
      <Header>
        <Link to="/donation/create-campaign">
          <PlusIcon />
          <p>Criar campanha</p>
        </Link>
      </Header>

      <CampaignsCards>
        {campaigns.map((campaign) => {
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
