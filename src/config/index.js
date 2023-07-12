import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://user:pass@postgres:5432/db");
// const sequelize = new Sequelize("db", "user", "pass", {
//   dialect: "postgres",
// });

export default sequelize;
