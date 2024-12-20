/* eslint-disable linebreak-style */
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI || 'mongodb://localhost:27017/phonebook-test'
  : process.env.NODE_ENV === 'development'
    ? `mongodb+srv://kieloboy:${password}@phonebookdb.yossctr.mongodb.net/?retryWrites=true`
    : process.env.MONGODB_URI

if (!url && process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

mongoose.set('strictQuery',false)
mongoose.connect(url)


const personSchema = new mongoose.Schema({

  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)
if (name && number) {

  const newperson = new Person (
    {
      name: name,
      number: number,
    },
  )
  newperson.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
  })
} else {
  Person.find({}).then(res => {
    res.forEach(element => {
      console.log(element)
    })
    mongoose.connection.close()
  })
}


