const scriptURL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

const scaleOptions = [
"Strongly Agree",
"Agree",
"Neutral",
"Disagree",
"Strongly Disagree"
];

const questionGroups = {
trainingQuestions: {
trainingPreparesJob: "Training prepares me to perform my job effectively.",
trainingOpportunities: "I have adequate opportunities for continuing education.",
trainingQuestionsEasy: "I can easily ask questions during training.",
trainingRelevant: "Training is relevant to my daily work.",
trainingFormatWorks: "Training is offered in a format that works well for me.",
trainingMaterialsClear: "Training materials are easy to understand.",
trainingFollowUpSupport: "Follow-up support is available after training."
},
communicationQuestions: {
communicationTimely: "I receive important information in a timely manner.",
policyUpdatesClear: "Policy updates are communicated clearly.",
policyGuidanceClear: "Policy guidance is easy to understand.",
knowWhoToContact: "I know who to contact when I have questions.",
saLaCommunicationEffective: "Communication between the State Agency and Local Agencies is effective.",
feedbackHeard: "I feel my feedback is heard by State Agency staff."
},
policyQuestions: {
policiesEasyToLocate: "Policies are easy to locate.",
policiesPlainLanguage: "Policies are written in plain language.",
policyChangesCommunicated: "Policy changes are communicated before implementation.",
policyChangeSupport: "I receive enough support when policies change."
},
technologyQuestions: {
crossroadsSupportsWork: "Crossroads supports my work effectively.",
technologyMakesJobEasier: "Technology makes my job easier.",
adequateTechnologyTraining: "I receive adequate technology training.",
equipmentMeetsNeeds: "Equipment available at my clinic meets our needs."
},
participantQuestions: {
participantsScheduleEasily: "Participants can schedule appointments easily.",
participantsReachClinic: "Participants can reach our clinic when needed.",
participantsUnderstandInfo: "Participants can understand WIC information.",
participantsUseBenefits: "Participants can successfully use their benefits.",
participantsRespectfulService: "Participants receive respectful service.",
participantsTimelyAppointments: "Participants receive timely appointments."
},
stateAgencyQuestions: {
saUsefulGuidance: "Provides useful guidance.",
saRespondsPromptly: "Responds promptly to questions.",
saUnderstandsChallenges: "Understands challenges faced by local agencies.",
saTechnicalAssistance: "Provides adequate technical assistance.",
saSupportsInnovation: "Supports innovation."
}
};

function createScaleQuestions() {
Object.entries(questionGroups).forEach(([containerId, questions]) => {
const container = document.getElementById(containerId);

Object.entries(questions).forEach(([name, label]) => {
const wrapper = document.createElement("div");
wrapper.className = "question";

const questionLabel = document.createElement("label");
questionLabel.textContent = label;

const select = document.createElement("select");
select.name = name;
select.required = true;

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select one";
select.appendChild(defaultOption);

scaleOptions.forEach(optionText => {
const option = document.createElement("option");
option.value = optionText;
option.textContent = optionText;
select.appendChild(option);
});

wrapper.appendChild(questionLabel);
wrapper.appendChild(select);
container.appendChild(wrapper);
});
});
}

createScaleQuestions();

document.querySelectorAll('input[name="oqiPriorities"]').forEach(checkbox => {
checkbox.addEventListener("change", () => {
const checked = document.querySelectorAll('input[name="oqiPriorities"]:checked');

if (checked.length > 5) {
checkbox.checked = false;
alert("Please select no more than five priorities.");
}
});
});

document.getElementById("surveyForm").addEventListener("submit", function(e) {
e.preventDefault();

const form = e.target;
const formData = new FormData(form);
const data = {};

for (const [key, value] of formData.entries()) {
if (data[key]) {
if (!Array.isArray(data[key])) {
data[key] = [data[key]];
}
data[key].push(value);
} else {
data[key] = value;
}
}

document.getElementById("message").textContent = "Submitting...";

fetch(scriptURL, {
method: "POST",
body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
document.getElementById("message").textContent = "Thank you! Your response has been submitted.";
form.reset();
window.scrollTo({ top: 0, behavior: "smooth" });
})
.catch(error => {
document.getElementById("message").textContent = "There was an error submitting the survey. Please try again.";
console.error("Error:", error);
});
});
