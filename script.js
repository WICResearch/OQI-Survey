<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>WIC OQI Staff Survey</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>

<main class="container">
<div class="survey-header">
<h1>WIC OQI Staff Survey</h1>
<p>
This survey gathers staff feedback on current needs for the State Agency,
Local Agencies, and WIC participants.
</p>
</div>

<form id="surveyForm">
<div class="progress-text" id="progressText"></div>
<div class="progress-bar">
<div id="progressFill"></div>
</div>

<section id="questionCard" class="question-card"></section>

<div class="button-row">
<button type="button" id="backBtn">Back</button>
<button type="button" id="nextBtn">Next</button>
<button type="submit" id="submitBtn">Submit Survey</button>
</div>

<p id="message"></p>
</form>
</main>

<script src="script.js"></script>
</body>
</html>


On Tue, Jul 7, 2026 at 7:14 AM Ali Coleman <alicoleman96@gmail.com> wrote:
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>WIC OQI Staff Survey</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>

<main class="container">
<div class="survey-header">
<h1>WIC OQI Staff Survey</h1>
<p>
This survey gathers staff feedback on current needs for the State Agency,
Local Agencies, and WIC participants.
</p>
</div>

<form id="surveyForm">
<div class="progress-text" id="progressText"></div>
<div class="progress-bar">
<div id="progressFill"></div>
</div>

<section id="questionCard" class="question-card"></section>

<div class="button-row">
<button type="button" id="backBtn">Back</button>
<button type="button" id="nextBtn">Next</button>
<button type="submit" id="submitBtn">Submit Survey</button>
</div>


<p id="message"></p>
</form>
</main>

<script src="script.js"></script>
</body>
</html>


On Tue, Jul 7, 2026 at 7:09 AM Coleman, Ali M <ali.m.coleman@wv.gov> wrote:
Index: 
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>WIC OQI Staff Survey</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>

<main class="container">
<h1>WIC OQI Staff Survey</h1>
<p>
This survey is intended to gather staff feedback on current needs for the State Agency,
Local Agencies, and WIC participants.
</p>

<form id="surveyForm">

<section>
<section class="form-step active">
  <h2> Section1: About You</h2>

<label>What is your primary role?</label>
<select name="primaryRole" required>
<option value="">Select one</option>
<option>Local Agency Director</option>
<option>Nutritionist/RD</option>
<option>CPA</option>
<option>Breastfeeding Peer Counselor</option>
<option>Breastfeeding Coordinator</option>
<option>Outreach</option>
<option>Office Associate</option>
<option>State Agency</option>
<option>Other</option>
</select>

<label>Which local agency do you work for?</label>
<input type="text" name="localAgency" />

<label>How many years have you worked in WIC?</label>
<select name="yearsInWIC" required>
<option value="">Select one</option>
<option>&lt;1</option>
<option>1–5</option>
<option>6–10</option>
<option>11–20</option>
<option>20+</option>
</select>
</section>

<section>
<h2>Section 2: Training</h2>

<p>Rate your agreement with each statement.</p>

<div id="trainingQuestions"></div>

<label>Preferred training methods. Select all that apply.</label>
<div class="checkbox-group">
<label><input type="checkbox" name="preferredTrainingMethods" value="In-person"> In-person</label>
<label><input type="checkbox" name="preferredTrainingMethods" value="Live virtual"> Live virtual</label>
<label><input type="checkbox" name="preferredTrainingMethods" value="Recorded webinars"> Recorded webinars</label>
<label><input type="checkbox" name="preferredTrainingMethods" value="Self-paced online"> Self-paced online</label>
<label><input type="checkbox" name="preferredTrainingMethods" value="Regional workshops"> Regional workshops</label>
<label><input type="checkbox" name="preferredTrainingMethods" value="One-on-one coaching"> One-on-one coaching</label>
</div>

<label>What training topics would you like to receive during the next year?</label>
<textarea name="trainingTopics" rows="4"></textarea>
</section>

<section>
<h2>Section 3: Communication</h2>

<p>Rate your agreement with each statement.</p>

<div id="communicationQuestions"></div>

<label>How do you prefer to receive important updates?</label>
<div class="checkbox-group">
<label><input type="checkbox" name="preferredUpdates" value="Email"> Email</label>
<label><input type="checkbox" name="preferredUpdates" value="Monthly newsletter"> Monthly newsletter</label>
<label><input type="checkbox" name="preferredUpdates" value="Virtual meetings"> Virtual meetings</label>
<label><input type="checkbox" name="preferredUpdates" value="Written summaries"> Written summaries</label>
<label><input type="checkbox" name="preferredUpdates" value="Teams"> Teams</label>
<label><input type="checkbox" name="preferredUpdates" value="Other"> Other</label>
</div>
</section>

<section>
<h2>Section 4: Policies and Procedures</h2>

<div id="policyQuestions"></div>

<label>What policy or procedure creates the greatest challenge in your work?</label>
<textarea name="policyChallenge" rows="4"></textarea>
</section>

<section>
<h2>Section 5: Technology</h2>

<div id="technologyQuestions"></div>

<label>What technology improvements would help you most?</label>
<textarea name="technologyImprovements" rows="4"></textarea>
</section>

<section>
<h2>Section 6: Participant Experience</h2>

<p>Thinking about WIC participants, rate each statement.</p>

<div id="participantQuestions"></div>

<label>What barriers do participants face in your area?</label>
<textarea name="participantBarriers" rows="4"></textarea>
</section>

<section>
<h2>Section 7: Local Agency Needs</h2>

<label>What challenges currently have the greatest impact on your clinic? Select all that apply.</label>
<div class="checkbox-group">
<label><input type="checkbox" name="localAgencyNeeds" value="Staffing shortages"> Staffing shortages</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Recruitment"> Recruitment</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Retention"> Retention</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Training"> Training</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Funding"> Funding</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Outreach"> Outreach</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Participant recruitment"> Participant recruitment</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Participant retention"> Participant retention</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Clinic space"> Clinic space</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Technology"> Technology</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Scheduling"> Scheduling</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Transportation"> Transportation</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Language barriers"> Language barriers</label>
<label><input type="checkbox" name="localAgencyNeeds" value="Other"> Other</label>
</div>
</section>

<section>
<h2>Section 8: State Agency Support</h2>

<p>The State Agency...</p>

<div id="stateAgencyQuestions"></div>
</section>

<section>
<h2>Section 9: Looking Ahead</h2>

<label>What should be OQI’s highest priorities during the next three years? Select your top five.</label>
<div class="checkbox-group">
<label><input type="checkbox" name="oqiPriorities" value="Staff training"> Staff training</label>
<label><input type="checkbox" name="oqiPriorities" value="Staff retention"> Staff retention</label>
<label><input type="checkbox" name="oqiPriorities" value="Participant recruitment"> Participant recruitment</label>
<label><input type="checkbox" name="oqiPriorities" value="Participant retention"> Participant retention</label>
<label><input type="checkbox" name="oqiPriorities" value="Breastfeeding support"> Breastfeeding support</label>
<label><input type="checkbox" name="oqiPriorities" value="Technology improvements"> Technology improvements</label>
<label><input type="checkbox" name="oqiPriorities" value="Outreach"> Outreach</label>
<label><input type="checkbox" name="oqiPriorities" value="Data and reporting"> Data and reporting</label>
<label><input type="checkbox" name="oqiPriorities" value="Clinic efficiency"> Clinic efficiency</label>
<label><input type="checkbox" name="oqiPriorities" value="Communication"> Communication</label>
<label><input type="checkbox" name="oqiPriorities" value="Policy simplification"> Policy simplification</label>
<label><input type="checkbox" name="oqiPriorities" value="Partnerships"> Partnerships</label>
<label><input type="checkbox" name="oqiPriorities" value="Nutrition education"> Nutrition education</label>
<label><input type="checkbox" name="oqiPriorities" value="Equity/access"> Equity/access</label>
<label><input type="checkbox" name="oqiPriorities" value="Other"> Other</label>
</div>
</section>

<section>
<h2>Final Questions</h2>

<label>What is one thing WIC is doing well?</label>
<textarea name="wicDoingWell" rows="4"></textarea>

<label>What is one thing WIC should improve first?</label>
<textarea name="wicImproveFirst" rows="4"></textarea>

<label>If you could change one thing about the WV WIC Program tomorrow, what would it be?</label>
<textarea name="wicChangeTomorrow" rows="4"></textarea>
</section>

<button type="submit">Submit Survey</button>
<p id="message"></p>

</form>
</main>

<script src="script.js"></script>
</body>
</html>

script: 
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

style:
body {
font-family: Arial, sans-serif;
background: #f5f7fa;
color: #222;
margin: 0;
padding: 0;
}

.container {
max-width: 850px;
margin: 40px auto;
background: white;
padding: 30px;
border-radius: 14px;
box-shadow: 0 2px 14px rgba(0,0,0,0.12);
}

h1 {
color: #4b2e83;
margin-bottom: 10px;
}

h2 {
color: #4b2e83;
margin-top: 35px;
border-bottom: 2px solid #eee;
padding-bottom: 8px;
}

p {
line-height: 1.5;
}

section {
margin-bottom: 30px;
}

label {
display: block;
margin-top: 18px;
font-weight: bold;
}

input[type="text"],
select,
textarea {
width: 100%;
padding: 12px;
margin-top: 6px;
border: 1px solid #bbb;
border-radius: 8px;
font-size: 1rem;
box-sizing: border-box;
}

textarea {
resize: vertical;
}

.checkbox-group {
margin-top: 10px;
padding: 12px;
background: #f8f8fb;
border-radius: 8px;
}

.checkbox-group label {
font-weight: normal;
margin-top: 10px;
}

.question {
margin-bottom: 12px;
}

button {
margin-top: 25px;
width: 100%;
padding: 15px;
background: #4b2e83;
color: white;
border: none;
border-radius: 8px;
font-size: 1.1rem;
cursor: pointer;
}

button:hover {
background: #351f63;
}

#message {
margin-top: 20px;
font-weight: bold;
text-align: center;
}
