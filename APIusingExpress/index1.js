//by mrunal

const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
const products = require("./products.json");
const PORT = 8000;
app.use(express.json());
// used for hybrid development like mobile , browser and always spicify /api in path
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((product) => product.id == id);
  return res.json(product);
});

app.get("/products", (req, res) => {
  //  res.json(products)
  const html = `<ul>${products.map(
    (product) => `<li>${product.product_name}</li>`
  )}</ul>`;
  res.send(html);
});

app.post("/api/products", (req, res) => {
  const newData = req.body;
  products.push({ id: products.length + 1, ...newData });
  fs.writeFile("./products.json", JSON.stringify(products), (err, data) => {
    if (err) {
      res.send(err);
    }
    return res.send({
      status: "Product Added Successfully",
      id: products.length + 1,
    });
  });
});

app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((product) => product.id == id);
  products[productIndex] = { id: id, ...req.body };
  fs.writeFile("./products.json", JSON.stringify(products), (err, data) => {
    if (err) {
      res.status(500).json({ status: err.status, message: err.message });
    }
    return res.send({
      status: "Product Updated Successfully",
      id: id,
    });
  });
});
app.delete("/api/products/:id", (req, res) => {
    const id = Number(req.params.id);
    const productIndex = products.findIndex((product) => product.id == id);
    products.splice(productIndex,1)
    fs.writeFile("./products.json", JSON.stringify(products), (err, data) => {
      if (err) {
        res.status(500).json({ status: err.status, message: err.message });
      }
      return res.send({
        status: "Product Deleted Successfully"
      });
    });
  });

app.listen(PORT, () => console.log(`server is listening to the Port ${PORT}`));
