import mongoose from 'mongoose';

/** GJENBRUK FRA FORELESERS EKSEMPLER
 * Konfigurasjon av database tilkobling
 */
const connectDatabase = async () => {
  let dbCon;
  try {
    dbCon = await mongoose.connect(process.env.DATABASE_LOCAL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${dbCon.connection.host}`);
};

export default connectDatabase;
