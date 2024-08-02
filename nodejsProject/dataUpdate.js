//Using Express
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

//create an instance of express
const app = express();
app.use(cors())
app.use(express.json())
const { Schema } = mongoose;

//Sample in-memory storage for todo items
// let todos = [];

// connecting mongodb
mongoose.connect('mongodb://localhost:27017/mongooseTraining')
  .then(() => {
    console.log('DB Connected!')
  })
  .catch((err) => {
    console.log(err)
  })

//schema
const userSchema = new Schema({
  name: {
    required: true, // to make this field mandatory
    type: String
  },
  password: String,
  profession: String
});

//model
const Users = mongoose.model('Users', userSchema);

app.post('/user/add', async function (req, res) {
  try {
    var payload = req.body;
    const user = await new Users(payload);
    user.save().then(() => console.log('meow'));
    res.end('Record Created');
  } catch (err) {
    console.log(err);
  }
})


app.get('/users', async function (req, res) {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
})

app.put("/user/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, password, profession } = req.body
    const updateUserData = await Users.findByIdAndUpdate(
      id,
      { name, password, profession },
      { new: true }
    )
    res.json(updateUserData)
  } catch (err) {
    console.log(err)
  }
})

app.delete("/user/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Users.findByIdAndDelete(id)
    res.status(204).end();
  } catch (err) {
    console.log(err)
  }
})

//creating schema
// const todoSchema = new mongoose.Schema({
//   title: {
//     required: true,
//     type: String
//   },
//   description: String
// })

// //creating model
// const todoModel = mongoose.model('Todo', todoSchema);

// //Create a new todo item
// app.post('/todos', async (req, res) => {
//   const { title, description } = req.body;
//   // const newTodo = {
//   //     id: todos.length + 1,
//   //     title,
//   //     description
//   // };
//   // todos.push(newTodo);
//   // console.log(todos);
//   try {
//     const newTodo = new todoModel({ title, description });
//     await newTodo.save();
//     res.status(201).json(newTodo);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: error.message });
//   }


// })

// //Get all items
// app.get('/todos', async (req, res) => {
//   try {
//     const todos = await todoModel.find();
//     res.json(todos);
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: error.message });
//   }
// })

// Update a todo item
// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const id = req.params.id;
//     const updatedTodo = await todoModel.findByIdAndUpdate(
//       id,
//       { title, description },
//       { new: true }
//     )

//     if (!updatedTodo) {
//       return res.status(404).json({ message: "Todo not found" })
//     }
//     res.json(updatedTodo)
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: error.message });
//   }


// })

// // Delete a todo item
// app.delete('/todos/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     await todoModel.findByIdAndDelete(id);
//     res.status(204).end();
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: error.message });
//   }

// })

//Start the server
const port = 8000;
app.listen(port, () => {
  console.log("Server is listening to port " + port);
})