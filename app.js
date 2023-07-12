import express from "express";
import sequelize from "./src/models";
import incidence from "./src/routes/incidence";

require("dotenv").config();
const app = express();
sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(incidence);
app.listen(process.env.PORT);
