function validate() {
    var x, text;
    x = document.getElementById("idNumber").value;
    console.log(x);
    // if(x.value == "")
    // {
    // 	alert("No blank values allowed");
    // }else {
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
// }
