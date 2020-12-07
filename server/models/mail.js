import mongoose from 'mongoose';

const { Schema } = mongoose;

const MailSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      min: ['1', 'Kategorinavn må bestå av minst 1 tegn'],
      max: ['30', 'Kategorinavn må være under 30 tegn'],
    },
    email: {
        type: String,
        trim: true,
        min: ['1', 'Kategorinavn må bestå av minst 1 tegn'],
        max: ['30', 'Kategorinavn må være under 30 tegn'],
      },
      question: {
        type: String,
        trim: true,
        min: ['1', 'Kategorinavn må bestå av minst 1 tegn'],
        max: ['30', 'Kategorinavn må være under 30 tegn'],
      },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Mail = mongoose.model('Mail', MailSchema);

export default Mail;
