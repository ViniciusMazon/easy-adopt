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
      images: [
        {
          image1_id: animal.image1_id,
          image1_url: `${process.env.CDN_URL}/uploads/${animal.image1_name}`,
        },
        {
          image2_id: animal.image2_id,
          image2_url: `${process.env.CDN_URL}/uploads/${animal.image2_name}`,
        },
        {
          image3_id: animal.image3_id,
          image3_url: `${process.env.CDN_URL}/uploads/${animal.image3_name}`,
        },
      ],
    };
  },
  renderMany(animals) {
    return animals.map((animal) => this.render(animal));
  },
};
