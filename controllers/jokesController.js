import Joke from "../models/jokeModel.js";

export const getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find();

    res.status(200).json(jokes);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const getJokeById = async (req, res) => {
  try {
    const id = req.params.id;
    const joke = await Joke.findById(id);

    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }

    res.status(200).json(joke);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.find();
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    res.status(200).json(randomJoke);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

export const createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;

    const newJoke = await Joke.create({ question, answer });

    res
      .status(201)
      .json({ message: "Joke Created Successfully", joke: newJoke });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const updateJoke = async (req, res) => {
  try {
    const id = req.params.id;
    const { question, answer } = req.body;

    const joke = await Joke.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true, runValidators: true }
    );

    res.status(200).json({ message: "Joke Updated Successfully", joke });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const voteJoke = async (req, res) => {
  try {
    const id = req.params.id;
    const { value, label } = req.body;

    const joke = await Joke.findById(id);

    const voteIndex = joke.votes.findIndex((vote) => vote.label === label);

    if (voteIndex === -1) {
      joke.votes.push({ value, label });
      await joke.save();
      return res.status(200).json({ message: "Vote submitted successfully" });
    }

    joke.votes[voteIndex].value += value;
    await joke.save();

    res.status(200).json({ message: "Vote updated successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const unvoteJoke = async (req, res) => {
  try {
    const id = req.params.id;
    const { label } = req.body;

    const joke = await Joke.findById(id);

    const voteIndex = joke.votes.findIndex((vote) => vote.label === label);

    if (voteIndex === -1) {
      return res.status(404).json({ message: "Vote not found" });
    }

    joke.votes[voteIndex].value -= 1;

    if (joke.votes[voteIndex].value === 0) {
      joke.votes = joke.votes.filter((vote) => vote.label !== label);
    }

    await joke.save();

    res.status(200).json({ message: "Vote removed successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const deleteJoke = async (req, res) => {
  try {
    const id = req.params.id;

    await Joke.findByIdAndDelete(id);

    res.status(200).json({ message: "Joke deleted successfully" });
  } catch (err) {
    res.status(500).json({ err });
  }
};
