//instance from express framework
const express = require('express');
//call the express function 
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200'
  }
  app.use(cors({
    origin: '*',
    credentials: true
  }));//call db module from db.js file

const db = require('./db');


// instance from bodyparser wich used to able us use req.body stetment
var bodyParser = require('body-parser')
app.use(bodyParser.json())
// make variable for the port in our case the port we will work with is 3000
const port = 3000;
app.get('/patients', async(req, res)=>{
    // return response to the client
    //200 code referce to request done correctly
    res.status(200).json("Im working ...");
})

// run the server on the port we defined before
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
app.get('/patients', async(req, res)=>{
    // return response to the client
    //200 code referce to request done correctly
    res.status(200).json("Im working ...");
})

// here every one should write his endpoint with this template to make the file organized and easy to read for every one of us
/*
req body is  obj =>
{
    ID : event's ID ,
    title:event's title,
    type : event's type,
    date:event's data,
    start_time:event's start_time,
    end_time:event's end_time,
    location:event's location,
    description : event's description
}
url => /API/events/editevent
httpType =>PUT
endpoint description => {
    endpoint get obj from req_body 
    then endpoint take the data  and replace the old_date stored in the data base with the new data comming from the body
}
*/
app.put('/API/events/editevent', async (req, res) => {
     
    //write the nesseary sql stetment
    let sql = "update event set Title = ?,Date = ?,start_time =?,end_time=?,location=?,description=?,Type_ID=? where ID = ?"
   let [result,rows] = await db.connection.execute(sql, [req.body.title, req.body.date, req.body.start_time, req.body.end_time, req.body.location, req.body.description, req.body.type, req.body.ID])
     res.status(200).json("row edited");
 });
  /*
url => /API/events/Show_all
httpType =>GET
endpoint description => {
    endpoint executes the select command from the database connection (select event table), then takes the selected columns (title, date)
    from the event table and outputs them onto the screen
}
*/
app.get('/API/events/Show_all/:id', async (req, res) => {
    var id = req.params.id;
    let sql = "SELECT Title, Date,start_time,end_time FROM event where User_ID = ? ";
    let results =  await db.connection.execute(sql,[id])
    res.status(200).json(results[0]);
});


app.delete('/API/events/deleteevent', async (req, res) =>{
    let sql = "delete from event where ID = ?"
    let [result,rows] = await db.connection.execute(sql , [req.body.ID])
    res.status(200).json("Event Successfully Deleted.");
 });

 app.post('/API/events/addevent', async (req, res) => {
    //write the nesseary sql stetment
    let sql = "insert into  event (Title,Date,start_time,end_time,location,description,Type_ID,User_ID) values(?,?,?,?,?,?,?,?);"
   let [result,rows] = await db.connection.execute(sql, [req.body.title, req.body.date, req.body.start_time, req.body.end_time, req.body.location, req.body.description, req.body.type, req.body.userid])
     res.status(200).json("Event Successfully create ");
 });
