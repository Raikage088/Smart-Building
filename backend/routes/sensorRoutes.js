import express from "express";
import {
  addSensorData,
  getAllSensors,
  getSensorsByStatus,
} from "../controller/sensorController.js";

const router = express.Router();
// Add sensors data
router.post("/", addSensorData);
// Get sensors data
router.get("/", getAllSensors);

// 🔍 Get Sensors by Status (green, yellow, red)
router.get("/:status", getSensorsByStatus);

export default router;
