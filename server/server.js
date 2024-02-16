const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors=require('cors')
const Multer = require("multer");
dotenv.config({path:"./config/.env"})
const connectDB = require("./config/conncectDB")
const port = process.env.PORT || 5000
const path=require('path');
const cloudinary = require("cloudinary").v2;




cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
        resource_type: "auto",
    });
    return res;
}
const storage = new Multer.memoryStorage();
const upload = Multer({
    storage,
});


app.use(cors()) 
app.post("/upload", upload.single("my_file"), async (req, res) => {
    try {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const cldRes = await handleUpload(dataURI);
        res.json(cldRes);
    } catch (error) {
        console.log(error);
        res.send({
            message: error.message,
        });
    }
});




// Image Storage Engine
// const storage=multer.diskStorage({
//     destination:'./upload/images',
//     filename:(req,file,cb)=>{
//    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })
//  const upload=multer({storage:storage})
//  app.use('/images',express.static('upload/images'))
// // Creating Upload Endpoint for images
// app.post('/upload',upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
   
// })



connectDB()

app.use(cors()) 
app.use(express.json())
app.use('/API',require('./routes/productsRouter'))
app.use('/API',require('./routes/autoRoutes'))
app.use('/API',require('./routes/userRoutes'))
app.use('/API',require('./routes/orderRoutes'))

app.get("/",(req,res)=>{
    res.send('server is Runnuing')

})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server is runing in port :", port)

})