// models/sensorModel.js

import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema({
  sensor_id: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  status: { type: String, default: "green" }, // ✅ Include status field
  timestamp: { type: Date, default: Date.now },
});

const Sensor = mongoose.model("Sensor", sensorSchema);
export default Sensor;
