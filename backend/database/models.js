const mongoose = require("mongoose");

const mySchema = new mongoose.Schema( {

    name : {
       type: String,
       required : true,
    },

   email :{
       type : String ,
       require: true,
       unique : true
   },

    password :{
        type : String,
        required : true 
    },
    phone :{
        type : Number,
        require : true
    }

})

const Register = new mongoose.model("user", mySchema);
module.exports = Register;
