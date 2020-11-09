const { format } = require('date-fns');
const { currencyFormatter } = require('../../utils/currencyFormatter');

module.exports = {
  render(donationCampaign) {
    return {
      id: donationCampaign.id,
      creation_date: format(
        new Date(donationCampaign.creation_date),
        'dd/MM/yyyy'
      ),
      status: donationCampaign.status,
      title: donationCampaign.title,
      description: donationCampaign.description,
      goal: currencyFormatter(donationCampaign.goal),
      current: currencyFormatter(donationCampaign.current),
      created_by: donationCampaign.created_by,
    };
  },
  renderMany(donationCampaigns) {
    return donationCampaigns.map((donationCampaign) =>
      this.render(donationCampaign)
    );
  },
};
