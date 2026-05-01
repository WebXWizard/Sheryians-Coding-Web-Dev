/* Asynchronous JavaScript - 

    Callbacks
    Promises
    Async/await

     */

function getSongs(){
    setTimeout(function(){
        console.log("Songs Play After 2 Sec");
    }, 2000)
}


function getMoreSongs(){
    setTimeout(function(){
        console.log("More Songs Played")
    }, 3200)
}

getSongs()
getMoreSongs()


