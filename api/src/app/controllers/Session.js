require('dotenv').config();
const jwt = require('jsonwebtoken');

const hash = require('../../utils/hash');
const CollaboratorModel = require('../models/Collaborators');
const TutorModel = require('../models/Tutors');

module.exports = {
  async store(request, response) {
    const { email, password } = request.body;
    const userData = await CollaboratorModel.showByEmail(email);

    if (!userData) {
      return response.status(400).json({ message: 'Usuário não existe' });
    }

    const isPasswordCorrect = await hash.compare(
      userData.hash_password,
      password
    );

    if (!isPasswordCorrect) {
      return response
        .status(401)
        .json({ message: 'Usuário ou senha inválidos' });
    }

    return response.status(200).json({
      token: `Bearer ${jwt.sign(
        { userId: userData._id },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      )}`,
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
      },
    });
  },
};
