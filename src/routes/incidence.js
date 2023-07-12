import { Router } from "express";
import incidenceController from "../controllers/incidenceController";
const incidence = Router();

incidence.get("/", incidenceController.getAllIncidences);
incidence.post("/country", incidenceController.searchByCountry);
incidence.post("/create", incidenceController.createIncident);

export default incidence;
