import sequelize from "../models";
import axios from "axios";
import { Op } from "sequelize";

const welcome = (res) => {
  res.send("welcome to the enyata test!");
};

const createIncident = async (req, res, next) => {
  await axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=" +
        "e1f3f30c4da757405b78162e33c526f4"
    )
    .then(async (response) => {
      const params = {
        client_id: req.body.client_id,
        city: req.body.city,
        country: req.body.country,
        incident_desc: req.body.incident_desc,
        date: req.body.date,
        weather_report: response.data,
      };

      const incidence = await sequelize.models.incidence.create(params);

      res.json(incidence);
    })
    .catch();
};

const searchByCountry = async (req, res) => {
  let incidence = await sequelize.models.incidence.findAll({
    where: {
      country: req.params.id,
    },
  });
  res.json(incidence);
};

const searchById = async (req, res) => {
  let incidence = await sequelize.models.incidence.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(incidence);
};

const getByRange = async (req, res) => {
  console.log(req.params);
  let incidence = await sequelize.models.incidence.findAll();
};

const getAllIncidences = async (req, res) => {
  const params = req.query;
  let response = [];

  let incidence = await sequelize.models.incidence.findAll();

  incidence.forEach((i) => {
    i.weather_report = JSON.parse(i.weather_report);
    //get city
    if (params.city) {
      if (params.city == i.city) {
        response.push(i);
      }
    }
    //get temperature range
    if (params.temp_min) {
      if (params.temp_max) {
        i.weather_report.main.temp >= params.temp_min &&
        i.weather_report.main.temp <= params.temp_max &&
        !response.includes(i)
          ? response.push(i)
          : console.log("item already exists");
      } else {
        if (!params.temp_max && !response.includes(i)) {
          response.push(i);
        }
      }
    }
    //get humidity range
    if (params.humidity_min) {
      if (params.humidity_max) {
        i.weather_report.main.humidity >= params.humidity_min &&
        i.weather_report.main.humidity <= params.humidity_max &&
        !response.includes(i)
          ? response.push(i)
          : console.log("item already exists");
      } else {
        if (!params.humidity_max && !response.includes(i)) {
          response.push(i);
        }
      }
    }
  });

  res.json(response.length == 0 ? incidence : response);
};

export default {
  welcome,
  searchByCountry,
  getAllIncidences,
  getByRange,
  searchById,
  createIncident,
};
