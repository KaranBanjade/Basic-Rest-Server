const mongoose = require("mongoose")
mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb://localhost:27017/olympics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection With mongo Successfull")
}).catch((e)=>{
    console.log("No Connection")
})

