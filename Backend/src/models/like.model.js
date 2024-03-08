import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Like", likeSchema);
