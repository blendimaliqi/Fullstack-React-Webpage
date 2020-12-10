import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

/** BASERT PÅ FORELESERS EKSEMPLER */
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Fyll ut fullt navn'],
    },
    email: {
      type: String,
      required: [true, 'Fyll inn gyldig e-post adresse'],
      unique: true,
      validate: [validator.isEmail, 'Eposten er ikke gyldig'],
    },
    password: {
      type: String,
      required: [true, 'Velg et passord'],
      minlength: [3, 'Passordet må minmum bestå av 3 karakterer'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin', 'superadmin'],
        message: 'Spesifiser rolle',
      },
      default: 'user',
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

/** GJENBRUKT FRA FORELESERS EKSEMPLER */
UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

/** GJENBRUKT FRA FORELESERS EKSEMPLER */
UserSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

/** GJENBRUKT FRA FORELESERS EKSEMPLER */
UserSchema.methods.comparePassword = async function (password) {
  const result = argon2.verify(this.password, password);

  return result;
};

/** BASERT PÅ FORELESERS EKSEMPLER */
UserSchema.virtual('ArticleAdmin', {
  ref: 'Article',
  localField: '_id',
  foreignField: 'administrator',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
