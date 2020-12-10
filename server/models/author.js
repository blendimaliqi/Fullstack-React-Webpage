import mongoose from 'mongoose';

const { Schema } = mongoose;

/** FORFATTER MODELL */
const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: ['1', 'Kategorinavn må bestå av minst 1 tegn'],
      max: ['30', 'Kategorinavn må være under 30 tegn'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Author = mongoose.model('Author', AuthorSchema);

export default Author;
