/*You are in charge of creating a website for tracking trips. You will use server side pages using Mustache or any other server side template framework for this assignment.
Your app should allow users to do the following:
- Ability to add a new trip. A new trip consists of title, image, date of departure, date of return
- Ability to view all the trips (A sample screenshot is shown below)
- Ability to delete a trip
- Add the ability to allow user to register for the website
- Allow the user to login to the website
- Allow the user to signout from the website
- Allow the user to only see their trips after they login successfully
* Your app should work on mobile devices
* Google Trips is a good app for inspiration and ideas! (Available on the App Store)
*/


//Dependencies
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
//allow use of session
var session = require('express-session')

//setup session middleware
app.use(session({
  secret: 'instar',
  resave: false,
  saveUninitialized: false
}))


//takes body from post request and turn it into js object
var bodyParser = require('body-parser')
app.use(express.static('public'))

//parse application/x-ww-form-urlencoded
  //allow parsing of body of req to make an object
    //{key: value}
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//setting templating engine for mustache
app.engine('mustache', mustacheExpress())

//setting mustache pages directory
app.set('views', './views')

//set the view engine to mustache
app.set ('view engine', 'mustache')

let trips = []
let users = []



//Ability to add a new trip. A new trip consists of title, image, date of departure, date of return 

app.get('/', function(req, res) {
    console.log('first base!')
    user = req.body.username
    password = req.body.password
    users.push(userId: guid(), userName: user, userPassword: password, destination: destination, imageURL: imageURL)
    res.render('index', )
  })

  app.post('/login', function(req, res) {
    user = req.body.newUserName
    password = req.body.newPassword
    users.push(userId: guid(), userName: user, userPassword: password, destination: destination, imageURL: imageURL)
    res.render('index', )
  })

  app.post('/login/newUser', function(req, res) {

})

  app.post('/addlist', function(req, res) {
    destination = req.body.destination
    imageURL = req.body.image
    departureDate = req.body.departureDate
    returnDate = req.body.returnDate
  
    trips.push({tripId: guid(), destination: destination, imageURL: imageURL, departureDate: departureDate, returnDate: returnDate})
    res.render('viewTrips', {TripInfo: trips})
  })
  
  ////Ability to delete a trip 
  app.post('/delete',function(req,res){
    let tripId = req.body.tripId
    console.log(`Inside app.post /delete tripID: ${tripId}`)
    //use filter() to make a new array that does not have a matching tripId
    trips = trips.filter(function(eachTrip){
      return eachTrip.tripId != tripId
      })
  
    res.render('viewTrips.mustache', {TripInfo: trips})
  })
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  
  
  //Ability to view all the trips (A sample screenshot is shown below) 
  
  
  
  
  
  //get specific id for a user
  function guid() {
      function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
          }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
      }
  