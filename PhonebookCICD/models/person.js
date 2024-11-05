const mongoose = require('mongoose')

mongoose.set('strictQuery', false)


const url = process.env.MONGODB_URI


console.log('connecting to', url)

mongoose.connect(url)

  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({

  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    validate: function(v) {
      return /^(0\d{1,2}|[1-9]\d{0,2})-\d+$/.test(v)
    },
    message: props => `${props.value} is not a valid phone number!`
  }
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)