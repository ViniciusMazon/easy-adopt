const helpView = require('../views/Help');

module.exports = {
  async index(request, response) {
    return response.status(200).json(helpView.render());
  },
};
