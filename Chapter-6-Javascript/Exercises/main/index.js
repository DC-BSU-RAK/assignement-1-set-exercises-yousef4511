function calculateTotal() {
    const price = parseFloat(document.getElementById("price").value);
    const liters = parseFloat(document.getElementById("liters").value);
  
    // Check if inputs are valid numbers
    if (isNaN(price) || isNaN(liters)) {
      document.getElementById("total").textContent = "Please enter valid numbers.";
      return;
    }
  
    const total = price * liters;
    document.getElementById("total").textContent = `Total: £${total.toFixed(2)}`;
  }
  