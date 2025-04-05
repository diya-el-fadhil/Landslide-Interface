function updateValues() {
    document.getElementById("temp").textContent = (20 + Math.random() * 5).toFixed(1) + " °C";
    document.getElementById("humidity").textContent = (50 + Math.random() * 20).toFixed(0) + " %";
    document.getElementById("soil").textContent = Math.floor(Math.random() * 1024);
    document.getElementById("rain").textContent = Math.random() > 0.5 ? "Low" : "High";
    document.getElementById("accel").textContent = `X: ${(Math.random()).toFixed(2)} | Y: ${(Math.random()).toFixed(2)} | Z: ${(1 + Math.random()).toFixed(2)}`;
    document.getElementById("pressure").textContent = (1000 + Math.random() * 10).toFixed(1) + " hPa";
  }
  
  setInterval(updateValues, 2000); // Update every 2s
  updateValues();
  