const express = require('express');
const app = express();
require('./confige');
const users = require('./users');
const cors = require("cors")
const product = require("./product")
const multer = require("multer")//
const path = require("path")

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false })) //

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

const upload = multer({ storage: storage }) //


app.post('/upload', upload.single('image'), async (req, res) => {
    // console.log(req.body);
    // console.log(req.file);

    let result = new product({ ...req.body})
    console.log('result: ', result);
    result = await result.save()
    res.send({
        status: "success",
        result: result  , 
        // image: `http://localhost:3000/uploads/${req.file.filename}` 
    })
});

app.get("/showitem", async (req, res) => {
    let result = await product.find()
    res.send(result)
})

app.delete("/deleteitem/:id", async (req, res) => {
    let result = await product.findOne({ _id: req.params.id })
    result = await result.deleteOne()
    res.send(result)
})

app.get("/updateget/:id", async (req, res) => {
    let result = await product.findOne({ _id: req.params.id })
    res.send(result)

})

app.patch("/updateitem/:id", async (req, res) => {
    let result = await product.updateOne(
        {
            _id: req.params.id
        },
        {
            name: req.body.name,
            newprice: req.body.newprice,
            oldprice: req.body.oldprice,
            description: req.body.description
        }
    )

    res.send(result)
})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        const user_data = await users.findOne(req.body).select("-password")
        if (user_data) {
            res.send(user_data)
        } else {
            res.send("user not found !")
        }
    }
    else {
        res.send("not found !")
    }
})


app.get("/products", async (req, res) => {
    let result = await product.find()
    res.send(result)
})


const port = 3000;
app.listen(port, () => {
    console.log("Server running on port :", port);
});
