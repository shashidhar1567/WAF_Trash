// const   express = require('express');
// const   app = express();
// const PORT=3000;
// const router0 = express.Router();
// const router1 = express.Router();
// const router2 = express.Router();
// const router3 = express.Router();

// router0.get('/', (req, res) => {
//     console.log("Express Router is working");
//     next();
// });
// router1.get('/', (req, res) => {
//     console.log("Express Router is working");
//     next();
// });
// router2.get('/', (req, res) => {
//     console.log("Express Router is working");
//     res.send("Hello from Express Router");
// });
// router3.get('/', (req, res) => {
//     console.log("Express Router is working");
//     res.send("Hello from Express Router");
// });
// app.use('/', router0 );
// app.use('/', router1 );
// app.use('/', router2 );
// app.use('/', router3 ); 

// // Start the server
// app.listen(PORT, (err) => {
//     if (err) {
//         console.error('Error starting server:', err);
//         return;
//     }
//     else {      
//         console.log(`Server is running on port ${PORT}`);
//     }
// });


var express = require('express');
var app = express();
app.post('/submit ', (req, res) => {
    console.log("Received POST request to /submit");
    res.send("POST request received at /submit");
});
app.delete('/delete', (req, res) => {
    console.log("Received DELETE request to /delete");
    res.send("DELETE request received at /delete");
});
app.get('/get', (req, res) => {
    console.log("Received GET request to /get");
    res.send("GET request received at /get");
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at http://%s:%s", host, port);           
});











