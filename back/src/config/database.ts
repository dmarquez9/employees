import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('Database is Connected');
  } catch (err) {
    console.log(err)
  }
}
