import Sensor from "../models/sensorModel.js";
import { analyzeSensorStatus } from "../utils/analyzeSensorStatus.js";

// ➕ Add Sensor Data
export const addSensorData = async (req, res) => {
  try {
    const { sensor_id, type, value, unit } = req.body;

    if (!sensor_id || !type || value === undefined || !unit) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const status = analyzeSensorStatus(type, value); // Use external logic

    const newSensor = new Sensor({ sensor_id, type, value, unit, status });
    await newSensor.save();

    res.status(201).json(newSensor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//getting sensor data
export const getAllSensors = async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// sensor status
export const getSensorsByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const sensors = await Sensor.find({ status });
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
