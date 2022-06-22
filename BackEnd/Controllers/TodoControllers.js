const TodoModel = require('../models/TodoModels')

module.exports.getToDo = async (req,res) =>{
    const ToDo = await TodoModel.find();
    res.send(ToDo)
}

module.exports.saveToDo = async (req,res) =>{
    const {text} = req.body;
    if (text===""){
        res.send('view', { errormessage: 'your message' });
    }else{
        TodoModel
        .create({text})
        .then(()=>res.set(200).send("Added Successfully.."))
        .catch((err) => console.Console(err))
    }

}

module.exports.deleteToDo = (req,res) =>{
    const {_id} = req.body;
    TodoModel
    .findByIdAndDelete(_id)
    .then(()=>res.set(200).send("Delete Successfully.."))
    .catch((err) => console.Console(err))
}

module.exports.updateToDo = (req,res) =>{
    const {_id, text} = req.body;
    TodoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.set(200).send("Updated Successfully.."))
    .catch((err) => console.Console(err))
}