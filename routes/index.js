import { Router } from "express";
import {
  createJoke,
  deleteJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
  unvoteJoke,
  updateJoke,
  voteJoke,
} from "../controllers/jokesController.js";

const JokeRoutes = Router();

JokeRoutes.get("/", getRandomJoke);
JokeRoutes.get("/all", getAllJokes);
JokeRoutes.get("/:id", getJokeById);

JokeRoutes.post("/create", createJoke);
JokeRoutes.post("/vote/:id", voteJoke);
JokeRoutes.post("/unvote/:id", unvoteJoke);

JokeRoutes.put("/:id", updateJoke);
JokeRoutes.delete("/:id", deleteJoke);

export default JokeRoutes;
