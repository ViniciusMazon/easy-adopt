module.exports = {
  render(animal) {
    return {
      id: animal.id,
      name: animal.name,
      gender: animal.gender,
      specie: animal.specie,
      size: animal.size,
      age: animal.age,
      status: animal.status,
      registration_date: animal.registration_date,
      image1_url: `${process.env.CDN_URL}/uploads/${animal.image1}`,
      image2_url: `${process.env.CDN_URL}/uploads/${animal.image2}`,
      image3_url: `${process.env.CDN_URL}/uploads/${animal.image3}`,
    };
  },
};
