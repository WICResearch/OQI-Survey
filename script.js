const scriptURL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

document.getElementById("surveyForm").addEventListener("submit", function(e) {
e.preventDefault();

const form = e.target;

const data = {
role: form.role.value,
agency: form.agency.value,
trainingRating: form.trainingRating.value,
communicationRating: form.communicationRating.value,
participantBarriers: form.participantBarriers.value,
oqiPriorities: form.oqiPriorities.value,
additionalFeedback: form.additionalFeedback.value
};

document.getElementById("message").textContent = "Submitting...";

fetch(scriptURL, {
method: "POST",
body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
document.getElementById("message").textContent = "Thank you! Your response has been submitted.";
form.reset();
})
.catch(error => {
document.getElementById("message").textContent = "There was an error submitting the survey.";
console.error("Error:", error);
});
});
