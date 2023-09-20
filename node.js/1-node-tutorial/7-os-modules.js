const os = require('os')


// info on current user
const user = os.userInfo()
console.log(user)


console.log(`The system uptime is ${os.uptime()} seconds or ${os.uptime()/60} minutes or ${os.uptime()/3600} hours`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)