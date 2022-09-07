const http = require("http");
const { nextTick } = require("process");
const app = require("./app/app");
require("dotenv").config();


http.createServer(app).listen(3000, () => {
    console.log(`Server is running on port ${process.env.port}`);
});

app.get("/", (req,res) =>{
    res.json({
        message:"Using GET /",
        host:req.body.host,
        port:process.env.port,
        method:"GET"
    })
});

app.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        message:"Using GET /:id",
        id: id,
        host:req.body.host,
        port:process.env.port,
        method:"GET",
    })
})

app.post("/", (req,res) =>{
    res.json({
        message:"Using POST /",
        host:req.body.host,
        port:process.env.port,
        method:"POST",
    })
});

app.put("/", (req,res) =>{
    res.json({
        message:"Using PUT /", 
        host:req.body.host,
        port:process.env.port,
        method:"PUT"
    })
});

app.put("/:id", (req,res) =>{
    const id = req.params.id;
    res.json({
        message:"Using PUT /:id",
        id:id,
        host:req.body.host,
        port:process.env.port,
        method:"PUT"
    })
})

app.delete("/", (req,res) =>{
    res.json({
        message:"Using DELETE /",
        host:req.body.host,
        port:process.env.port,
        method:"DELETE"
    });
})

app.delete("/:id", (req,res) =>{
    const id = req.params.id;
    res.json({
        message:"Using DELETE /:id",
        id:id,
        host:req.body.host,
        port:process.env.port,
        method:"DELETE",
    })
})

app.use((req,res)=> {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, res) =>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        }
    });
});
