const scriptURL = "https://script.google.com/macros/s/AKfycbx498RteNL0Z6RA1u0yfL0Cx_CeFxGD-UvMV62RM0FublMepjFRAwZElvxXt5qGFeNE/exec";

const scaleOptions = [
"Strongly Agree",
"Agree",
"Neutral",
"Disagree",
"Strongly Disagree"
];

let currentPage = 0;
const answers = {};

const pages = [
{
title: "About You",
description: "These questions help group responses by staff role and experience.",
fields: [
{
type: "select",
name: "primaryRole",
label: "What is your primary role?",
required: true,
options: [
"Local Agency Director",
"Nutritionist/RD",
"CPA",
"Breastfeeding Peer Counselor",
"Breastfeeding Coordinator",
"Outreach",
"Office Associate",
"State Agency",
"Other"
]
}
]
},
{
title: "About You",
fields: [
{
type: "text",
name: "localAgency",
label: "Which local agency do you work for?"
}
]
},
{
title: "About You",
fields: [
{
type: "select",
name: "yearsInWIC",
label: "How many years have you worked in WIC?",
required: true,
options: ["<1", "1–5", "6–10", "11–20", "20+"]
}
]
},
{
title: "Training",
description: "Rate your agreement with each statement.",
fields: [
{ type: "scale", name: "trainingPreparesJob", label: "Training prepares me to perform my job effectively." },
{ type: "scale", name: "trainingOpportunities", label: "I have adequate opportunities for continuing education." },
{ type: "scale", name: "trainingQuestionsEasy", label: "I can easily ask questions during training." }
]
},
{
title: "Training",
description: "Rate your agreement with each statement.",
fields: [
{ type: "scale", name: "trainingRelevant", label: "Training is relevant to my daily work." },
{ type: "scale", name: "trainingFormatWorks", label: "Training is offered in a format that works well for me." },
{ type: "scale", name: "trainingMaterialsClear", label: "Training materials are easy to understand." }
]
},
{
title: "Training",
fields: [
{ type: "scale", name: "trainingFollowUpSupport", label: "Follow-up support is available after training." }
]
},
{
title: "Training Preferences",
fields: [
{
type: "checkbox",
name: "preferredTrainingMethods",
label: "Preferred training methods. Select all that apply.",
options: [
"In-person",
"Live virtual",
"Recorded webinars",
"Self-paced online",
"Regional workshops",
"One-on-one coaching"
]
}
]
},
{
title: "Training Topics",
fields: [
{
type: "textarea",
name: "trainingTopics",
label: "What training topics would you like to receive during the next year?"
}
]
},
{
title: "Communication",
description: "Rate your agreement with each statement.",
fields: [
{ type: "scale", name: "communicationTimely", label: "I receive important information in a timely manner." },
{ type: "scale", name: "policyUpdatesClear", label: "Policy updates are communicated clearly." },
{ type: "scale", name: "policyGuidanceClear", label: "Policy guidance is easy to understand." }
]
},
{
title: "Communication",
description: "Rate your agreement with each statement.",
fields: [
{ type: "scale", name: "knowWhoToContact", label: "I know who to contact when I have questions." },
{ type: "scale", name: "saLaCommunicationEffective", label: "Communication between the State Agency and Local Agencies is effective." },
{ type: "scale", name: "feedbackHeard", label: "I feel my feedback is heard by State Agency staff." }
]
},
{
title: "Communication Preferences",
fields: [
{
type: "checkbox",
name: "preferredUpdates",
label: "How do you prefer to receive important updates?",
options: ["Email", "Monthly newsletter", "Virtual meetings", "Written summaries", "Teams", "Other"]
}
]
},
{
title: "Policies and Procedures",
fields: [
{ type: "scale", name: "policiesEasyToLocate", label: "Policies are easy to locate." },
{ type: "scale", name: "policiesPlainLanguage", label: "Policies are written in plain language." }
]
},
{
title: "Policies and Procedures",
fields: [
{ type: "scale", name: "policyChangesCommunicated", label: "Policy changes are communicated before implementation." },
{ type: "scale", name: "policyChangeSupport", label: "I receive enough support when policies change." }
]
},
{
title: "Policy Challenge",
fields: [
{
type: "textarea",
name: "policyChallenge",
label: "What policy or procedure creates the greatest challenge in your work?"
}
]
},
{
title: "Technology",
fields: [
{ type: "scale", name: "crossroadsSupportsWork", label: "Crossroads supports my work effectively." },
{ type: "scale", name: "technologyMakesJobEasier", label: "Technology makes my job easier." }
]
},
{
title: "Technology",
fields: [
{ type: "scale", name: "adequateTechnologyTraining", label: "I receive adequate technology training." },
{ type: "scale", name: "equipmentMeetsNeeds", label: "Equipment available at my clinic meets our needs." }
]
},
{
title: "Technology Improvements",
fields: [
{
type: "textarea",
name: "technologyImprovements",
label: "What technology improvements would help you most?"
}
]
},
{
title: "Participant Experience",
description: "Thinking about WIC participants, rate each statement.",
fields: [
{ type: "scale", name: "participantsScheduleEasily", label: "Participants can schedule appointments easily." },
{ type: "scale", name: "participantsReachClinic", label: "Participants can reach our clinic when needed." },
{ type: "scale", name: "participantsUnderstandInfo", label: "Participants can understand WIC information." }
]
},
{
title: "Participant Experience",
description: "Thinking about WIC participants, rate each statement.",
fields: [
{ type: "scale", name: "participantsUseBenefits", label: "Participants can successfully use their benefits." },
{ type: "scale", name: "participantsRespectfulService", label: "Participants receive respectful service." },
{ type: "scale", name: "participantsTimelyAppointments", label: "Participants receive timely appointments." }
]
},
{
title: "Participant Barriers",
fields: [
{
type: "textarea",
name: "participantBarriers",
label: "What barriers do participants face in your area?"
}
]
},
{
title: "Local Agency Needs",
fields: [
{
type: "checkbox",
name: "localAgencyNeeds",
label: "What challenges currently have the greatest impact on your clinic? Select all that apply.",
options: [
"Staffing shortages",
"Recruitment",
"Retention",
"Training",
"Funding",
"Outreach",
"Participant recruitment",
"Participant retention",
"Clinic space",
"Technology",
"Scheduling",
"Transportation",
"Language barriers",
"Other"
]
}
]
},
{
title: "State Agency Support",
description: "The State Agency...",
fields: [
{ type: "scale", name: "saUsefulGuidance", label: "Provides useful guidance." },
{ type: "scale", name: "saRespondsPromptly", label: "Responds promptly to questions." },
{ type: "scale", name: "saUnderstandsChallenges", label: "Understands challenges faced by local agencies." }
]
},
{
title: "State Agency Support",
description: "The State Agency...",
fields: [
{ type: "scale", name: "saTechnicalAssistance", label: "Provides adequate technical assistance." },
{ type: "scale", name: "saSupportsInnovation", label: "Supports innovation." }
]
},
{
title: "Looking Ahead",
fields: [
{
type: "checkbox",
name: "oqiPriorities",
label: "What should be OQI’s highest priorities during the next three years? Select your top five.",
maxSelections: 5,
options: [
"Staff training",
"Staff retention",
"Participant recruitment",
"Participant retention",
"Breastfeeding support",
"Technology improvements",
"Outreach",
"Data and reporting",
"Clinic efficiency",
"Communication",
"Policy simplification",
"Partnerships",
"Nutrition education",
"Equity/access",
"Other"
]
}
]
},
{
title: "Final Question",
fields: [
{
type: "textarea",
name: "wicDoingWell",
label: "What is one thing WIC is doing well?"
}
]
},
{
title: "Final Question",
fields: [
{
type: "textarea",
name: "wicImproveFirst",
label: "What is one thing WIC should improve first?"
}
]
},
{
title: "Final Question",
fields: [
{
type: "textarea",
name: "wicChangeTomorrow",
label: "If you could change one thing about the WV WIC Program tomorrow, what would it be?"
}
]
}
];

const questionCard = document.getElementById("questionCard");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

function renderPage() {
const page = pages[currentPage];

questionCard.innerHTML = `
<h2>${page.title}</h2>
${page.description ? `<p>${page.description}</p>` : ""}
`;

page.fields.forEach(field => {
questionCard.appendChild(createField(field));
});

progressText.textContent = `Question ${currentPage + 1} of ${pages.length}`;
progressFill.style.width = `${((currentPage + 1) / pages.length) * 100}%`;

backBtn.style.display = currentPage === 0 ? "none" : "block";
nextBtn.style.display = currentPage === pages.length - 1 ? "none" : "block";
submitBtn.style.display = currentPage === pages.length - 1 ? "block" : "none";

message.textContent = "";
}

function createField(field) {
const wrapper = document.createElement("div");
wrapper.className = "field";

const label = document.createElement("label");
label.textContent = field.label;
wrapper.appendChild(label);

if (field.type === "select" || field.type === "scale") {
const select = document.createElement("select");
select.name = field.name;
select.required = field.required !== false;

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Select one";
select.appendChild(defaultOption);

const options = field.type === "scale" ? scaleOptions : field.options;

options.forEach(optionText => {
const option = document.createElement("option");
option.value = optionText;
option.textContent = optionText;
select.appendChild(option);
});

if (answers[field.name]) {
select.value = answers[field.name];
}

wrapper.appendChild(select);
}

if (field.type === "text") {
const input = document.createElement("input");
input.type = "text";
input.name = field.name;
input.value = answers[field.name] || "";
wrapper.appendChild(input);
}

if (field.type === "textarea") {
const textarea = document.createElement("textarea");
textarea.name = field.name;
textarea.rows = 5;
textarea.value = answers[field.name] || "";
wrapper.appendChild(textarea);
}

if (field.type === "checkbox") {
const group = document.createElement("div");
group.className = "checkbox-group";

field.options.forEach(optionText => {
const optionLabel = document.createElement("label");
const checkbox = document.createElement("input");

checkbox.type = "checkbox";
checkbox.name = field.name;
checkbox.value = optionText;

if (Array.isArray(answers[field.name]) && answers[field.name].includes(optionText)) {
checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
const selected = group.querySelectorAll("input:checked");

if (field.maxSelections && selected.length > field.maxSelections) {
checkbox.checked = false;
alert(`Please select no more than ${field.maxSelections}.`);
}
});

optionLabel.appendChild(checkbox);
optionLabel.append(` ${optionText}`);
group.appendChild(optionLabel);
});

wrapper.appendChild(group);
}

return wrapper;
}

function saveCurrentPage() {
const fields = questionCard.querySelectorAll("input, select, textarea");

fields.forEach(field => {
if (field.type === "checkbox") {
const checked = questionCard.querySelectorAll(`input[name="${field.name}"]:checked`);
answers[field.name] = Array.from(checked).map(item => item.value);
} else {
answers[field.name] = field.value;
}
});
}

function validateCurrentPage() {
const fields = questionCard.querySelectorAll("input, select, textarea");

for (const field of fields) {
if (!field.checkValidity()) {
field.reportValidity();
return false;
}
}

return true;
}

nextBtn.addEventListener("click", () => {
if (!validateCurrentPage()) return;

saveCurrentPage();
currentPage++;
renderPage();
window.scrollTo({ top: 0, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
saveCurrentPage();
currentPage--;
renderPage();
window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("surveyForm").addEventListener("submit", function(e) {
e.preventDefault();

if (!validateCurrentPage()) return;

saveCurrentPage();

message.textContent = "Submitting...";

fetch(scriptURL, {
method: "POST",
mode: "no-cors",
body: JSON.stringify(answers)
})
.then(() => {
document.getElementById("surveyForm").innerHTML = `
<div style="text-align:center; padding:60px 20px;">
<h1 style="color:#4b2e83;">Thank You!</h1>

<p style="font-size:20px;">
Your response has been successfully submitted.
</p>

<p>
Thank you for taking the time to provide feedback.
Your input will help guide future OQI efforts.
</p>

<button onclick="location.reload()">
Submit Another Response
</button>
</div>
`;

window.scrollTo({ top: 0, behavior: "smooth" });
})
.catch(error => {
message.textContent = "There was an error submitting the survey. Please try again.";
console.error("Error:", error);
});
});

renderPage();

document.getElementById("beginSurveyBtn").addEventListener("click", () => {
document.getElementById("introPage").style.display = "none";
document.getElementById("surveyForm").style.display = "block";
renderPage();
window.scrollTo({ top: 0, behavior: "smooth" });
});
