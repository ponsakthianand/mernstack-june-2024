const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongooseTraining');

const { Schema } = mongoose;

//schema
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  city: String
});

//model
const Blogs = mongoose.model('Blogs', blogSchema);

const blog = new Blogs({ title: 'First Blog', author: 'Sakthi', city: 'Chennai' });
blog.save().then(() => console.log('meow'));