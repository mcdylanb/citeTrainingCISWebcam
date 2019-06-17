

function validate() {
    var x, text;
    idNumber = document.getElementById("idNumber").value;
    var pattern = /[^a-zA-Z\s]/;
    var phoneResult = pattern.test(idNumber);
    if (phoneResult == false) {
        alert("invalid input");
    } else {
        alert("valid input");
    }
}
// }
