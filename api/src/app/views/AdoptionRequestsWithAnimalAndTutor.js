module.exports = {
  render(adoptionRequest) {
    return {
      id: adoptionRequest.id,
      status: adoptionRequest.status,
      animal_name: adoptionRequest.animal_name,
      animal_gender: adoptionRequest.animal_gender,
      animal_avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.animal_avatar}`,
      tutor_name: adoptionRequest.tutor_name,
      tutor_gender: adoptionRequest.tutor_gender,
      tutor_avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.tutor_avatar}`,
    };
  },
  renderMany(adoptionRequests) {
    return adoptionRequests.map((adoptionRequest) =>
      this.render(adoptionRequest)
    );
  },
};
