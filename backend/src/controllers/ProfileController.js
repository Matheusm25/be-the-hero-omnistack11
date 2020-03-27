const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { authorization: ongId } = req.headers;

    const incidents = await connection('incidents')
      .where('ong_id', ongId);

    return res.json(incidents);
  },
};
