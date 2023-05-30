import mongoose from "mongoose";

let isConected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  if (isConected) {
    console.log('DB already connected')
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_promt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConected = true;
    console.log("DB connected");
  } catch (error) {
    console.log(error);
  }

}
