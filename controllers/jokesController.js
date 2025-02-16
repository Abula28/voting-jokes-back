import Joke from "../models/jokeModel";

export const getJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();

    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ err });
  }
};
