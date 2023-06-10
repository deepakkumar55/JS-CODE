// 3. Create a length converter function
function calculateLength() {
    // Get input values and perform the length conversion calculation
    var lengthInput = document.getElementById("lengthInput").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result = 0;

    // Perform the length conversion calculation
    if (fromUnit === "inches") {
      if (toUnit === "centimeters") {
        result = lengthInput * 2.54;
      } else if (toUnit === "feet") {
        result = lengthInput / 12;
      } else if (toUnit === "meters") {
        result = lengthInput * 0.0254;
      } else {
        result = lengthInput;
      }
    } else if (fromUnit === "centimeters") {
      if (toUnit === "inches") {
        result = lengthInput * 0.393701;
      } else if (toUnit === "feet") {
        result = lengthInput * 0.0328084;
      } else if (toUnit === "meters") {
        result = lengthInput * 0.01;
      } else {
        result = lengthInput;
      }
    } else if (fromUnit === "feet") {
      if (toUnit === "inches") {
        result = lengthInput * 12;
      } else if (toUnit === "centimeters") {
        result = lengthInput * 30.48;
      } else if (toUnit === "meters") {
        result = lengthInput * 0.3048;
      } else {
        result = lengthInput;
      }
    } else if (fromUnit === "meters") {
      if (toUnit === "inches") {
        result = lengthInput * 39.3701;
      } else if (toUnit === "centimeters") {
        result = lengthInput * 100;
      } else if (toUnit === "feet") {
        result = lengthInput * 3.28084;
      } else {
        result = lengthInput;
      }
    }

    // Update the result field
    document.getElementById("result").value = result;
  }