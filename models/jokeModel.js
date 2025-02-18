import { Schema, model } from "mongoose";

// Regex to match emojis
const emojiRegex =
  /^[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}]+$/u;

const jokeSchema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    votes: [
      {
        value: { type: Number, default: 0 },
        label: {
          type: String,
          validate: {
            validator: function (val) {
              return emojiRegex.test(val);
            },
            message: "Vote label must be an emoji!",
          },
        },
      },
    ],
    availableVotes: {
      type: [String],
      default: ["👍", "❤️", "😂", "😲", "😢", "😡"],
    },
  },
  { timestamps: true }
);

export default model("Joke", jokeSchema);
