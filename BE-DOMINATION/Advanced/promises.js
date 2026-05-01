// Promises in Async JavaScript -

function connectToServer(){
    console.log("Connecting to Server..........")
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            // console.log("Connected ........");
            resolve("Connected........");
        }, 2000)
    })
}

function getCourses(){
    console.log("Fetching Courses");
    return new Promise ( function (resolve, reject){
        setTimeout(function(){
            resolve(["Course 1", "Course 2", "Course 3" ]);
        }, 2000)
    })

}

connectToServer()
.then(function(response){
    console.log(response)

    return getCourses()
    
})

.then(function(response){
    console.log(response)
})