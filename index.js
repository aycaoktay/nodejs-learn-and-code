const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
  { id: 1, name: "iphone 14", price: "30000 TL", isActive: "true" , imageUrl : "/1.jpg", isHome: "true"},
  { id: 2, name: "iphone 15", price: "40000 TL", isActive: "false", imageUrl : "/2.jpg" ,isHome: "true" },
  { id: 3, name: "iphone 16", price: "50000 TL", isActive: "true" , imageUrl : "/3.jpg", isHome: "false"},
  { id: 4, name: "iphone 17", price: "60000 TL", isActive: "true" , imageUrl : "/1.jpg", isHome: "true"},
];

//routes
app.use("/products/:id", function (req, res) {
  const urun = data.find(u => u.id == req.params.id);
  res.render("product-details" , urun);
});
app.use("/products", function (req, res) {
  res.render("products", {
    urunler: data,
    
  });
});
app.use("/", function (req, res) {
  res.render("index");
});
app.listen(3000, () => {
  console.log("listenin at port 3000");
});
