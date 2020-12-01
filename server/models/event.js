import mongoose from 'mongoose';
import slugify from 'slugify';

const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: ['3', 'Navn må bestå av flere enn 3 tegn'],
      max: ['100', 'Navn må være under 100 tegn'],
    },
    slug: String,
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

EventSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

export default mongoose.model('Event', EventSchema);
