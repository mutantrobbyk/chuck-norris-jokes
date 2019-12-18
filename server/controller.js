const axios = require("axios");

let jokes = [];
getJokes = async () => {
  await axios
    .get(`http://api.icndb.com/jokes/random/10`)
    .then(res => {
        jokes = res.data.value
    });
};
getJokes()

module.exports = {
  getJokes: (req, res) => {
    res.status(200).send(jokes);
  },
  specificJoke: (req, res) => {
      const {id} = req.query
      const filterJoke = jokes.filter(joke => joke.id === +id)
      res.status(200).send(filterJoke)
  },
  deleteJoke: (req, res) => {
      const {id} = req.params
      const index = jokes.findIndex(joke => joke.id === +id)
      jokes.splice(index, 1)
      res.status(200).send(jokes)
  },
  updateJoke: (req, res) => {
      const {id} = req.params
      const {joke} = req.body
      const index = jokes.findIndex(joke => joke.id === +id)
      jokes.splice(index, 1, {id: +id, joke})
      console.log(jokes)
      res.status(200).send(jokes)
  }

};

