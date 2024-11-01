let currentStep = 0;
const steps = document.querySelectorAll(".step");
const formSteps = document.querySelectorAll(".form-step");
const errorMessage = document.getElementById("error-message");

function updateFormSteps() {
    formSteps.forEach((formStep, index) => {
        formStep.classList.toggle("active", index === currentStep);
        steps[index].classList.toggle("active", index <= currentStep);
    });
    errorMessage.textContent = '';
}

function nextStep(step) {
    const inputs = formSteps[currentStep].querySelectorAll("input, select, textarea");
    let allValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            allValid = false;
            errorMessage.textContent = "Check faulty fields.";
        }
    });
    if (allValid) {
        currentStep = step;
        updateFormSteps();
    }
}

function previousStep(step) {
    currentStep = step;
    updateFormSteps();
}

document.getElementById("multiStepForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    // Implement your form submission logic here
});

updateFormSteps();
