import sequelize from "../config";
import User from "./user";
import Incidence from "./incidence";

sequelize.define("user", User);
sequelize.define("incidence", Incidence);

export default sequelize;
