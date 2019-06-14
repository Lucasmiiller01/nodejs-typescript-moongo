import { Schema, model } from 'mongoose'

const UserShema = new Schema({
  email: String,
  firstName: String,
  lastName: String
},
{
  timestamps: true
})

export default model('User', UserShema)
