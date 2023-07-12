import { Router } from "express";
import incidenceController from "../controllers/incidenceController";
const incidence = Router();

incidence.get("/", incidenceController.getAllIncidences);
incidence.get("/country/:id", incidenceController.searchByCountry);
incidence.get("/id/:id", incidenceController.searchById);
incidence.post("/create", incidenceController.createIncident);

export default incidence;
