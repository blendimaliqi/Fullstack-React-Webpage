import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      min: ['1', 'Tittel må bestå av minst 1 tegn'],
      max: ['100', 'Tittel må være under 100 tegn'],
    },
    // slug: String,
    ingress: {
      type: String,
      required: true,
      min: ['1', 'Ingress må bestå av minst 1 tegn'],
    },
    content: {
      type: String,
      required: true,
      min: ['1', 'Innhold må bestå av minst 1 tegn'],
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    administrator: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

export default mongoose.model('Article', ArticleSchema);
