import express from "express";
import handlebars from "express-handlebars";
//import de router:
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";

//socket.io
import { Server } from "socket.io";

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", viewsRouter);

const server = app.listen(8080, () => console.log("escuchando"));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connected");
  //Message1 se utiliza para la primera fase del ejercicio
  socket.on("message1", (data) => {
    io.emit("log", data);
  });
});

//test de handlebars
//app.get("/", (req, res) => {
//let user = {
//name: "agustin",
//};
// res.render("home", {});
//});

//app.use("/food", router);

// products utilizando router
//app.use("/api/products/", productsRouter);

// products utilizando router
//app.use("/api/carts/", cartsRouter);
