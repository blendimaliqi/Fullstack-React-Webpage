import mongoose from 'mongoose';

const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: ['1', 'Tittel må bestå av minst 1 tegn'],
      maxlength: ['100', 'Tittel må være under 100 tegn'],
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
    secret: {
      type: Boolean,
    },
      image: {
      type: mongoose.Schema.ObjectId,
      ref: 'Image',
      required: false,
    },
    clicks: {
      type: Number,
    },
    clicksAvg: {
      type: Number,
    }

  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);



ArticleSchema.index({
  title: 'text',
});

/*ArticleSchema.statics.calcAverageAttendees = async function () {
  const average = await this.aggregate([
    {
      $group: {
        _id: '$active',
        avgClicks: { $avg: '$clicks' },
        //sumClicks: { $sum: '$clicks'},
      },
    },
  ]);
  await this.updateMany(
    {},
    { $set: { clicksAvg: average[0].avgClicks } },
    //{ $inc: { clicks: 1 } },
  );
};

ArticleSchema.post('save', async function () {
  await this.constructor.calcAverageAttendees();
});
*/

export default mongoose.model('Article', ArticleSchema);
