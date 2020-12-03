import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema(
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

CategorySchema.virtual('ArticleCategory', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'category',
  justOne: false,
});

export default mongoose.model('Category', CategorySchema);
