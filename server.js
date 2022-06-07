







const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res)=> {
    res.sendFile(__dirname + "/index.html")
    
})

app.post("/", (req,res)=>{
    var weight = parseFloat(req.body.Weight)
    var height = parseFloat(req.body.Height)
    
    var bmi = (weight / (height * height) * 703)
    
    console.log(weight)

    console.log(bmi)

   res.send("<h1>Your BMI is </1>" + bmi) 
})


app.listen(port, () => {
    console.log("Sever is working bud!!")
})