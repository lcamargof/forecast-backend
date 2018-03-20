const History = require('./database/models');
const cities = require('./city.list.json');

module.exports = (app) => {
  app.get('/', (req, res) => res.send('API is running'));

  // Get search history
  app.get('/history', async (req, res) => {
    try {
      // TODO: Return the whole history, pagination not supported for this test
      const data = await History.find();
      return res.status(200).send({ success: true, message: 'Search history fetched successfully', data });
    } catch (err) {
      return res.status(500).send({ success: false, message: 'Error fetching the search history' });
    }
  });

  // Save history
  app.post('/history', async (req, res) => {
    if (!req.body.city || !req.body.country) {
      return res.status(500).send({ success: false, message: 'Missing data' });
    }

    const search = new History({
      city: req.body.city,
      country: req.body.country,
    });

    try {
      const newSearch = await search.save();
      return res.status(200).send({ success: true, message: 'Search history saved' });
    } catch (err) {
      return res.status(500).send(err);
    }
  });

  // City autocomplete
  // TODO: Search is not optimized, but the performance is OK for this test
  app.get('/cities/:q', (req, res) => {
    let count = 0;
    const value = req.params.q;
    const result = cities.filter((city) => {
      const keep = (!value || city.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) && count < 5;

      if (keep) {
        count += 1;
      }

      return keep;
    });

    return res.status(200).send(result);
  });
};