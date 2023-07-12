import { Sequelize, DataTypes } from "sequelize";

const Incidence = {
  client_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  incident_desc: Sequelize.STRING,
  city: Sequelize.STRING,
  country: Sequelize.STRING,
  date: Sequelize.DATE,
  weather_report: Sequelize.JSONB,
};

export default Incidence;
