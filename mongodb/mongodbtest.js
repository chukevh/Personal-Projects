// To do list for users
const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://127.0.0.1:27017/testdb")


async function run() {
    try {
        const user = await User.findOne({ name: "Erica", email: "erica.xiang@hotmail.com" })
        // const user = await User.findByName("Erica")
        // const user = await User.findOne({ name: "Erica"})
        // const user = await User.where("name").equals("Erica").populate("todolist").limit(1)
        // const user = await User.find({ name: "Erica" })
        // const user = await User.findById("6513fb64f86a2084c3269e2c")
        console.log(user)
        // console.log(user.namedEmail)
        await user.save()
        mongoose.connection.close()
       // user.sayHi()
    } catch (err) {
        console.log(err.message)
    }

    // try {
    //     const user = await User.create({ name: "Erica", age: 28, email: "erica.xiang@hotmail.com", address: { street: "123 Cool St", city: "Sydney" } })
    //     // const user = new User({ name: "Erica" })
    //     //await user.save()
    //     console.log(user)
    // } catch (err) {
    //     console.log(err.message)
    // }
}

run()