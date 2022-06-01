const express = require('express')
const app = express()

const card = [
    {
        "number": "412755004271856",
        "id": "5"
    },
    {
        "number": "41248604271856",
        "id": "6"
    },
    {
        "number": "41275508671856",
        "id": "7"
    }
   
]

// app.get("/", ()=>{
//     res.send(r)
// })
app.get("/details/:id", (req, res)=>{
    let id = req.params.id

    let newCard = card.find(item=>item.id===id)

    console.log(newCard)

    if(newCard){
        return res.json(newCard)
    }
    res.send("Hello Node")
   
})


const PORT = 5000
app.listen(PORT, (error)=>{
    if(!error){
        console.log('Server is running in the port', PORT)
    }else{
        console.log('Error Happened')
    }
})