// Callbacks -

function connectToServer(cbfn) {
  console.log("Connecting to Server....");
  setTimeout(function () {
    console.log("Server Connected");
    cbfn();
  }, 2000);
}

function fetchCourses(cbfn) {
  console.log("Fetching Courses.......");
  setTimeout(function () {
    cbfn(["Course1", "Course 2", "Course 3"]);
  }, 2000);
}


// Callback Hell - 

connectToServer(function () {
  fetchCourses(function (data) {
    console.log(data);
  });
});
