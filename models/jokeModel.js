import { Schema, model } from "mongoose";

function normalizeEmoji(emoji) {
  return emoji.replace(/\uFE0F/g, ""); // Remove variation selector
}

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
              return /^\p{Extended_Pictographic}+$/u.test(normalizeEmoji(val));
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
