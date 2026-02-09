function student(examPassed, callMe){
    // console.log("Exam passed:", examPassed)
    // console.log("Callback function:", callMe)
    if(examPassed){
        console.log("Calling the callback function:", examPassed)
        callMe("Alice")
    }
    else{
        console.log("Exam failed.")
    }
}

function aliceCalling(name){
    console.log("Hello", name)
}

student(true, aliceCalling)