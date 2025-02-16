import { Schema, model } from "mongoose";

const jokeSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    votes: [
      {
        value: { type: Number, default: 0 },
        label: {
          type: String,
          enum: ["😂", "👍", "❤️"],
          required: true,
        },
      },
    ],
    availableVotes: {
      type: [String],
      enum: ["😂", "👍", "❤️"],
      default: ["😂", "👍", "❤️"],
    },
  },
  { timestamps: true }
);

export default model("Joke", jokeSchema);
