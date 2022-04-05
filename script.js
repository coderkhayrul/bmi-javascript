function calculateBmi() {
    var weight = document.bmi_form.weight.value
    var height = document.bmi_form.height.value
    if (weight > 0 && height > 0) {
        var bmi_result = weight / (height * height)
        document.bmi_form.bmi.value = bmi_result.toFixed(3);
        if (bmi_result < 18.5) {

            document.bmi_form.meaning.className = "form-control bg-info";

            document.bmi_form.meaning.value = "You are unhealthy, too thin."
        }
        if (bmi_result > 18.5 && bmi_result < 25) {
            document.bmi_form.meaning.className = "form-control bg-dark text-light";
            document.bmi_form.meaning.value = "You are healthy enough."
        }
        if (bmi_result > 25 && bmi_result < 30) {
            document.bmi_form.meaning.className = "form-control bg-danger";
            document.bmi_form.meaning.value = "You have overweight."
        }
        if (bmi_result > 30) {
            document.bmi_form.meaning.value = "Your condition is serious."
        }
    } else {
        alert("Data you've entered might be incorrect. Please check and try again.")
    }

}