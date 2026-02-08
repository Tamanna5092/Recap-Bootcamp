let data
data = 0
data = "" // falsy
data = " " // truthy
data = "0"
data = null
data = undefined
data = {}
data = []
data = false
// data = true

if(data){
    console.log("The value of data is truthy")
}
else {
    console.log(`The value of ${data} is falsy`)
}

if(!data){
    console.log("Inside if with a falsy value")
}

if(!data == true){
    console.log("Only true inside the double equals")
}

if(!!data == true){
    console.log("Only false inside the double equals")
}