import express from "express";
import fs from "fs";

//import de router:
import productsRouter from "./routes/products.router.js";
//import cartsRouter from "./routes/carts.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// products utilizando router
app.use("/api/products", productsRouter);

//inicializacion del server en puerto 8080
app.listen(8080, () => {
  console.log("servidor abierto en 8080");
});
