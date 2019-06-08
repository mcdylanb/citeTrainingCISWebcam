function myFunction() {
    var x, text;
  
    // Get the value of the input field with id="numb"
    x = document.getElementById("IDNumber").value;
  
    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 1000) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("message").innerHTML = text;
}
