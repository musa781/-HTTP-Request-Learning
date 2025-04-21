import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res) => {

    res.send("hello, world");

});
app.get("/about", (req,res) => {

    res.send("</h1>ABOUT</h1>");

});
app.get("/contact", (req,res) => {

    res.send("</h1>CONTACT</h1>");

});

app.listen(port, () => {

    console.log(`server running on port ${port}.`);
});