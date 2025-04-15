// utils/analyzeSensorStatus.js

export const analyzeSensorStatus = (type, value) => {
  let status = "green";

  if (type === "vibration") {
    if (value > 12) status = "red";
    else if (value > 8) status = "yellow";
  }

  if (type === "temperature") {
    if (value > 75) status = "red";
    else if (value > 60) status = "yellow";
  }

  if (type === "power") {
    if (value > 80) status = "red";
    else if (value > 50) status = "yellow";
  }

  return status;
};
