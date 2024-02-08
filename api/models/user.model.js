import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: "http://ronaldmottram.co.nz/wp-content/uploads/2019/01/default-user-icon-8.jpg"
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;