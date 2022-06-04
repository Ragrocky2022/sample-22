const app= require("express")();
const port=process.env.port || 3000;
app.get("",(req,res) => {
    res.send(" hello welcome ragul");
}
);
app.listen(port,() =>{
    console.log(' APp up at port ${port}');
}
);