// To do list for users
const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://127.0.0.1:27017/testdb")


async function run() {
    const user = new User({ name: "Erica" })
    await user.save()
    console.log(user)
}

run()