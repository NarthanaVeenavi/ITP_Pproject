const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//In mongodb, when create an object, a object Id is created automatically

const   MenuOrderSchema = new Schema({
    menu_Id : {
        type: String,
        required: true
    },
    menu_name : {
        type: String,
        required: true
    },
    menu_type :{
        type: String,
        required : true
    },
    no_of_plates:{
        type: Number,
        required : true
    },
    unit_price :{
        type: Number,
        required : true
    },
    cus_name :{
        type: String,
        required : true
    },
    cus_phone :{
        type: String,
        required : true
    },
    cus_email :{
        type: String,
        required : true
    },
    cus_NIC :{
        type: String,
        required : true
    },
   total_amount :{
        type: Number,
        required : true
    }

})

const MenuOrder = mongoose.model("MenuOrder", MenuOrderSchema);

module.exports = MenuOrder;