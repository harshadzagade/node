// call stack main()
console.log("Im first")

// Node API
setTimeout(()=>{
    console.log("I'm second waiting for 2 sec");
},2000)


// Node API
setTimeout(()=>{
    console.log("I'm first but I'm waiting for 0 sec");
},0)


// call stack API
console.log("I'm finisher")