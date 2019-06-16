

function validate() {
    var x, text;
    idNumber = document.getElementById("idNumber").value;
    var pattern = /[^a-zA-Z\s]/;
    var phoneResult = pattern.test(idNumber);
    // alert(phoneResult);
//     console.log(x);
//     console.log(pattern);
//     console.log(pattern.test());
//    var result= pattern.toString();
    // console.log(phoneResult);
    // console.log(pattern.toString(idNumber));
    if (phoneResult == false) {
        alert("invalid input");
    } else {
        alert("valid input");
    }
}
// }
