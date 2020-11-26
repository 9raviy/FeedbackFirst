const express=require('express')
const app= express()

app.get('/',(req,res)=>{res.send({'name':'Ravi','Age':'20',"Sex":"Male"})}
    )

const PORT= process.env.PORT || 5000
app.listen(PORT)