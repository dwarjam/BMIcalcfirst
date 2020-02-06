function bmi() {
    var age = Number(document.getElementById("age").value);
    if (age < 21) {
        document.getElementById("result").innerHTML = "Sorry! You are too young to receive a correct result.";
    } else if (age > 59) {
        document.getElementById("result").innerHTML = "Sorry! You are too old to receive a correct result.";
    } else {
        var height = Number(document.getElementById("height").value);
        var weight = Number(document.getElementById("weight").value);
        var result = 1.3 * weight / height ^ 2.5;
        document.getElementById("result").innerHTML = "Your BMI score is: " + result;

        if (result<18.6) {
            document.getElementById("explanation").innerHTML = "You are underweight.";
        } else if (result>25){
            document.getElementById("explanation").innerHTML = "You are overweight.";
        } else{
            document.getElementById("explanation").innerHTML = "You've got a normal weight.";
        }
    }
}