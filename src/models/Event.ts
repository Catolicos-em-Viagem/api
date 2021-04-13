import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const modelSchema = new mongoose.Schema({
  category: String,
  images: [Object],
  dateCreated: Date,
  title: String,
  description: String,
  notice: String,
  status: String

})

const modelName = 'Event'

if(mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]
} else {
  module.exports = mongoose.model(modelName, modelSchema)
}
