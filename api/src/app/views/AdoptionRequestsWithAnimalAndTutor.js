module.exports = {
  render(adoptionRequest) {
    return {
      id: adoptionRequest.id,
      status: adoptionRequest.status,
      animal: {
        id: adoptionRequest.animal_id,
        name: adoptionRequest.animal_name,
        gender: adoptionRequest.animal_gender,
        avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.animal_avatar}`,
      },
      tutor: {
        id: adoptionRequest.tutor_id,
        name: adoptionRequest.tutor_name,
        gender: adoptionRequest.tutor_gender,
        avatar: `${process.env.CDN_URL}/uploads/${adoptionRequest.tutor_avatar}`,
      },
    };
  },
  renderMany(adoptionRequests) {
    return adoptionRequests.map((adoptionRequest) =>
      this.render(adoptionRequest)
    );
  },
};
