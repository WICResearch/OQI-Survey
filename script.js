const scriptURL =
  "https://script.google.com/macros/s/AKfycbx498RteNL0Z6RA1u0yfL0Cx_CeFxGD-UvMV62RM0FublMepjFRAwZElvxXt5qGFeNE/exec";

const scaleOptions = [
  "Strongly Disagree",
  "Somewhat Disagree",
  "Neutral",
  "Somewhat Agree",
  "Strongly Agree"
];

let currentPage = 0;
const answers = {};

const pages = [
  {
    title: "About You",
    description:
      "These questions help group responses by staff role and experience.",
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
        options: [
          "Less than 1 year",
          "1–5 years",
          "6–10 years",
          "11–20 years",
          "More than 20 years"
        ]
      }
    ]
  },
  {
    title: "Local Agency Operations",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "localOperationsPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "localOperationsOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "localOperationsGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "localOperationsEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Local Agency Operations",
    fields: [
      {
        type: "textarea",
        name: "localOperationsSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic?"
      }
    ]
  },
  {
    title: "Outreach Quality Improvement, Innovation, and Best Practices",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "outreachPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "outreachOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "outreachGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "outreachEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Outreach Quality Improvement, Innovation, and Best Practices",
    fields: [
      {
        type: "textarea",
        name: "outreachSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic?"
      }
    ]
  },
  {
    title: "Grant Statement of Work Discussion",
    description:
      "Please indicate your level of agreement with each statement about this session.",
    fields: [
      {
        type: "scale",
        name: "grantPresenterClear",
        label: "The presenter communicated clearly."
      },
      {
        type: "scale",
        name: "grantOrganized",
        label: "The session was well organized."
      },
      {
        type: "scale",
        name: "grantGoodUseOfTime",
        label: "The session was a good use of my time."
      },
      {
        type: "scale",
        name: "grantEasyToFollow",
        label: "The session was easy to follow."
      }
    ]
  },
  {
    title: "Grant Statement of Work Discussion",
    fields: [
      {
        type: "textarea",
        name: "grantSuggestions",
        label:
          "Do you have any suggestions for improvement for future sessions on this topic?"
      }
    ]
  },
  {
    title: "Final Question",
    fields: [
      {
        type: "textarea",
        name: "positiveTakeaway",
        label:
          "What is one or more positive takeaway from today's session that could help improve WV WIC?"
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

  page.fields.forEach((field) => {
    questionCard.appendChild(createField(field));
  });

  progressText.textContent = `Question ${currentPage + 1} of ${pages.length}`;

  progressFill.style.width = `${
    ((currentPage + 1) / pages.length) * 100
  }%`;

  backBtn.style.display = currentPage === 0 ? "none" : "block";

  nextBtn.style.display =
    currentPage === pages.length - 1 ? "none" : "block";

  submitBtn.style.display =
    currentPage === pages.length - 1 ? "block" : "none";

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
    defaultOption.disabled = true;

    select.appendChild(defaultOption);

    const options =
      field.type === "scale" ? scaleOptions : field.options;

    options.forEach((optionText) => {
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

    if (field.required) {
      input.required = true;
    }

    wrapper.appendChild(input);
  }

  if (field.type === "textarea") {
    const textarea = document.createElement("textarea");

    textarea.name = field.name;
    textarea.rows = 5;
    textarea.value = answers[field.name] || "";

    if (field.required) {
      textarea.required = true;
    }

    wrapper.appendChild(textarea);
  }

  if (field.type === "checkbox") {
    const group = document.createElement("div");
    group.className = "checkbox-group";

    field.options.forEach((optionText) => {
      const optionLabel = document.createElement("label");
      const checkbox = document.createElement("input");

      checkbox.type = "checkbox";
      checkbox.name = field.name;
      checkbox.value = optionText;

      if (
        Array.isArray(answers[field.name]) &&
        answers[field.name].includes(optionText)
      ) {
        checkbox.checked = true;
      }

      checkbox.addEventListener("change", () => {
        const selected = group.querySelectorAll("input:checked");

        if (
          field.maxSelections &&
          selected.length > field.maxSelections
        ) {
          checkbox.checked = false;

          alert(
            `Please select no more than ${field.maxSelections}.`
          );
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
  const fields = questionCard.querySelectorAll(
    "input, select, textarea"
  );

  fields.forEach((field) => {
    if (field.type === "checkbox") {
      const checked = questionCard.querySelectorAll(
        `input[name="${field.name}"]:checked`
      );

      answers[field.name] = Array.from(checked).map(
        (item) => item.value
      );
    } else {
      answers[field.name] = field.value;
    }
  });
}

function validateCurrentPage() {
  const fields = questionCard.querySelectorAll(
    "input, select, textarea"
  );

  for (const field of fields) {
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  return true;
}

nextBtn.addEventListener("click", () => {
  if (!validateCurrentPage()) {
    return;
  }

  saveCurrentPage();
  currentPage++;
  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

backBtn.addEventListener("click", () => {
  saveCurrentPage();
  currentPage--;
  renderPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document
  .getElementById("surveyForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateCurrentPage()) {
      return;
    }

    saveCurrentPage();

    message.textContent = "Submitting...";
    submitBtn.disabled = true;

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
              Your input will help guide future OQI sessions.
            </p>

            <button type="button" onclick="location.reload()">
              Submit Another Response
            </button>
          </div>
        `;

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      })
      .catch((error) => {
        message.textContent =
          "There was an error submitting the survey. Please try again.";

        submitBtn.disabled = false;

        console.error("Error:", error);
      });
  });

document
  .getElementById("beginSurveyBtn")
  .addEventListener("click", () => {
    document.getElementById("introPage").style.display = "none";
    document.getElementById("surveyForm").style.display = "block";

    currentPage = 0;
    renderPage();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
    
 
   
 
