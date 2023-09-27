const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        // min value is 1
        min: 1,
        // validation in data 
        validate: {
            validator: v => v % 2 ===  0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        // makes data required
        required: true,
        // changes data to lowercase
        lowercase: true,
        // min string length
        minLength: 5
    },
    createdAt: {
        type: Date,
        // data is unchangeable
        immutable: true,
        // creates default value
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    address: {
        street: String,
        city: String
    },
    todolist: mongoose.SchemaTypes.ObjectId,
    //todolist: []
})

// must be a function
userSchema.methods.sayHi = function() {
    console.log(`Hi, my name is ${this.name}`)
}

// static method
userSchema.statics.findByName = function(name) {
    return this.find({ name: new RegExp(name, 'i') })
}

// used in queries
userSchema.query.byName = function(name) {
    return this.where({ name: new RegExp(name, 'i') })
}

// virtual data type
userSchema.virtual('namedEmail').get(function() {
    return `${this.name} <${this.email}>`
})

// middleware
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now()
    next()
})

//middleware afterwards
userSchema.post("save", function(doc, next) {
    doc.sayHi()
    next()
})

module.exports = mongoose.model("User", userSchema)