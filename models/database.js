var mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://dhanesh-malviya:dhanesh123@mastercluster.i7cpa.mongodb.net/socialmedia?retryWrites=true&w=majority"
    )
    .then(function () {
        console.log("Database connected!");
    })
    .catch(function (err) {
        console.log(err);
    });
