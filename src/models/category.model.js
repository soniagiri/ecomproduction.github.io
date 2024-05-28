const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim:true,
      maxLength:32,
      unique:true
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
