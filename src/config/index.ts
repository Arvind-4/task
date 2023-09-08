require('dotenv').config()

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const oneHourFromNow = Math.floor(Date.now() / 1000) + 60 * 60

export default {
  dev: process.env.NODE_ENV !== 'production',
  env: process.env.NODE_ENV,
  port: parseInt(process.env.PORT) || 8000,
  seed: {
    seedData: process.env.SEED_DATA === 'true',
  },
  mongoDB: {
    dbUrl: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key-here',
    expiresIn: process.env.JWT_EXPIRES_IN || oneHourFromNow,
  },
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}
