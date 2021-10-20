const os = require('os') // built in module

const userinfo = os.userInfo() //for usr info
console.log(userinfo);
 const usertime = os.uptime() // how long system is running 
console.log(usertime)

const systeminfo={
    system: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(systeminfo)