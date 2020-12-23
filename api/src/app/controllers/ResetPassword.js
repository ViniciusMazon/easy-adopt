const crypto = require('crypto');
const { format, add } = require('date-fns');

const tutorsModel = require('../models/Tutors');
const collaboratorsModel = require('../models/Collaborators');
const hash = require('../../utils/hash');
const sendMail = require('../../lib/mail');

module.exports = {
  async store(request, response) {
    try {
      const { email, token, password, role } = request.body;

      var user = {};
      if (role === 'collaborator') {
        user = await collaboratorsModel.showByEmail(email);
      } else {
        user = await tutorsModel.showByEmail(email);
      }

      if (!user) {
        return response.status(202).json({ message: 'E-mail não cadastrado' });
      }

      if (token !== user.password_reset_token) {
        return response.status(202).json({ message: 'Token inválido' });
      }

      const now = new Date().toLocaleString();
      if (now > user.password_reset_expires) {
        return response
          .status(202)
          .json({ message: 'O seu token inspirou, gere um novo' });
      }

      const hash_password = await hash.encrypt(password);

      if (role === 'collaborator') {
        user = await collaboratorsModel.edit(user.id, {
          hash_password,
          password_reset_token: null,
          password_reset_expires: null,
        });
      } else {
        user = await tutorsModel.edit(user.id, {
          hash_password,
          password_reset_token: null,
          password_reset_expires: null,
        });
      }

      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(202).json({
        message:
          'Não foi possível redefinir sua senha, tente novamente mais tarde',
      });
    }
  },
  async show(request, response) {
    try {
      const { role, email } = request.params;

      var user = {};
      if (role === 'collaborator') {
        user = await collaboratorsModel.showByEmail(email);
      } else {
        user = await tutorsModel.showByEmail(email);
      }

      if (!user) {
        return response.status(202).json({ message: 'E-mail não cadastrado' });
      }

      const token = crypto.randomBytes(20).toString('hex');
      const expires = format(add(new Date(), { days: 1 }), 'yyyy/MM/dd');

      if (role === 'collaborator') {
        await collaboratorsModel.edit(user.id, {
          password_reset_token: token,
          password_reset_expires: expires,
        });
      } else {
        await tutorsModel.edit(user.id, {
          password_reset_token: token,
          password_reset_expires: expires,
        });
      }

      const link = `http://localhost:3000/redefine-password/${role}/${user.email}/${token}`;

      await sendMail({
        to: `${user.name} <${user.email}>`,
        subject: 'Eita, esqueceu sua senha?',
        template: 'resetPassword',
        context: {
          name: user.name,
          link,
        },
      });

      return response.send();
    } catch (err) {
      return response.status(202).json({
        message: 'Erro ao tentar recuperar a senha, tente novamente mais tarde',
      });
    }
  },
};
