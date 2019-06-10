function validate() {
    var x, text;
    x = document.getElementById("idNumber").value;
    console.log(x);
    // if(x.value == "")
    // {
    // 	alert("No blank values allowed");
    // }else {
    if (isNaN(x) || x < 1 || x > 2018) {
        // text = "Input not valid";
        alert("Input not valid");
    } else {
        // text = "Input OK";
        alert("Input OK");
    }
    // document.getElementById("demo").innerHTML = text;
}
// }
