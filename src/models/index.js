import sequelize from "../config";
import Incidence from "./incidence";

sequelize.define("incidence", Incidence);

export default sequelize;
